"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                {/* Animated Background Effect */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-opacity-30"
                >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-purple-400 rounded-full blur-3xl opacity-30"></div>
                </motion.div>

                {/* CTA Content */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold"
                >
                    🚀 Build Your Portfolio in Minutes!
                </motion.h2>
                <p className="mt-4 text-lg text-gray-100">
                    Create a stunning portfolio with AI-powered designs. No coding required.
                </p>

                {/* CTA Button */}
                <motion.a
                    href="/signup"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-100 transition duration-300"
                >
                    Get Started for Free
                </motion.a>
            </div>
        </section>
    );
}
