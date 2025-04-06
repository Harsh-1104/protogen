import Navbar from "@/components/Navbar";

export default function Templates() {
    return (
        <main>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center text-gray-900">Choose a Template</h1>
                <p className="text-center text-gray-600 mt-2">
                    Pick a professionally designed portfolio template and customize it instantly.
                </p>
                {/* Template List Component (To be added) */}
            </div>
        </main>
    );
}
