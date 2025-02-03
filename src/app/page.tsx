import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("../sections/Header").then((mod) => mod.Header),
  { ssr: false }
);
const HeroSection = dynamic(
  () => import("../sections/Hero").then((mod) => mod.HeroSection),
  { ssr: false }
);
const ProjectsSection = dynamic(
  () => import("../sections/Projects").then((mod) => mod.ProjectsSection),
  { ssr: false }
);
const TapeSection = dynamic(
  () => import("../sections/Tape").then((mod) => mod.TapeSection),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () =>
    import("../sections/Testimonials").then((mod) => mod.TestimonialsSection),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("../sections/About").then((mod) => mod.AboutSection),
  { ssr: false }
);
const Grid = dynamic(
  () => import("../sections/Grid").then((mod) => mod.default),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("../sections/Contact").then((mod) => mod.ContactSection),
  { ssr: false }
);
const Footer = dynamic(
  () => import("../sections/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <Grid />
      <ContactSection />
      <Footer />
    </div>
  );
}
