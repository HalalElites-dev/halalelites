import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AILAB from "@/components/sections/AILAB";
import Mentorship from "@/components/sections/Mentorship";
import CTASection from "@/components/sections/CTASection";
export default function Home() {
  return (
  <main>
    <Hero/>
    <Services/>
    <AILAB/>
    <Mentorship/>
    <CTASection/>
  </main>
  );
}
