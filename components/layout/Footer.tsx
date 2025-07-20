import Link from "next/link"
import { FOOTER_TEXT, SITE_TITLE, SOCIAL_LINKS } from "@/lib/constants"
import Image from "next/image"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Left section - Brand and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 gap-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image suppressHydrationWarning
                  src="/LogoW.png"
                  alt="Logo"
                  width={160}
                  height={32}
                  className="block dark:hidden"
                />
                <Image suppressHydrationWarning
                  src="/Logo.png"
                  alt="Logo"
                  width={160}
                  height={32}
                  className="hidden dark:block"
                />
              </Link>
            </div>
            <p className="text-primary text-sm leading-relaxed mb-6 max-w-xs font-mono">{FOOTER_TEXT}</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5 text-primary " />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Quick Links Column */}
            <div>
              <h3 className="font-semibold text-primary mb-4 font-sans">QUICK LINKS</h3>
              <ul className="space-y-3 font-mono ">
                <li>
                  <Link href="/services" className=" = transition-colors text-sm hover:text-brand-primary ">
                    ./services
                  </Link>
                </li>
                <li>
                  <Link href="/ailab" className="  transition-colors text-sm hover:text-brand-primary ">
                    ./ai-lab
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship" className="  transition-colors text-sm hover:text-brand-primary">
                    ./mentorship
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Company Column  */}
             <div>
              <h3 className="font-semibold text-primary mb-4 font-sans">Services</h3>
              <ul className="space-y-3 font-mono  ">
                <li className="transition-colors text-md hover:text-brand-primary">
                  Web Design
                </li>
                <li className="transition-colors text-md hover:text-brand-primary">
                  Web Applications
                </li>
                <li className="transition-colors text-md hover:text-brand-primary">
                  Digital Products
                </li>
              </ul>
            </div>
            {/* Coming soon */}
            <div>
              <h3 className="font-semibold text-primary mb-4 font-sans">Coming Soon</h3>
              <ul className="space-y-3 font-mono  ">
                <li className="transition-colors text-md hover:text-brand-primary">
                  AI Lab
                </li>
                <li className="transition-colors text-md hover:text-brand-primary">
                  Mentorship
                </li>
                <li className="transition-colors text-md hover:text-brand-primary">
                  Community
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Fixed: Moved outside the main grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-accent-foreground">
          <p className="text-sm  mb-4 sm:mb-0">© {currentYear} {SITE_TITLE}. All rights reserved.</p>
          {/* <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className=" hover:text-primary transition-colors text-sm underline"
              >
                {link.label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
