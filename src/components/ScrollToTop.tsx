"use client";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
    return (
        <Link
            href={"/"}
            onClick={() => {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <FaArrowUp className="fixed h-8 w-8 bottom-5 right-5 z-50 p-1 bg-gray-300 text-black rounded-full hover:cursor-pointer hover:bg-gray-400 hover:delay-75 hover:px-2 animate-bounce" />
        </Link>
    );
}

export default ScrollToTop;
