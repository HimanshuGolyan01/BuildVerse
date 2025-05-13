import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 w-[90%] absolute top-5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
      <div className="font-extrabold text-lg text-black ">BuildVerse</div>
      <div className="flex items-center gap-10 text-sm font-medium text-black">
        <div>Services</div>
        <div>Case</div>
        <div>Who We Are</div>
        <div>Pricing</div>
        <div>Testimonial</div>
      </div>
      <div>
        <button className="text-white bg-black/70 px-6 py-2 rounded-lg text-sm hover:bg-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
