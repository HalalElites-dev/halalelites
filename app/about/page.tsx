"use client";

import React from "react";
import HolographicBackground from "@/lib/bgAnimated";
import { ABOUT_CONTENT } from "@/lib/constants";

const page = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-background px-6 py-24"
    >
      {/* Animated Background */}
      <HolographicBackground variant="two" />

      {/* Section Title */}
      <h2 className="relative mt-10 mb-8 text-center text-4xl font-bold md:text-6xl">
        About Us
      </h2>
      <p className="mx-auto mb-12 max-w-6xl font-mono leading-relaxed text-muted-foreground md:text-xl text-center">
        Why halal-elites? 
      </p>

      {/* Content Wrapper */}
      <div className="relative mx-auto max-w-7xl text-center ">
        <div className="m-auto gap-8 md:mt-40 md:gap-10">
          {/* About Card */}
          <div className="glass-effect rounded-2xl p-4 md:p-10">
            {/* Tag */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-opacity-50 px-4 py-2 glass-effect">
              <span className="font-mono text-sm text-brand-primary">
                halal-elites
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-4 text-2xl font-bold md:text-5xl">
              We build websites with{" "}
              <span className="text-brand-primary">
                Deen, Honor, and Value
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-6xl font-mono leading-relaxed text-muted-foreground md:text-xl">
              {ABOUT_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
