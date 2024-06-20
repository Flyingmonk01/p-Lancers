import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/p-Lancers.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="flex flex-row justify-around min-h-48 w-screen border-red-400 z-10 relative bg-slate-900 py-12 px-24">
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
                <span>All copyrights are reserved to @flying_monk</span>
            </div>

            <div className="text-lg">
                <ul>
                    <li className="py-2">Services</li>
                    <li className="py-2">Domain</li>
                    <li className="py-2">Requirements</li>
                </ul>
            </div>
            <div>
                <div className="flex p-2 justify-start items-center">
                    <FaGithub className="size-10" />
                    <span className="px-2"><Link rel="noopener noreferrer" target="_blank" href={"https://www.github.com"}>Github</Link></span>
                </div>
                <div className="flex p-2 justify-start items-center">
                    <FaInstagram className="size-10" />
                    <span className="px-2"><Link rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com"}>Instagram</Link></span>
                </div>
                <div className="flex p-2 justify-start items-center">
                    <FaLinkedin className="size-10" />
                    <span className="px-2"><Link rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com"}>LinkedIn</Link></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
