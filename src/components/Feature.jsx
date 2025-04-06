"use client";

import { motion } from "framer-motion";
import { FaPalette, FaBolt, FaMobileAlt, FaCloudUploadAlt, FaCogs, FaRocket } from "react-icons/fa";

const features = [
    { icon: <FaPalette size={30} />, title: "Stunning Designs", desc: "Choose from professionally designed templates." },
    { icon: <FaBolt size={30} />, title: "Instant Setup", desc: "Launch your portfolio in seconds, no coding required." },
    { icon: <FaMobileAlt size={30} />, title: "Fully Responsive", desc: "Looks great on all devices, from mobile to desktop." },
    { icon: <FaCloudUploadAlt size={30} />, title: "One-Click Deployment", desc: "Easily publish your portfolio with a single click." },
    { icon: <FaCogs size={30} />, title: "Customization", desc: "Modify colors, fonts, and layout to match your style." },
    { icon: <FaRocket size={30} />, title: "SEO Optimized", desc: "Your portfolio will rank higher on search engines." },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-gray-900 text-white text-center">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
                >
                    Why Choose Us?
                </motion.h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    We provide a seamless, powerful, and elegant way to showcase your work with ease.
                </p>

                {/* Features Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                        >
                            <div className="flex justify-center items-center text-indigo-400 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
