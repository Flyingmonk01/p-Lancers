import { ThreeDCardDemo } from "@/components/Card";
import React from "react";

function MobileDev() {
    return (
        <div className="mt-20 min-h-screen">
            <h1 className="text-4xl font-bold text-center p-6">
                ANDROID / IOS Development
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-white p-4 my-6">
                    <h1 className="text-center text-4xl font-extrabold my-12">FRONTEND TECH</h1>
                    {frontendTechnologies.map((i, idx)=>(
                        <li className="text-left ml-36  text-xl font-semibold my-6 md:ml-16" key={idx}>{i}</li>
                    ))}
                    <h1 className="text-center text-4xl font-extrabold my-12 ">BACKEND TECH</h1>
                    {backendTechnologies.map((i, idx)=>(
                        <li className="text-left ml-36  text-xl font-semibold my-6 md:ml-16" key={idx}>{i}</li>
                    ))}
                </div>
                <div className="md:col-span-2 px-16 flex flex-row flex-wrap ">
                    {projects.map((item, index) => (
                        <div key={index} className="mx-4 -my-8">
                            <ThreeDCardDemo
                                header={item.header}
                                text={item.text}
                                link={item.link}
                                img={item.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


const frontendTechnologies = [
    "React-Native",          // Core library for building user interfaces
    "Redux",          // State management library
    
  ];
  
  const backendTechnologies = [
    "AppWrite",
    "FireBase",
    
  ];
  

const projects = [
    {
        header: "Blog-App",
        text: "This is the description about the project CADEMY. This is a full-stack project made with MERN-Stack. For More details of the project Please View Demo.",
        link: "https://blog-app-omega-three.vercel.app/",
        img: "https://tse2.mm.bing.net/th?id=OIP.L5Q-gTU2LMwfgyNjk7YMbwHaDt&pid=Api&P=0&h=220",
    },
    
];

export default MobileDev;
