import { DataAPIClient } from "@datastax/astra-db-ts";
import fetch from 'node-fetch';
import 'dotenv/config';
import { ReadableStream } from "web-streams-polyfill/ponyfill";

const COHERE_API_KEY = process.env.COHERE_API_KEY;

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
    namespace: process.env.ASTRA_DB_NAMESPACE,
});

const getEmbeddings = async (text) => {
    const response = await fetch('https://api.cohere.ai/v1/embeddings', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${COHERE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            texts: [text],
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch embeddings: ${response.statusText}`);
    }

    const data = await response.json();
    return data.embeddings[0];
};

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const latestMessage = messages[messages?.length - 1]?.content;
        let docContext = "";

        const embedding = await getEmbeddings(latestMessage);

        const collection = await db.collection("portfolio");

        const cursor = collection.find(null, {
            sort: {
                $vector: embedding,
            },
            limit: 5,
        });

        const documents = await cursor.toArray();

        docContext = `
          START CONTEXT
          ${documents?.map((doc) => doc.description).join("\n")}
          END CONTEXT
          `;

        const ragPrompt = [
            {
                role: "system",
                content: `
              You are an AI assistant answering questions as p-Lancers in their Portfolio App. 
              Format responses using markdown where applicable.
              ${docContext}
              If the answer is not provided in the context, the AI assistant will say, 
              "I'm sorry, I do not know the answer".
              `,
            },
        ];

        const response = await fetch('https://api.cohere.ai/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${COHERE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: [...ragPrompt, ...messages].map(msg => msg.content).join("\n"),
                max_tokens: 1024,
                stream: true,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch response: ${response.statusText}`);
        }

        const stream = new ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const text = decoder.decode(value);
                    controller.enqueue(text);
                }

                controller.close();
            },
        });

        return new Response(stream);
    } catch (e) {
        if (e.message.includes("Quota exceeded")) {
            console.error(
                "Quota exceeded. Please check your Cohere plan and billing details."
            );
            return new Response(
                "Quota exceeded. Please check your Cohere plan and billing details.",
                { status: 429 }
            );
        }
        throw e;
    }
}
