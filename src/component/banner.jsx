import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner/Banner-1.png";
import banner2 from "../assets/banner/banner-2.png";
import banner3 from "../assets/banner/banner-3.png";
import banner4 from "../assets/banner/banner-4.png";

const images = [banner1, banner2, banner3, banner4]; // gw jadiin array biar bisa dipanggil pake index

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // waktu
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative h-full mx-50 mt-8 overflow-hidden">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-90">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-all duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >    
                        <img  // gambar gua taro sini
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="block w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* Tombol Navigasi */}
            <button
                onClick={prevSlide}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Banner;
