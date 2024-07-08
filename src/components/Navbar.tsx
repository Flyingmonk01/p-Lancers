"use client";

import React, { useRef, useState } from "react";
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
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

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
                    className="fixed top-7 border text-2xl p-1 rounded-full right-7 z-50"
                    onClick={toggleDrawer}
                />

                {isOpen && (
                    <div
                        onClick={toggleDrawer}
                        className="bg-black border h-auto w-auto absolute top-20 right-0 rounded-lg z-99 px-2 py-4"
                    >
                        <Link href={"/"}>Home</Link>

                        <div>
                            <MenuItem
                                active={active}
                                setActive={setActive}
                                item="Our Services"
                            >
                                {isOpenInner && (
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
                                )}
                            </MenuItem>
                        </div>

                        <Link href={"/contact"}>Contact Us</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
