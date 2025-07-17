import { Button } from "@/components/ui/button";
import { HERO_CTA_TEXT, PRICING_PLANS } from "@/lib/constants";
import { Check, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section id="services" className="bg-background py-24 px-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-holographic holographic-gradient opacity-10"></div>
        </div>
        <div className="relative text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6">
            <span className="font-mono text-sm text-brand-primary">
              Transparent Pricing • No Hidden Fees
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 font-sans">
            Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            {"// Solutions that honor your values"}
          </p>
        </div>

        {/* Additional information */}
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Annual Renewal Costs */}
            <div>
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
            </div>

            {/* Why Choose Halal Elites? */}
            <div>
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
            </div>
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

              {/* Button stays at the very bottom */}
              <Button
                size={"xl"}
                className="bg-brand-primary hover:bg-brand-primary px-8 py-4 rounded-md text-sm font-mono transition-all duration-300 hover:scale-105 mt-auto"
              >
                <Link className="text-lg" href={"/contact"}>
                  {">"} {HERO_CTA_TEXT}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
