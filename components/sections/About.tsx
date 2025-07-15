import React from 'react'
import { ABOUT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'

const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-xl font-bold text-foreground mb-4 leading-tight">{ABOUT_HEADING}</h2>
          <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {ABOUT_SUBTEXT}
          </p>
        </div>

      </div>
    </section>
  )
}

export default About