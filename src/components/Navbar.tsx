"use client";

import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/p-Lancers.png";
import { FiMenu } from "react-icons/fi";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "absolute top-0 inset-x-0 w-full z-[1000]",
                className
            )}
        >
            <div className="flex justify-between items-center bg-transparent max-w-6xl mx-auto">
                {/* Logo on the left */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Your Company Logo"
                        width={180}
                        className="cursor-pointer z-20 fixed rounded-2xl -my-5"
                    />
                </Link>

                <Menu  setActive={setActive}>
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

                <Link href="/contact" className="my-4">
                    <MenuItem
                        active={active}
                        setActive={setActive}
                        item="Contact Us"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
