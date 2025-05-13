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
        <div className="absolute z-30 bg-white rounded-2xl border border-grey-600 top-140 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 py-20">
            <div className="flex flex-col items-center justify-center ">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 shadow-sm">
                    <span className="font-medium text-black mr-3">
                        <span className="bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                            4000+
                        </span>{" "}
                        Users trust us for design
                    </span>
                    <Imagegrid />
                </div>
                <div className="text-black text-[5rem] font-semibold max-w-4xl text-center leading-[5rem] py-5">
                    <span>Design Better,</span>{" "}
                    <span className="text-gray-400">Faster, Smarter</span>
                </div>
                <div className="text-gray-600 text-[1.2rem] max-w-lg text-center">
                    Empower your creative vision with Designor — crafted for
                    agencies, designers, and innovators to showcase their work
                    seamlessly.
                </div>
                <div className="flex gap-6 items-center py-6 font-medium">
                    <button className="border border-gray-800 rounded-lg px-6 py-2">
                        Our Work
                    </button>
                    <button className="border bg-purple-700 rounded-lg px-6 py-2 text-white hover:bg-purple-600">
                        Schedule a Call
                    </button>
                </div>
                <div className="py-10 font-medium text-gray-600">
                    Featured highlights of our Work
                </div>
                <div className="relative w-full overflow-hidden">
                    {/* Left & right white gradient masks */}
                    <div className="pointer-events-none absolute top-0 left-0 w-30 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute top-0 right-0 w-30 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>

                    {/* Scrolling motion div */}
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
                        {[...companyImages, ...companyImages].map(
                            (image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt="Company Logo"
                                    height={50}
                                    width={200}
                                    className="h-[8rem] w-[8rem] object-contain mx-4"
                                />
                            )
                        )}
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
        <div className="flex -space-x-1">
            {Images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt="avatar"
                    height={20}
                    width={20}
                />
            ))}
        </div>
    );
};
