"use client";

import { animate } from "framer-motion";
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
            <FaArrowUp className="fixed bottom-5 right-5 z-50 text-2xl bg-gray-300 text-black rounded-full hover:cursor-pointer" />
        </Link>
    );
}

export default ScrollToTop;
