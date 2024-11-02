import { bricolage } from "@/lib/fonts";
import React from "react";

const featuresList = [
  {
    title: "Customizable Email Input",
    description:
      "Easily create forms that directly integrate with your Substack, boosting your subscriber list.",
  },
  {
    title: "Mobile-Friendly Design",
    description:
      "Forms are optimized for all devices, ensuring a smooth experience for your users.",
  },
  {
    title: "Recent Posts Display",
    description:
      "Showcase your latest Substack posts in a custom design to engage visitors.",
  },
];

const Features = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <h2 style={bricolage.style} className="text-2xl font-semibold text-gray-600 text-center mb-8">Key features we&apos;re planning to include</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap justify-center gap-10">
        {featuresList.map(({ title, description }, index) => (
          <div className="flex flex-col" key={index}>
            <div className="text-xl md:text-2xl font-display leading-tight font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              {title}
            </div>
            <div className="text-sm text-gray-600 font-medium tracking-wide">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
