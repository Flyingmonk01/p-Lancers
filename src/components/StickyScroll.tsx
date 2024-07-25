"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import sam from "@/assets/images/sam.jpg"
import pro from "@/assets/images/pro.png"
import kamlesh from "@/assets/images/kam.png"
import nave from "@/assets/images/nave.jpg"

const content = [
  {
    title: "Pronita Barman",
    description:
      "As an emerging freelance data analyst, I leverage Python with Numpy and Pandas for efficient data manipulation. I employ Matplotlib and Seaborn to create clear, informative visualizations. I am adept at using machine learning and deep learning techniques to build predictive models and uncover data patterns. My expertise in Natural Language Processing (NLP) enables me to extract valuable insights from text data. My strong background in maths and statistics ensures accurate understanding of data distributions, hypothesis testing, and model validation. I have worked on various projects, continuously adapting and learning new tools and techniques in this field.",
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
      "As a Data Scientist I am passionate about turning data into actionable insights. With a strong command of Python, SQL, and R, I bring your data to life using tools like Tableau and Excel. My expertise lies in pandas, scikit-learn, Graph Neural Networks, and NLP. Beyond the numbers, I excel in data storytelling and analytical reasoning, making complex data easy to understand and impactful for your business. Let’s transform your data into compelling stories and smart solutions together!",
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
      "As a skilled frontend developer with a strong command of modern web technologies, I specialize in crafting engaging and user-friendly interfaces. I have a proven track record of delivering high-quality work that meets client expectations. As a freelancer, I prioritize clear and responsive communication, ensuring a seamless and collaborative experience for my clients. My strengths in time management and teamwork enable me to deliver projects efficiently and effectively, making me a reliable partner for any frontend development needs.",
      content: (
        <div className="h-full w-full  flex items-center text-white md:justify-start sm:justify-start mt-4">
          <Image
            src={kamlesh}
            width={300}
            height={200}
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
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center font-semibold text-3xl mb-6 ">Our Founders</h1>
      <StickyScroll  content={content} />
    </div>
  );
}
