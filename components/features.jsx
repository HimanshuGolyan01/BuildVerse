import React from "react";
import { FeaturesSectionDemo } from "./ui/FeaturesSectionDemo";
const Features = () => {
    return (
        <div className="absolute z-50 lg:top-[90rem] md:top-[100rem] top-[150rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:font-bold md:font-bold font-medium text-[2rem] lg:max-w-xl text-gray-900">
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
