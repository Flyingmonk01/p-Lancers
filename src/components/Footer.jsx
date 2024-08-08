"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/p-Lancers.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import FAQ from "./Faq";

function Footer() {
    return (
        <footer className="flex flex-col justify-evenly items-center lg:flex-row lg:justify-around min-h-32 w-screen border-red-400 z-10 relative bg-slate-900 py-2 px-24">
            <div className="flex justify-center items-center flex-col">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Your Company Logo"
                        width={180}
                        height={180}
                        className="cursor-pointer rounded-2xl"
                    />
                </Link>
                {/* <span>All copyrights are reserved to @flying_monk</span> */}
            </div>

            <FAQ />

            <div className="py-8">
                <div className="flex p-2 justify-start items-center">
                    <FaGithub className="size-10" />
                    <span className="px-2">
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"https://www.github.com"}
                        >
                            Github
                        </Link>
                    </span>
                </div>
                <div className="flex p-2 justify-start items-center">
                    <FaInstagram className="size-10" />
                    <span className="px-2">
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"https://www.instagram.com"}
                        >
                            Instagram
                        </Link>
                    </span>
                </div>
                <div className="flex p-2 justify-start items-center">
                    <FaLinkedin className="size-10" />
                    <span className="px-2">
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"https://www.linkedin.com"}
                        >
                            LinkedIn
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
