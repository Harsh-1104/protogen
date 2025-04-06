"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent blur-3xl opacity-50"></div>

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <h1 className="text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg">
                    {"Click Craft & Conquer.".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.5, duration: 0.5 }}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Turn ideas into impact. Launch a sleek, professional portfolio in seconds—without writing a single line of code.
                    Your talent, your brand, your masterpiece—ready to shine.
                </motion.p>
                <div className="mt-6 flex justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xl text-lg font-medium transition-all"
                    >
                        Get Started Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-8 py-3 border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-lg shadow-xl text-lg font-medium transition-all"
                    >
                        See Live Demo
                    </motion.button>
                </div>
            </motion.div>

            {/* Floating CTA Text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute bottom-12 w-full flex justify-center"
            >
                <p className="text-gray-400 text-sm">
                    🚀 Join thousands of professionals creating portfolios with one click.
                </p>
            </motion.div>
        </section>
    );
}
