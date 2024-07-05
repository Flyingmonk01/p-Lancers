"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
    const [messageData, setMessageData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const postMessageData = (e: any) => {
        const { name, value } = e.target;
        setMessageData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { name, email, message } = messageData;
        if (!name || !email || !message) {
            alert("Fill All The Details");
            return null;
        }
        try {
            const res = await fetch(
                "https://p-lancers-default-rtdb.firebaseio.com/userMessageData.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,
                    }),
                }
            );

            if (res.status === 200) {
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message.");
            }
            setMessageData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            alert("Error occurred during sending the message. Try Again!!");
        }
    };

    return (
        <div className="min-h-full w-full rounded-md bg-neutral-950 relative flex lg:flex-row flex-col mt-20 antialiased justify-evenly items-center mx-auto mb-12">
            <div className="lg:w-1/2 m-24 flex justify-start items-start flex-col px-16 sm:px-0">
                <h1 className="text-3xl py-6">Get in Touch with Us</h1>
                <h1 className="text-lg font-thin ">
                    Email:{" "}
                    <span>s@google.com</span>
                </h1>
                <h1 className="text-lg font-thin ">
                    Contact:{" "}
                    <span>73*******</span>
                </h1>
                <h1 className="text-lg font-thin ">
                    Address:{" "}
                    <span>1/7 NYC, America</span>
                </h1>
                
            </div>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-20 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Share Your Experience
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-20">
                    We&apos;re here to help you bring your projects to life.
                    Whether you have questions, need more information, or are
                    ready to start your next big venture, our team is eager to
                    assist you. Please fill out the contact form below, and one
                    of our representatives will get back to you promptly.
                    Let&apos;s create something amazing together!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="w-full relative z-20 flex flex-col items-center "
                >
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={messageData.name}
                        onChange={postMessageData}
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative mt-4 bg-neutral-950 placeholder:text-neutral-700 p-4"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={messageData.email}
                        onChange={postMessageData}
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative mt-4 bg-neutral-950 placeholder:text-neutral-700 p-4"
                    />
                    <textarea
                        placeholder="Your Message..."
                        name="message"
                        value={messageData.message}
                        onChange={postMessageData}
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative mt-4 bg-neutral-950 placeholder:text-neutral-700 p-4"
                    />
                    <button
                        type="submit"
                        className="bg-purple-900 transition-all w-auto delay-75 py-2 px-15 mt-12 rounded-lg hover:bg-purple-700 sm:px-4"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <BackgroundBeams className="absolute inset-0 z-10" />
        </div>
    );
}
