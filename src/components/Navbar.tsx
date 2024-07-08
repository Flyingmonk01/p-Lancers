"use client";

import React, { useEffect, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/p-Lancers.png";
import { FiMenu } from "react-icons/fi";

function Navbar({ className }: { className?: string }) {
    const ref = useRef();
    const [active, setActive] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenInner, setIsOpenInner] = useState<boolean>(false);

    const menuRef = useRef<any>(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside, true);
        } else {
            document.removeEventListener("click", handleClickOutside, true);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [isOpen]);

    return (
        <div
            className={cn(
                "absolute top-0 inset-x-0 w-full z-[1000]",
                className
            )}
        >
            <div className="flex justify-between items-center bg-transparent max-w-6xl mx-auto ">
                {/* Logo on the left */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Your Company Logo"
                        width={180}
                        className="cursor-pointer z-20 fixed rounded-2xl "
                    />
                </Link>

                <Menu setActive={setActive}>
                    <Link href="/">
                        <MenuItem
                            active={active}
                            setActive={setActive}
                            item="Home"
                        />
                    </Link>

                    <MenuItem
                        active={active}
                        setActive={setActive}
                        item="Our Services"
                    >
                        <div
                            className={
                                "flex flex-col text-sm text-white space-y-4"
                            }
                        >
                            <HoveredLink href="/web-dev">
                                Web Development
                            </HoveredLink>
                            <HoveredLink href="/data-analytics">
                                Data Analytics
                            </HoveredLink>
                            <HoveredLink href="/machine-learning">
                                Machine Learning
                            </HoveredLink>
                            <HoveredLink href="/mobile-development">
                                Android Development
                            </HoveredLink>
                        </div>
                    </MenuItem>

                    <Link href="/contact">
                        <MenuItem
                            active={active}
                            setActive={setActive}
                            item="Contact Us"
                        />
                    </Link>
                </Menu>

                <FiMenu
                    className=" fixed top-7 border text-2xl p-1 rounded-full right-7 z-50 min-700:hidden "
                    onClick={toggleDrawer}
                />

                {isOpen && (
                    <div
                        ref={menuRef}
                        onClick={toggleDrawer}
                        className= "border border-gray-600 bg-black shadow h-auto w-auto absolute top-20 right-10 rounded-lg flex flex-col z-99 px-2 py-4 space-y-4 text-gray-300"
                    >
                        <Link href={'/'}>Home</Link>
                        <Link href={'/web-dev'}>Web Development</Link>
                        <Link href={'/mobile-development'}>Android / IOS Development</Link>
                        <Link href={'/machine-learning'}>Machine Learning</Link>
                        <Link href={'/data-analytics'}>Data Analysis</Link>
                        <Link href={'/contact'}>Contact Us</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
