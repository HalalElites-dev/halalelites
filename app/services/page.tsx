import { Button } from "@/components/ui/button";
import HolographicBackground from "@/lib/bgAnimated";
import { HERO_CTA_TEXT, PRICING_PLANS, PROCESS_PLAN } from "@/lib/constants";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section id="services" className="bg-background py-24 px-6 ">
      <HolographicBackground variant="two" />
      <div className="relative max-w-7xl mx-auto">

        <div className="relative text-center md:mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 md:mb-2">
            <span className="font-mono text-xs text-brand-primary">
              No Hidden Fees
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center  relative">
            Services
          </h1>
          <p className="hidden md:block mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            {" Solutions that honor your values"}
          </p>
        </div>


        {/* Our Process sectiion */}
        
        <div>
          <div className="md:flex text-center md:text-start md:justify-between">
            <div className="flex flex-col md:items-start">
              <h3 className="text-lg text-brand-primary max-w-3xl mb-2 font-mono">Our Process</h3>
              <h2 className="font-bold text-2xl md:text-5xl mb-8">
                We Take Care of Everything
              </h2>
            </div>
            <div className="md:w-1/2 p-4 text-muted-foreground leading-relaxed font-mono">
              <p>
                Once our agreement is settled, we&apos;ll ask a few questions about your business and its offerings. From there, we&apos;ll handle everything—from crafting the full website content and design to getting your approval and building the site. The entire process, from start to finish.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mx-auto ">
            {PROCESS_PLAN.map((step, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 ">
                <h4 className="font-bold text-lg text-brand-primary mb-10">{'STEP '}{step.step}</h4>
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* our packages */}
        <div className="mt-10 md:mt-20">
          <div className="mx-auto">
            <div className="text-center">
              <h3 className="text-lg text-brand-primary  mb-2 font-mono">Choose Your Package</h3>
              <h2 className="font-bold text-2xl md:text-5xl mb-8">
                Our Packages Fit Your Needs
              </h2>
            </div>
            
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto py-6 justify-items-center">
            {PRICING_PLANS.map((plan, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 relative overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold font-mono mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features section that can grow */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>


                <Button
                  size={"xl"}
                  className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md text-sm font-mono transition-all duration-300 mt-auto"
                >
                  <Link className="text-lg" href={"https://calendly.com/halal-elites/30min"} target="_blank"  rel="noopener noreferrer" >
                    {">"} {HERO_CTA_TEXT}
                  </Link>
                </Button>
              </div>

            ))}
          </div>


        </div>


        {/* Additional information */}
        {/* <div className="mt-16 glass-effect rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12"> */}
        {/* Annual Renewal Costs */}
        {/* <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield
                  className="h-6 w-6"
                  style={{ color: "var(--brand-cyan)" }}
                />
                Annual Renewal Costs
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Domain renewal:</span>
                  <span className="font-mono">$15 - $24/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Hosting renewal:</span>
                  <span className="font-mono">$100 - $120/year</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We can assist with renewals or transfer full control to you
                  for direct payments.
                </p>
              </div>
            </div> */}

        {/* Why Choose Halal Elites? */}
        {/* <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Halal Elites?
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    We understand the Muslim community and your specific needs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    We handle all technical details so you can focus on your
                    business
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Transparent, affordable pricing with no hidden fees
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Risk-free development (pay after completion for standard
                    packages)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    We ensure all solutions are developed in accordance with
                    halal principles
                  </span>
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div>  */}
      </div>
    </section>
  );
};

export default page;
