import React from "react";
import { bricolage } from "@/lib/fonts";
import EmailForm from "./_components/form";
import FAQ from "./_components/faq";
import Link from "next/link";
import Features from "./_components/features";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/80 selection:text-white">
      <div className="fixed top-[-50%] left-[-50%] w-[100%] h-[100%] rounded-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 blur-3xl" />
      <div className="fixed bottom-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-700/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-8">
          <button className="bg-blue-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-200 text-blue-700 py-0.5 px-4 ring-1 ring-white/10 w-fit mx-auto">
              <span className="text-sm md:text-base font-semibold">Substack Mod</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
        <div className="space-y-28 md:space-y-32">
          {/* Hero Section */}
          <div className="space-y-5 md:space-y-10 text-center animate-fade-in">
            <h1
              className="font-display text-4xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-400 bg-clip-text text-transparent"
              style={bricolage.style}
            >
              Substack but with better landing page and conversion
            </h1>
            <p
              className="text-gray-800 text-base md:text-lg max-w-2xl mx-auto font- leading-relaxed"
              style={bricolage.style}
            >
              Maximize your Substack potential with custom-designed pages that
              increase subscriber engagement.
            </p>
          <EmailForm />
          </div>

          <Features />

          <FAQ />

          {/* Footer */}
          <div>
            <h2
              style={bricolage.style}
              className="text-2xl font-semibold text-gray-600 text-center mb-8"
            >
              Connect for frequent updates
            </h2>
            <div
              className="flex justify-center space-x-2 text-gray-400"
              style={bricolage.style}
            >
              <Link href="https://github.com/ashokasec" target="_blank">
                <Button className="font-normal">Github</Button>
              </Link>
              <Link href="https://x.com/ashokasec" target="_blank">
                <Button className="font-normal">Twitter</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
