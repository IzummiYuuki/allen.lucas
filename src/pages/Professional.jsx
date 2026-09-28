import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";

import { HeroSection } from "../components/professional/HeroSection";
import { TechRibbons } from "../components/professional/TechRibbons";
import { ProfileSection } from "../components/professional/ProfileSection";
import { SkillsSection } from "../components/professional/SkillsSection";
import { ProjectsSection } from "../components/professional/ProjectsSection";
import { ExperienceSection } from "../components/professional/ExperienceSection";
import { FAQSection } from "../components/professional/FAQSection";
import { ContactSection } from "../components/professional/ContactSection";

export const Professional = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />

        <TechRibbons />

        <ProfileSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <FAQSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};