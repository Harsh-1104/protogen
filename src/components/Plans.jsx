"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
    {
        name: "Free",
        price: "$0/mo",
        features: ["Basic Templates", "Limited Customization", "One-Click Deployment"],
        highlight: false,
    },
    {
        name: "Pro",
        price: "$9.99/mo",
        features: ["Custom Domain", "SEO Optimization", "Portfolio Analytics", "Premium Templates"],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "$29.99/mo",
        features: ["AI-Powered Design", "Priority Support", "Unlimited Portfolios", "Advanced Integrations"],
        highlight: false,
    },
];

export default function PricingSection() {
    return (
        <section className="py-20 bg-gray-100 text-gray-900 text-center" id="pricing">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                    Choose Your Plan
                </motion.h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Start for free and upgrade as you grow. Pick a plan that best suits your needs.
                </p>

                {/* Pricing Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`p-8 rounded-xl shadow-lg ${plan.highlight ? "bg-indigo-600 text-white" : "bg-white"
                                } border border-gray-300`}
                        >
                            <h3 className="text-2xl font-semibold">{plan.name}</h3>
                            <p className="text-4xl font-bold my-4">{plan.price}</p>
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center space-x-2">
                                        <FaCheck className={`${plan.highlight ? "text-white" : "text-green-600"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`mt-6 px-6 py-2 rounded-lg font-medium transition ${plan.highlight ? "bg-white text-indigo-600 hover:bg-gray-200" : "bg-indigo-600 text-white hover:bg-indigo-700"
                                    }`}
                            >
                                {plan.highlight ? "Get Started" : "Select Plan"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
