"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import sam from "@/assets/images/sam.jpg"
import pro from "@/assets/images/pro.jpg"
import kam from "@/assets/images/kam.jpg"
import nave from "@/assets/images/nave.jpg"

const content = [
  {
    title: "Pronita Barman",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full flex items-center  text-white md:justify-start sm:justify-start mt-4">
          <Image
            src={pro}
            width={300}
            height={300}
            className="h-100 w-100 object-cover rounded-3xl"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "Naveen S.",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center text-white md:justify-start sm:justify-start mt-4">
        <Image
          src={nave}
          width={300}
          height={300}
          className="h-100 w-100 object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Kamlesh Saini",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center text-white md:justify-start sm:justify-start mt-4">
          <Image
            src={kam}
            width={300}
            height={300}
            className="h-100 w-100 object-cover rounded-3xl"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "Sameer rai",
    description:
      "Recent graduate from the National Institute of Technology Hamirpur, holding a degree in Mathematics and Computing. I possess strong proficiency in both frontend and backend technologies, with additional expertise in React Native. I am eager to leverage my skills and knowledge to contribute to the Software as a Service (SaaS) industry.",
      content: (
        <div className="h-full w-full  flex items-center text-white md:justify-start sm:justify-start mt-4">
          <Image
            src={sam}
            width={300}
            height={300}
            className="h-100 w-100 object-cover rounded-3xl"
            alt="linear board demo"
          />
        </div>
      ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 flex justify-center items-center flex-col">
      <h1 className="text-center font-semibold text-3xl mb-6">Our Founders</h1>
      <StickyScroll content={content} />
    </div>
  );
}
