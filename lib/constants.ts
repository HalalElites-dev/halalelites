import {
  XIcon,
  Github,
  Linkedin,
  LucideIcon,
  Target,
  Eye,
  Heart,
  Bot,
  Code,
  Package,
  Smartphone,
  Users,
  Cog,
  Brain,
  Sparkle,
  Lightbulb,
} from "lucide-react";

// Site Metadata
export const SITE_TITLE = "HalalElites";
export const SITE_TAGLINE = "Boost your productivity with AI-powered tools.";
export const SITE_URL = "https://halalelites.dev";

// Navigation Links
export const NAV_LINKS = [
  { label: "./services", href: "/services" },
  { label: "./ai-lab", href: "/ailab" },
  { label: "./mentorship", href: "/mentorship" },
  { label: "./contact", href: "/contact" },
];

// Hero Section
export const HERO_HEADING = "Tech That\nHonors Values";
export const HERO_SUBTEXT =
  "We build web foundations for Muslim businesses and developers who refuse to compromise on their deen. Fast, clean, and halal";
export const HERO_CTA_TEXT = "deploy_with_us";
export const HERO_CTA_LINK = "/services";
export const HERO_2NDARY_CTA_TEXT = "learn_more";

// About Section
export const ABOUT_HEADING = "What We Build";
export const ABOUT_SUBTEXT = "// Solutions that honor your values";
export const ABOUT_CONTENT = `
At HalalElites, we believe that productivity should be effortless. Our platform combines advanced AI technology with intuitive design to help you manage tasks, set priorities, and achieve your goals efficiently.

  Whether you're a freelancer, a small business owner, or part of a large team, HalalElites adapts to your workflow and enhances your productivity.
`;
export const ABOUT = [
  {
    title: "Our Mission",
    description:
      "To empower individuals and teams to achieve their best work through innovative technology.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "A world where productivity is seamless and accessible to everyone.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and customer-centricity are at the core of everything we do.",
    icon: Heart,
  },
];

// AILAB Section
export const AILAB_HEADING = "AI Lab";
export const AILAB_SUBTEXT =
  "// We're experimenting with ethical AI integrations that enhance human capability without compromising our values";
export const AILAB_CONTENT = [
  {
    title: "Ethical AI Workflows",
    description:
      "Exploring AI tools that respects Islamic values while enhancing productivity",
    icon: Brain,
  },
  {
    title: "Smart Business Tools",
    description:
      "AI-enhanced calculators, planners, and more decision-making tools",
    icon: Cog,
  },
  {
    title: "Automated Workflows",
    description:
      "Streamline repetitive tasks while maintaining human oversight",
    icon: Sparkle,
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored AI integrations for your specific business needs",
    icon: Lightbulb,
  },
];

// Mentorship Section
export const MENTORSHIP_HEADING = "Level up Your Skills";
export const MENTORSHIP_SUBTEXT =
  "// Personalized  coaching that builds both technical skills and the discipline needed for long-term success. Faith-centered, community-driven development";

// Contact Section
export const CONTACT_HEADING = "Get in Touch";
export const CONTACT_SUBTEXT =
  "We would love to hear from you! Reach out with any questions or feedback.";
export const CONTACT_EMAIL = "support@halalelites.com";
export const CONTACT_PHONE = "+1 (770) 833-9267";
export const CONTACT_ADDRESS = "123 HalalElites St, Suite 100, City, Country";

// Testimonials Section

export const TESTIMONIALS = [
  {
    quote:
      "halalElites has transformed the way I work. I'm more organized and focused than ever!",
    author: "Habeeb",
    role: "CEO of halalElites",
  },
  {
    quote:
      "The AI suggestions are a game changer. They help me prioritize tasks effectively.",
    author: "Mr X",
    role: "Freelance Designer",
  },
  {
    quote:
      "I love the smart scheduling feature! It takes the stress out of planning my day.",
    author: "Ibrahim",
    role: "Project Manager",
  },
];

// Services Section
export const SERVICES_HEADING = "Building Digital Excellence with Purpose";
export const SERVICES_SUBTEXT =
  "// Halal Elites specializes in empowering small businesses across the US and Canada with top-tier web design and development. We meticulously hand-code each site, ensuring superior performance and strong search engine rankings to drive more customers and revenue your way. Plus, you can count on us for all your ongoing edits and support—we're here to help you thrive for the long haul.";
export const SERVICES = [
  {
    title: "Landing Pages",
    subtitle: "for Muslim Businesses",
    description:
      "Fast, clean, and halal landing pages that convert visitors into customers.",
    icon: Code,
    available: true,
    gradient: "from-brand-primary to-blue-500",
  },
  {
    title: "Web Applications",
    subtitle: "Prayer Tracker • Zakat Calculator",
    description:
      "Faith-based web tools that serve the Muslim community with purpose.",
    icon: Smartphone,
    available: true,
    gradient: "from-brand-primary to-pink-500",
  },
  {
    title: "AI Integration",
    subtitle: "Ethical & Intelligent",
    description:
      "Building AI tools that enhance human capability while respecting Islamic values.",
    icon: Bot,
    shape: "sphere",
    available: false,
    comingSoon: true,
    gradient: "from-brand-primary to-purple-500",
  },
  {
    title: "Dev Mentorship",
    subtitle: "Faith-Based Coaching",
    description:
      "1:1 mentorship combining technical skills with Islamic principles of discipline.",
    icon: Users,
    available: false,
    comingSoon: true,
    gradient: "from-brand-primary to-purple-500",
  },
  {
    title: "Digital Products",
    subtitle: "Templates • Kits • Resources",
    description:
      "Ready-made solutions that save time and accelerate your development journey.",
    icon: Package,
    available: false,
    comingSoon: true,
    gradient: "from-brand-primary to-cyan-500",
  },
];

// Pricing Plans (if applicable)
export const PRICING_PLANS = [
  {
    name: "Landing Pages",
    status: "Available Now",
    description:
      "Single-page websites that showcase your business with impact and convert visitors into customers",
    features: [
      { name: "Custom design & development", included: true },
      { name: "About, services, contact sections", included: true },
      { name: "Mobile-responsive design", included: true },
      { name: "Domain & hosting setup", included: true },
      { name: "Basic SEO optimization", included: true },
      { name: "Social media integration", included: true },
      { name: "SSL security & deployment", included: true },
    ],
  },
  {
    name: "Multi-Page Websites",
    status: "Available Now",
    description:
      "Complete website solutions with multiple pages for established businesses ready to scale",
    features: [
      { name: "Up to 4 custom pages", included: true },
      { name: "Advanced functionality", included: true },
      { name: "Contact form integration", included: true },
      { name: "Gallery & portfolio sections", included: true },
      { name: "Advanced SEO setup", included: true },
      { name: "Content management system", included: true },
      { name: "Performance optimization", included: true },
    ],
  },
];

// Footer Info
export const FOOTER_TEXT =
  "Building the future of halal tech, one ethical line of code at a time. Serving Muslim businesses and developers worldwide.";
export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
 
];

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: "X",
    url: "https://x.com/halalelites",
    icon: XIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/aybheeb",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/halal-elites",
    icon: Linkedin,
  },
];
