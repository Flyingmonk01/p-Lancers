import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What are Recent Projects?",
            answer: "Recently, We analyzed road network datasets to predict congestion levels with an 85% accuracy using XGBoost. Also evaluated traffic volume detectors' accuracy by calculating and visualizing percentage errors, improving measurement reliability using Python, Excel, and Tableau.",
            open: false,
        },
        {
            question: "What are Field of Expertise?",
            answer: "Our field of expertise includes software development with a focus on the MERN stack and Next.js, mobile app development using React Native, and data sciences. We also specialize in frontend designs and data analysis.",
            open: false,
        },
        // Add more questions here
    ]);

    const toggleFAQ = (index: Number) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 w-1/2 shadow shadow-slate-300">
            {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                    <div
                        className="cursor-pointer text-xl font-semibold flex gap-2 items-center flex-row"
                        onClick={() => toggleFAQ(index)}
                    >
                        <FaAngleRight />
                        {faq.question}
                    </div>
                    {faq.open && (
                        <div className="mt-2 pl-4 text-gray-400">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
