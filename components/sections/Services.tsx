import React from "react";
import {
  SERVICES_HEADING,
  SERVICES_SUBTEXT,
  SERVICES,
  HERO_CTA_TEXT,
} from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";
import HolographicBackground from "@/lib/bgAnimated";

const Services = () => {
  return (
    <div id="services" className=" py-16 bg-background relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-84 h-84 rounded-full blur-2xl bg-brand-primary opacity-15"></div>
      </div> */}
      <HolographicBackground variant='two' />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h3 className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-md font-mono text-brand-primary">
            What We Do
          </h3>
          <h2 className="text-3xl md:text-6xl font-bold leading-relaxed font-sans">
            {SERVICES_HEADING}
          </h2>
          <p className="mt-4 md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            {SERVICES_SUBTEXT}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="group relative">
        
              {/* ACTUAL card */}
              <div className="glass-effect relative rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-primary overflow-hidden h-full flex flex-col items-center text-center">

                {/* ICON */}
                <div className="relative z-10 mb-6">
                  <div className="h-16 w-16 mx-auto relative">
                    <div className={`absolute inset-0 bg-foreground rounded-xl opacity-5 `} />
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <service.icon className="h-10 w-10 text-brand-primary animate-float" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 space-y-3 grow flex flex-col justify-start">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm font-mono opacity-70">{service.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* BUTTON */}
                {service.available && (
                  <div className="relative z-10 pt-6 mt-auto">
                    <Button
                      variant="outline"
                      size={"sm"}
                      className="hover:text-brand-primary text-secondary-foreground font-mono font-thin duration-300 animate-holographic hover:border-brand-primary"
                    >
                      <Link className="text-sm" href={"/services"}>
                        learn_more
                      </Link>
                    </Button>
                  </div>
                )}

            
                
              </div>
            </div>
          ))}
        </div>
        <div>
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">
                Let&apos;s discuss your project and create something that honors
                your values while delivering exceptional results.
              </p>
              <Button
                size={"xl"}
                className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md text-sm font-mono transition-all duration-300 "
              >
                <Link
                  className="text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://calendly.com/halal-elites/30min"}
                >
                  {">"} {HERO_CTA_TEXT}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
