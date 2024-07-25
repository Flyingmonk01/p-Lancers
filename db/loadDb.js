import { DataAPIClient } from "@datastax/astra-db-ts";
import fetch from 'node-fetch';
import 'dotenv/config';
import sampleData from './sample-data.json' assert { type: "json" };

const COHERE_API_KEY = process.env.COHERE_API_KEY;

if (!COHERE_API_KEY) {
    console.error("Cohere API key is not set");
    process.exit(1);
}

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
    namespace: process.env.ASTRA_DB_NAMESPACE,
});

const getEmbeddings = async (text) => {
    console.log(`Fetching embeddings for text: ${text}`);
    const response = await fetch('https://api.cohere.ai/v1/embeddings', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${COHERE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            texts: [text],
            model: "small",
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error fetching embeddings: ${errorData.message || response.statusText}`);
        throw new Error(`Failed to fetch embeddings: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data.embeddings[0];
};

const createCollectionIfNotExists = async () => {
    const collections = await db.listCollections();
    const collectionExists = collections.some(collection => collection.name === "portfolio");

    if (!collectionExists) {
        try {
            await db.createCollection("portfolio", {
                vector: {
                    dimension: 1024, // Updated dimension for Cohere model
                }
            });
            console.log("Collection created successfully");
        } catch (error) {
            console.error("Error creating collection:", error);
            throw error;
        }
    } else {
        console.log("Collection already exists");
    }
};

const loadData = async () => {
    const collection = await db.collection("portfolio");
    for (const { id, info, description } of sampleData) {
        try {
            const embedding = await getEmbeddings(description);
            await collection.insertOne({
                document_id: id,
                $vector: embedding,
                info,
                description,
            });
            console.log(`Document ${id} added successfully`);
        } catch (error) {
            console.error(`Error processing document ${id}:`, error);
        }
    }
    console.log("Data added");
};

createCollectionIfNotExists().then(loadData).catch(error => {
    console.error("Error during initialization:", error);
});
