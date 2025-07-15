import React from 'react'
import { HERO_HEADING, HERO_SUBTEXT, HERO_CTA_TEXT, HERO_CTA_LINK, HERO_2NDARY_CTA_TEXT } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"
const Hero = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center bg-background pt-16 px-4 relative overflow-hidden'>
            {/* Holographic background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-holographic holographic-gradient opacity-20">

                </div>
                <div
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-15"
                    style={{ animationDelay: "2s" }}
                >

                </div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-10"
                    style={{ animationDelay: "4s" }}
                >

                </div>

            </div>
            <div className='max-w-5xl mx-auto text-center relative z-10'>
                    <div className='py-36 '>
                        <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-mono text-brand-primary">
                            Custom Coded Solutions
                        </div>
                        <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground leading-tight'>{HERO_HEADING.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}</h1>
                        <p className='text-xl mb-8 max-w-2xl text-muted-foreground leading-relaxed font-mono'>{HERO_SUBTEXT}</p>
                        <div className=' flex flex-col lg:flex-row gap-4 justify-center items-center'>
                            <Button size={'xl'} className='bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md text-sm font-mono transition-all duration-300 ' >
                                <Link className='text-lg' href={HERO_CTA_LINK}>{">"} {HERO_CTA_TEXT}</Link>
                            </Button>
                            <Button variant='outline' size={'xl'} className='hover:text-brand-primary text-secondary-foreground font-mono font-thin duration-300 animate-holographic hover:border-brand-primary'>
                                <Link className='text-lg' href={"/"}>{HERO_2NDARY_CTA_TEXT}</Link>

                            </Button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Hero