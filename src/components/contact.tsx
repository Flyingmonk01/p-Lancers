"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FaLinkedin } from "react-icons/fa";

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
        <div className="min-h-full w-full rounded-md bg-neutral-950 relative flex lg:flex-row flex-col mt-20 antialiased justify-evenly items-center lg:items-start mx-auto pb-12">
            <div className="lg:w-1/2 m-24 flex justify-start items-start flex-col px-16 sm:px-0">
                <h1 className="text-3xl py-6">Get in Touch with Us</h1>
                <h1 className="text-lg font-thin ">
                    Email: <span>sameerrai350@gmail.com</span>
                </h1>
                <h1 className="text-lg font-thin ">
                    Contact: <span>+91-7355442696</span>
                </h1>
                <h1 className="text-lg font-thin ">
                    LinkedIN: <span><FaLinkedin to={'https://linkedin.com/raisameer'}/></span>
                </h1>
            </div>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-20 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Share Your Experience
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-20">
                    We value your feedback! Please take a moment to share your
                    experience with our service. Your insights help us improve
                    and continue providing exceptional service.
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
                        className="px-12 mt-16 bg-purple-800 py-2 rounded-xl hover:bg-purple-500"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <BackgroundBeams className="absolute inset-0 z-10" />
        </div>
    );
}
