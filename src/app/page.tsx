import dynamic from "next/dynamic";

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Grid from "@/sections/Grid";
const Header = dynamic(() => import('../sections/Header').then(mod => mod.Header), { ssr: false });
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <Grid/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
