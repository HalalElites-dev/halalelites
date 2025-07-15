import React from 'react'
import { MENTORSHIP_HEADING, MENTORSHIP_SUBTEXT } from '@/lib/constants'
import { Calendar } from 'lucide-react'
const Mentorship = () => {
  return (
    <section id="Mentorship" className='bg-background py-20 px-4 relative overflow-hidden'>
      {/* holographic background */}
      <div className='max-w-7xl mx-auto'>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bottom-20 right-80 w-[500px] h-[500px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-20"
            style={{ animationDelay: "2s" }}
          >

          </div>
        </div>
        {/* title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-md font-mono text-brand-primary">
            Mentorship - Coming Soon
          </div>
          <h2 className="text-3xl md:text-7xl font-bold leading-relaxed font-sans">
            {MENTORSHIP_HEADING}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            {MENTORSHIP_SUBTEXT}
          </p>
        </div>
        {/* content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6" style={{ color: "var(--purple)" }} />
              Planned Curriculum
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--cyan-blue)" }}></div>
                <span className="">Foundations: HTML, CSS, JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--middle-gradient)" }}></div>
                <span className="">Modern Frameworks: React, Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--purple)" }}></div>
                <span className="">Backend & Databases</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--cyan-blue)" }}></div>
                <span className="">Deployment & DevOps</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--middle-gradient)" }}></div>
                <span className="">Career & Freelancing Guidance</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Why Faith-Based Mentorship?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                &quot;Learning to code isn&apos;t just about syntax and
                frameworks. It&apos;s about building discipline,
                patience, and the perseverance to solve complex
                problems.&quot;
              </p>
              <p>
                &quot;In our mentorship program, we integrate Islamic
                values to help you not only become a skilled developer
                but also a person of integrity and purpose.&quot;
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Mentorship