"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const companyImages = [
    "/Company1.jpg",
    "/Company2.jpg",
    "/Company3.jpg",
    "/Company4.jpg",
    "/Company5.jpg",
    "/Company6.jpg",
];

const Hero = () => {
    return (
        <div className="absolute z-30 bg-white rounded-2xl border border-grey-600 top-120 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl py-12 px-4 sm:px-6 md:py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 shadow-sm mb-4">
                    <span className="font-medium text-black mr-3 text-sm sm:text-base">
                        <span className="bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                            4000+
                        </span>{" "}
                        Users trust us for design
                    </span>
                    <Imagegrid />
                </div>

                <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl leading-tight sm:leading-[4rem] py-4">
                    Design Better, <span className="text-gray-400">Faster, Smarter</span>
                </h1>

                <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto">
                    Empower your creative vision with Designor — crafted for agencies,
                    designers, and innovators to showcase their work seamlessly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-6 font-medium">
                    <button className="border border-gray-800 rounded-lg px-6 py-2 w-full sm:w-auto">
                        Our Work
                    </button>
                    <button className="bg-purple-700 hover:bg-purple-600 text-white rounded-lg px-6 py-2 w-full sm:w-auto">
                        Schedule a Call
                    </button>
                </div>

                <div className="py-6 font-medium text-gray-600 text-sm sm:text-base">
                    Featured highlights of our Work
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Left & right white gradient masks */}
                    <div className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>

                    {/* Scrolling logos */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        className="flex w-max"
                    >
                        {[...companyImages, ...companyImages].map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="Company Logo"
                                height={50}
                                width={200}
                                className="h-16 w-32 object-contain mx-2 sm:mx-4"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

const Imagegrid = () => {
    const Images = ["/avatar1.jpeg", "/avatar2.jpeg", "/avatar3.jpeg"];
    return (
        <div className="flex -space-x-2">
            {Images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt="avatar"
                    height={24}
                    width={24}
                    className="rounded-full border border-white"
                />
            ))}
        </div>
    );
};
