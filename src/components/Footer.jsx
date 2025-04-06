import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-white">PortoGen</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        The easiest way to build your online presence.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <a href="/about" className="mt-2 hover:text-white">About</a>
                    <a href="/features" className="mt-2 hover:text-white">Features</a>
                    <a href="/pricing" className="mt-2 hover:text-white">Pricing</a>
                    <a href="/blog" className="mt-2 hover:text-white">Blog</a>
                    <a href="/contact" className="mt-2 hover:text-white">Contact</a>
                </div>

                {/* Social Media & Legal */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="mt-3 flex space-x-4">
                        <a href="https://twitter.com" target="_blank" className="hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-white">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" className="hover:text-white">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">© 2024 PortoGen. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 text-sm">
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
