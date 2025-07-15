'use client';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import  { useState } from 'react'
import React from 'react'

const Page = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className='relative bg-background py-24 px-6'>
      <div className='relative max-w-7xl mx-auto'>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-5"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-5"
          ></div>
        </div>

        <div className='relative text-center mb-16'>
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-brand-primary"  />
            <span className="font-mono text-sm text-brand-primary">
              Contact Us
            </span>
          </div>
          <h1 className='text-6xl md:text-7xl font-bold mb-8 font-sans'>Get in Touch</h1>
        </div>

        <div className='relative grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Side */}
          <div className="space-y-8 mt-6"> 
            <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground max-w-lg font-mono">
                <p>Send us an email and let us know everything you want out of a new site.</p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <Phone className="h-6 w-6"  />
                </div>
                <div>
                  <div
                    className="text-lg font-mono uppercase tracking-wider mb-1"
                  >
                    Phone
                  </div>
                  <div className="text-lg font-mono">(123) 444-9999</div>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div
                    className="text-lg font-mono uppercase tracking-wider mb-1"
                  >
                    Email
                  </div>
                  <div className="text-lg font-mono">support@halalelites.com</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <MapPin className="h-6 w-6"  />
                </div>
                <div>
                  <div
                    className="text-lg font-mono uppercase tracking-wider mb-1"
            
                  >
                    Location
                  </div>
                  <div className="text-lg font-mono">Toledo, Ohio, USA</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-mono mb-8 uppercase tracking-wider">Make Appointment</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-background/50 border  rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-background/50 border  rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-mono uppercase tracking-wider mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-background/50 border  rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-mono uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write a message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border  rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
  
              variant={'default'}
                type="submit"
                className=" w-full py-4 rounded-lg font-mono text-lg transition-all flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 "
              >
                send_message
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>

          </div>
        </div>

    </section>
  )
}

export default Page