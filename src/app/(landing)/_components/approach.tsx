import { bricolage } from "@/lib/fonts";
import { Check, X } from "lucide-react";
import React from "react";

const ApproachList = ({ title, items, red }: { title: string; items: string[], red?: boolean }) => {
  return (
    <div className={`border leading-none p-5 space-y-4 rounded-3xl ${red ? "border-red-800 bg-red-700/10 opacity-80 scale-95" : "border-blue-500 bg-blue-500/15 scale-105"}`}>
      <h4 style={bricolage.style} className="text-2xl font-semibold">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start leading-normal">
            <span className={`size-5 relative top-0.5 grid place-items-center rounded-full border mr-2 ${ red ? "bg-red-700/10 border-red-700 text-red-700" : "bg-blue-500/10 border-blue-500 text-blue-500" }`}>
              { red ? <X className="size-3" /> : <Check className="size-3" /> }
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TraditionApproach = () => {
  const traditionalItems = [
    "Define data structure and create database models.",
    "Develop and expose endpoints for form submissions.",
    "Set up and configure a database to store submissions.",
    "Implement logic to handle form submissions and validation.",
    "Connect frontend form to the backend for data handling.",
    "Implement post submission logic.",
    "Are you serious?",
  ];

  return <ApproachList title="Traditional Approach" red={true} items={traditionalItems} />;
};

const FormlesApproach = () => {
  const formleItems = [
    "Just define the form structure.",
    "Simply publish your form and copy the URL—it's all done!",
    "Formle automatically manages submission logic.",
  ];

  return <ApproachList title="Formle's Approach" items={formleItems} />;
};

const Approach = () => {
  return (
    <section className="grid grid-cols-2 gap-x-6">
      <TraditionApproach />
      <FormlesApproach />
    </section>
  );
};

export default Approach;
