"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const words = [
    { text: "Build " },
    { text: "awesome " },
    { text: "website " },
    { text: "with " },
    { text: "BuildVerse.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white w-full absolute top-[225rem] py-10 ">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black text-white text-sm border dark:border-white">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black text-sm border border-black">
            Signup
          </button>
        </div>
      </div>

     
      <div className="mt-16 border-t border-gray-300 dark:border-gray-700 py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
       
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Features</a>
          <a href="#" className="hover:text-blue-500 transition">Pricing</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>

        <motion.div
          className="flex gap-4 text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a href="https://github.com/HimanshuGolyan01" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/himanshugolyan01/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://www.instagram.com/himanshuu.gulia/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-blue-500 transition" />
          </a>
        </motion.div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-4">
        © {new Date().getFullYear()} BuildVerse. All rights reserved.
      </div>
    </footer>
  );
}
