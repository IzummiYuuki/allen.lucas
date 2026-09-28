import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

import { PersonalSection } from "../components/personal/PersonalSection";

export const Personal = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main className="relative z-10 pt-24">
        <PersonalSection />
      </main>

      <Footer />
    </div>
  );
};