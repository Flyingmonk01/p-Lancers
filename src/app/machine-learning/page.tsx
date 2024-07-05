import { ThreeDCardDemo } from "@/components/Card";
import React from "react";

function MachineLearning() {
    
    return (
        <div className="mt-20 min-h-screen">
            <h1 className="text-4xl uppercase font-bold text-center p-6">
                Machine Learning
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-white p-4 my-6">
                    <h1 className="text-center text-4xl font-extrabold my-12">MACHINE LEARNING</h1>
                    {mlTechnologies.map((i, idx)=>(
                        <li className="text-left ml-36  text-xl font-semibold my-6 md:ml-16" key={idx}>{i}</li>
                    ))}
                   
                </div>
                <div className="md:col-span-2 px-16 flex flex-row flex-wrap ">
                    {projects.length > 0 && projects.map((item, index) => (
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


const mlTechnologies = [
    "Python",          
    "Machine Learning",          
    "Scikit-Learn",          
    "Keras",          
    "PyTorch",
    "Streamlit",
    
  ];
  

const projects = [
    
    
];

export default MachineLearning;
