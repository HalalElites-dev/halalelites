import { Brain } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section id="AILAB" className='bg-background py-24 px-6 min-h-screen'>
      <div className=' relative max-w-7xl mx-auto'>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-holographic holographic-gradient opacity-10"></div>
        </div>
       <div className="text-center relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-8">
              <Brain className="h-5 w-5 text-brand-primary" />
              <span className="text-brand-primary font-mono text-sm">AI - LAB</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">Coming Soon</h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            We&apos;re building ethical AI tools that enhance human capability without compromising Islamic values. The
            future of halal tech is intelligent.
          </p>
      </div>
      </div>
    </section>
  )
}

export default page