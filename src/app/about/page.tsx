"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GiBullseye } from "react-icons/gi";

const data = [
    {
        icon: <GiBullseye />, heading: "Mission", content: "At PortoGen, we believe that everyone deserves a platform to showcase their work. Our mission is to bridge the gap between creativity and technology."
    },
    {
        icon: <FiEye />, heading: "Vision", content: "We envision a world where showcasing talent online is seamless and accessible to everyone, regardless of technical expertise."
    },
    {
        icon: <FaHandHoldingHeart />, heading: "Values", content: "We believe in innovation, simplicity, and excellence—making portfolio creation effortless. User experience drives us, ensuring an intuitive platform."
    }
]


const About = () => {
    return (
        <main>
            <Navbar />
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen py-26 px-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-3xl mx-auto py-15"
                >
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
                        Who We Are
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        PortoGen is a cutting-edge platform designed for professionals, creators, and businesses to effortlessly build stunning portfolios. We eliminate the hassle of coding, offering ready-to-use, customizable templates that bring your work to life. Our mission is to empower individuals with a seamless, beautiful, and professional online presence—because your work deserves to be showcased the right way.
                    </p>
                </motion.div>

                <div className="flex justify-between text-justify max-w-6xl mx-auto gap-10 px-6">
                    {data.map((data, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            key={index}
                            className="p-6 bg-gray-800 rounded-xl shadow-lg w-2xl hover:shadow-2xl transform hover:scale-105 transition-all"
                        >
                            <h2 className="text-3xl font-semibold flex items-center gap-3 text-purple-400">
                                {data.icon}
                                {data.heading}
                            </h2>
                            <p className="mt-4 text-gray-300">
                                {data.content}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>

        </main>
    );
};

export default About;
