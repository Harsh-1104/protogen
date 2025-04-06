"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselItems = [
    { title: "AI Chatbot", imageUrl: "https://picsum.photos/600/400?random=1" },
    { title: "Developer Portfolio", imageUrl: "https://picsum.photos/600/400?random=2" },
    { title: "E-commerce Platform", imageUrl: "https://picsum.photos/600/400?random=3" },
    { title: "Analytics Dashboard", imageUrl: "https://picsum.photos/600/400?random=4" },
    { title: "Real Estate App", imageUrl: "https://picsum.photos/600/400?random=5" },
];

const PortfolioCarousel = () => {
    return (
        <div className="w-full max-w-4xl mx-auto my-10">
            <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                showStatus={false}
                transitionTime={800}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative w-full h-[400px]">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                        <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-3 rounded-md">
                            {item.title}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PortfolioCarousel;
