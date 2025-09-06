import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { InteractiveBackground } from "@/components/background/interactive-background";
import { ScrollAnimationProvider } from "@/components/animations/scroll-animations";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen relative">
        <InteractiveBackground />
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  );
}
