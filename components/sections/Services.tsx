import React from 'react'
import { SERVICES_HEADING, SERVICES_SUBTEXT, SERVICES, HERO_CTA_LINK, HERO_CTA_TEXT } from '@/lib/constants'
import { Clock } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Services = () => {

  return (
    <div id="services" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl animate-holographic holographic-gradient opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 text-md font-mono text-brand-primary">
            What we do
          </div>
          <h2 className="text-3xl md:text-7xl font-bold leading-relaxed font-sans">
            {SERVICES_HEADING}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            {SERVICES_SUBTEXT}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="group relative">
              
              {/* "Coming Soon" badge */}
              {service.comingSoon && (
                <div className="absolute -top-3 -right-3 z-20 glass-effect rounded-full px-3 py-1 font-mono flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Coming Soon</span>
                </div>
              )}

              {/* ACTUAL card */}
              <div className="glass-effect relative rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-primary overflow-hidden min-h-[300px] flex flex-col items-center justify-start text-center">

                {/*  Holographic background */}
                <div className="absolute inset-0 holographic-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none z-0" />

                {/* ICON */}
                <div className="relative z-10 mb-6">
                  <div className="h-16 w-16 mx-auto relative">
                    <div className={`absolute inset-0 bg-gradient-to-b from-brand-primary to-foreground rounded-xl opacity-20 blur-sm`} />
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <service.icon
                        className="h-10 w-10 text-brand-primary animate-float"

                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p
                    className="text-sm font-mono opacity-70"
                  >
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {service.available && (
                    <div className="pt-3">
                      <Button variant='outline' size={'sm'} className='hover:text-brand-primary text-secondary-foreground font-mono font-thin duration-300 animate-holographic hover:border-brand-primary'>
                        <Link className='text-sm' href={"/services"}>learn_more</Link>

                      </Button>
                    </div>
                  )}
                </div>

                {/* Coming soon overlay */}
                {!service.available && (
                  <div className="absolute inset-0 bg-background/30 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity  z-20">
                    <span className="font-mono text-lg">
                      Coming Soon...
                    </span>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 font-mono">
                Let&apos;s discuss your project and create something that honors your values while delivering exceptional
                results.
              </p>
              <Button size={'xl'} className='bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md text-sm font-mono transition-all duration-300 ' >
                <Link className='text-lg' href={HERO_CTA_LINK}>{">"} {HERO_CTA_TEXT}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services