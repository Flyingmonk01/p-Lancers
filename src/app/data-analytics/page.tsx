import { ThreeDCardDemo } from "@/components/Card";
import React from "react";

function DataAnalytics() {
    
    return (
        <div className="mt-20 min-h-screen">
            <h1 className="text-4xl font-bold text-center p-6">
                DATA ANALYSIS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-white p-4 my-6">
                    <h1 className="text-center text-4xl font-extrabold my-12">ANALYSIS TOOLS</h1>
                    {dataAnalysisTechnologies.map((i, idx)=>(
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


const dataAnalysisTechnologies = [
    "Excel",          
    "PowerBI",          
    "Python",          
    "Sk-Learn",          
    "SQL",
    "MySQL",
    "R",
    "Tableu",
    "Statistical Computing",
    "Data Visualization",
  ];
  

const projects = [
    {
        header: "SuperSales Analysis Dashboard",
        text: "This is the description about the project CADEMY. This is a full-stack project made with MERN-Stack. For More details of the project Please View Demo.",
        link: "https://public.tableau.com/app/profile/naveen.s1041/viz/SuperSalesAnalysisDashboard/Dashboard1",
        img: "https://tse2.mm.bing.net/th?id=OIP.EwlFXzqnGNamMRqTGABT_gHaEa&pid=Api&P=0&h=220",
    },
    {
        header: "World Co2 Dashboard",
        text: "This is the description about the project CADEMY. This is a full-stack project made with MERN-Stack. For More details of the project Please View Demo.",
        link: "https://public.tableau.com/app/profile/naveen.s1041/viz/WorldCo2Dashboard_16669516888470/Sheet1",
        img: "https://tse2.mm.bing.net/th?id=OIP.SOURVjrCGfjJTrU3n0N54wHaDt&pid=Api&P=0&h=220",
    },
    
];

export default DataAnalytics;
