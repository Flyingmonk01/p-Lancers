"use client";

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import pic from "../assets/tab-img.png"


export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              Unleash the power of Softwares<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 SaaS
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={pic}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

