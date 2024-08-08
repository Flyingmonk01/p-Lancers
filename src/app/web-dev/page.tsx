import { ThreeDCardDemo } from "@/components/Card";
import React from "react";

function WebDevelopment() {
    return (
        <div className="mt-20 min-h-screen">
            <h1 className="text-4xl font-bold text-center p-6">
                Web Development
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-white p-4 my-6">
                    <h1 className="text-4xl font-extrabold my-12 text-left">FRONTEND TECH</h1>
                    {frontendTechnologies.map((i, idx)=>(
                        <li className="text-left ml-36  text-xl font-semibold my-6 md:ml-16 " key={idx}>{i}</li>
                    ))}
                    <h1 className="text-center text-4xl font-extrabold my-12">BACKEND TECH</h1>
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
                                src={item.src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


const frontendTechnologies = [
    "React",          // Core library for building user interfaces
    "Redux",          // State management library
    "React Router",   // Declarative routing for React
    "Axios",          // HTTP client for making requests
    "Styled Components", // CSS-in-JS library for styling
    "Tailwind CSS",   // Utility-first CSS framework
    "Webpack",        // Module bundler
    "Babel",          // JavaScript compiler
    "Next.js"         // Framework for server-rendered or statically-exported React apps
  ];
  
  const backendTechnologies = [
    "AppWrite",
    "FireBase",
    "NextJS",
    "Node.js",        // JavaScript runtime built on Chrome's V8 JavaScript engine
    "Express",        // Web framework for Node.js
    "MongoDB",        // NoSQL database
    "Mongoose",       // ODM (Object Data Modeling) library for MongoDB and Node.js
    "JWT",            // JSON Web Tokens for authentication
    "bcrypt",         // Library to hash passwords
    "Nodemailer",     // Module to send emails
    "Socket.io",      // Real-time communication library
    "Passport",       // Authentication middleware for Node.js
    "Cloudinary",            // Testing framework

  ];
  

const projects = [
    {
        header: "Blog-App",
        text: "This is the description about the project CADEMY. This is a full-stack project made with MERN-Stack. For More details of the project Please View Demo.",
        link: "https://blog-app-omega-three.vercel.app/",
        img: "https://tse2.mm.bing.net/th?id=OIP.L5Q-gTU2LMwfgyNjk7YMbwHaDt&pid=Api&P=0&h=220",
        src: "https://github.com/Flyingmonk01/blog-app"
    },
    {
        header: "C A D E M Y",
        text: "This is the description about the project CADEMY. This is a full-stack project made with MERN-Stack. For More details of the project Please View Demo.",
        link: "https://cademy-frontend.vercel.app/",
        img: "https://clipground.com/images/student-vector-clipart-2.png",
        src: "https://github.com/Flyingmonk01/cademyfrontend"
    },
    {
        header: "Food Delivery App",
        text: "This is the description about the project Portfolio of mine created with React and SaSS. This is for showcase of workdone by me in this span of learning.",
        link: "https://food-delivery-tau-rose.vercel.app/",
        img: "https://tse2.mm.bing.net/th?id=OIP.lJUPZmHjC2CZzCXoZ7iYcQHaE8&pid=Api&P=0&h=220",
        src: "https://github.com/Flyingmonk01/"
    },
    {
        header: "XCrypto",
        text: "This is the description about the project XCrypto. Somme Key-Features are accessibility to real-time data and Graph of the crypto in multiple currencies.",
        link: "https://react-xcrypto-one.vercel.app/",
        img: "https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614_960_720.jpg",
        src: "https://github.com/Flyingmonk01/react-Xcrypto"
    },
    {
        header: "VIDEO PLAYER",
        text: "This is the description about the project React-Video-Player made with React and Chakra UI having dual theme.",
        link: "https://react-video-player-eight.vercel.app/",
        img: "https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233__340.jpg",
        src: "https://github.com/Flyingmonk01/react-video-player"
    },
    {
        header: "E-Commerce Website ",
        text: "This is the description about the project CODEX, made with basic stuff of React.",
        link: "https://kamleshsaini1118.github.io/E-Commerce-Website-Using-HTML-CSS-and-JS/",
        img: "https://tse2.mm.bing.net/th?id=OIP.Bx9wcuXLfA8XbNBkrvaCwAHaDK&pid=Api&P=0&h=220",
        src: "https://github.com/Flyingmonk01/"
    },
    
];

export default WebDevelopment;
