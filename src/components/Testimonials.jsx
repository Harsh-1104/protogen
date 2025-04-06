"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Web Developer",
        image: "https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        review:
            "This portfolio generator saved me so much time! The designs are stunning, and the customization is effortless.",
    },
    {
        name: "Mark Peterson",
        role: "Freelancer",
        image: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        review:
            "I landed my dream job after creating my portfolio with this tool. The Pro plan is worth every penny!",
    },
    {
        name: "Sophia Lee",
        role: "UX Designer",
        image: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        review:
            "Absolutely love the AI-assisted designs! The templates are modern, and the analytics feature is a game-changer.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                    What Our Users Say
                </motion.h2>
                <p className="mt-4 text-gray-600 text-center">
                    Trusted by thousands of professionals worldwide.
                </p>

                {/* Testimonials Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                            <p className="mt-3 text-gray-700">“{testimonial.review}”</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-md text-indigo-700 font-semibold">
                        5000+ Portfolios Created
                    </div>
                    <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-md text-indigo-700 font-semibold">
                        4.9/5 Average Rating
                    </div>
                    <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-md text-indigo-700 font-semibold">
                        Featured on Top Design Blogs
                    </div>
                </div>
            </div>
        </section>
    );
}
