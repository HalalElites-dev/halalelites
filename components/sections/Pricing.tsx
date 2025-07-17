import { PRICING_PLANS } from "@/lib/constants";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs and start boosting your
            productivity today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            {PRICING_PLANS.map((plan, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {plan.name}
                </h3>
                <p className="text-xl font-bold text-brand-primary mb-4">
                  {/* plan.price */}
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{/* feature */}</li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="inline-block bg-brand-primary text-white py-2 px-4 rounded-lg"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
