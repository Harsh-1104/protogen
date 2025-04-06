import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <main>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    Have questions or need support? Reach out to us, and we'll get back to you as soon as possible.
                </p>
                <form className="mt-8 max-w-lg mx-auto space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
                    <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}

