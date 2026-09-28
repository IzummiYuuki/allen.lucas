import {
  Bot,
  Braces,
  Code2,
  Cpu,
  Flame,
  Github,
  Globe2,
  Network,
  Radio,
  Route,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

import { Reveal } from "../Reveal";

const skills = [
  {
    name: "n8n",
    icon: Workflow,
    accent: "purple",
  },
  {
    name: "Python",
    icon: Code2,
    accent: "blue",
  },
  {
    name: "JavaScript",
    icon: Braces,
    accent: "yellow",
  },
  {
    name: "React",
    icon: Sparkles,
    accent: "cyan",
  },
  {
    name: "Vite",
    icon: Route,
    accent: "violet",
  },
  {
    name: "Firebase",
    icon: Flame,
    accent: "orange",
  },
  {
    name: "OpenAI",
    icon: Bot,
    accent: "green",
  },
  {
    name: "Claude",
    icon: Bot,
    accent: "orange",
  },
  {
    name: "Gemini",
    icon: Sparkles,
    accent: "blue",
  },
  {
    name: "REST API",
    icon: Globe2,
    accent: "cyan",
  },
  {
    name: "Webhooks",
    icon: Radio,
    accent: "purple",
  },
  {
    name: "GitHub",
    icon: Github,
    accent: "gray",
  },
  {
    name: "HTML",
    icon: Code2,
    accent: "orange",
  },
  {
    name: "CSS",
    icon: Braces,
    accent: "blue",
  },
  {
    name: "ESP32",
    icon: Cpu,
    accent: "teal",
  },
  {
    name: "Arduino",
    icon: Cpu,
    accent: "cyan",
  },
  {
    name: "Networking",
    icon: Network,
    accent: "blue",
  },
  {
    name: "AutoCAD",
    icon: Wrench,
    accent: "red",
  },
  
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative px-5 py-28 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}

        <Reveal
          direction="left"
          distance={40}
        >
          <div className="mb-14 text-left">
            <p className="hero-mono mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Technical Stack
            </p>

            <h2 className="hero-mono text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Skills
            </h2>

            <div className="mt-5 h-[3px] w-16 rounded-full bg-primary" />
          </div>
        </Reveal>

        {/* GRID */}

        <div className="skills-logo-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            /*
             * Restart the stagger for each visual row instead
             * of making cards near the bottom wait >1 second.
             */
            const delay = (index % 6) * 65;

            return (
              <Reveal
                key={skill.name}
                delay={delay}
                direction="scale"
                distance={20}
                className="h-full"
              >
                <article
                  className="skills-logo-card group h-full"
                  data-accent={skill.accent}
                >
                  <div className="skills-logo-icon">
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="skills-logo-name">
                    {skill.name}
                  </p>

                  <div className="skills-logo-glow" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};