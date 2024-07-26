"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type ArrayObject = {
    id: string;
    name: string;
    email: string;
    message: string;
};

export function InfiniteMovingCardsDemo() {
    const [testimonials, setTestimonials] = useState<ArrayObject[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    "https://p-lancers-default-rtdb.firebaseio.com/userMessageData.json",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!res.ok) {
                    console.error("Failed to fetch data", res.statusText);
                    return;
                }

                const data = await res.json();

                if (data) {
                    const arrayOfObjects = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key],
                    }));
                    setTestimonials(arrayOfObjects);
                } else {
                    console.warn("Received empty data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    return (
        <div className="h-[35rem] mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            {testimonials.length > 0 && (
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            )}
        </div>
    );
}
