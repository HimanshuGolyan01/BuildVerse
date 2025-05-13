import React from "react";
import { FeaturesSectionDemo } from "./ui/FeaturesSectionDemo";
const Features = () => {
    return (
        <div className="absolute z-50 top-[90rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-[2rem] max-w-xl text-gray-900">
            <div>
                Here are a few things we do that others really just don&apos;t.
            </div>
            <div>
                <FeaturesSectionDemo />
            </div>
        </div>
    );
};

export default Features;
