"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // you can also use Heroicons if you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] max-w-7xl absolute top-5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg px-6 py-4 flex items-center justify-between">
      <div className="font-extrabold text-lg text-black">BuildVerse</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
        <div>Services</div>
        <div>Case</div>
        <div>Who We Are</div>
        <div>Pricing</div>
        <div>Testimonial</div>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="text-white bg-black/70 px-6 py-2 rounded-lg text-sm hover:bg-black">
          Get started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/90 rounded-xl shadow-lg px-6 py-4 flex flex-col gap-4 text-black font-medium md:hidden z-50">
          <div>Services</div>
          <div>Case</div>
          <div>Who We Are</div>
          <div>Pricing</div>
          <div>Testimonial</div>
          <button className="bg-black text-white py-2 rounded-lg text-sm">
            Get started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
