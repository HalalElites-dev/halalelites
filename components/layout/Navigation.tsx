'use client';
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn, scrollToSection} from "@/lib/utils";


export function Navigation({}) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
   if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <nav className="flex flex-col space-y-4 lg:flex-row items-center lg:space-x-8 md:space-y-0">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href} 
          href={link.href}
          className={cn(
            " transition-colors hover:text-brand-primary relative py-1 text-lg md:text-2xl lg:text-sm font-medium font-mono",
            
          )}
          onClick={(e) => handleClick(e, link.href)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}