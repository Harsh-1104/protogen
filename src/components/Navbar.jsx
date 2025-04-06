"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl container mx-auto px-6 py-1 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.svg" alt="PortoGen Logo" width={150} height={100} priority />
                    {/* <span className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>PortoGen</span> */}
                </Link>

                {/* Navigation Links */}
                <nav className="space-x-6 hidden md:flex">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Templates", path: "/templates" },
                        { name: "Pricing", path: "#pricing" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`hover:text-violet-500 ${pathname === link.path ? "text-violet-500" : isScrolled ? "text-gray-900" : "text-white"}`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
