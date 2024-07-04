"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaArrowUp } from "react-icons/fa";

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
      const res = await fetch(
        "https://p-lancers-default-rtdb.firebaseio.com/userMessageData.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const arrayOfObjects = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setTestimonials(arrayOfObjects);
    };
    getData();
  }, []); // Fetch data only once on mount

    return (
        <div className="h-[25rem] mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                
            />
        </div>
    );
}
