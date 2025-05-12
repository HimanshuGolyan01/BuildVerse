import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between item-center py-10 px-35 absolute top-0 left-0 z-10 w-full">
            <div>LOGO</div>
            <div className="flex item-center gap-20">
                <div>Services</div>
                <div>Case</div>
                <div>Who We Are</div>
                <div>Pricing</div>
                <div>Testimonial</div>
            </div>
            <div>
                <button className="text-white bg-gray-900 px-10 py-3 rounded-lg">Get started</button>
            </div>
        </div>
    );
};

export default Navbar;
