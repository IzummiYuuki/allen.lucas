import {
  ArrowUpRight,
  Bot,
  Code2,
  Headphones,
  Printer,
} from "lucide-react";

import { Reveal } from "../Reveal";

const experiences = [
  {
    id: 1,
    period: "2025 — Present",
    role: "AI Automation & Workflow Developer",
    company: "Freelance",
    type: "AI Automation",
    description:
      "Designing and building multi-step automation workflows that connect APIs, AI models, webhooks, databases, messaging platforms, and business tools.",
    highlights: [
      "Built n8n workflows for AI analysis, data extraction, reporting, notifications, and automated responses.",
      "Integrated AI models including OpenAI, Gemini, and Claude into practical workflow systems.",
      "Connected third-party services through REST APIs, webhooks, JSON, and authentication.",
      "Designed workflows to reduce repetitive manual work and improve information processing.",
    ],
    technologies: [
      "n8n",
      "Python",
      "REST APIs",
      "Webhooks",
      "OpenAI",
      "Gemini",
      "Claude",
    ],
    icon: Bot,
  },
  {
    id: 2,
    period: "2025",
    role: "Web Development & Automation",
    company: "Philippine Red Cross",
    type: "Web Application",
    description:
      "Developed a web-based performance and data management system designed to replace spreadsheet-driven operational workflows.",
    highlights: [
      "Built a centralized system for performance and operational data management.",
      "Implemented automated performance calculations and KPI monitoring.",
      "Created configurable dashboards, reporting filters, backups, and downloadable exports.",
      "Helped transform a manual spreadsheet workflow into a structured web application.",
    ],
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "JavaScript",
      "Data Management",
      "Automation",
    ],
    icon: Code2,
  },
  {
    id: 3,
    period: "2025",
    role: "Audio Annotator",
    company: "DataForce — CARDAMOM Project",
    type: "AI Data",
    description:
      "Worked with structured audio data used for machine learning and natural language processing development.",
    highlights: [
      "Annotated and labeled audio data according to detailed project guidelines.",
      "Performed transcription, segmentation, and quality checks.",
      "Reviewed annotation consistency and corrected discrepancies.",
      "Maintained accuracy across large volumes of structured data.",
    ],
    technologies: [
      "Data Annotation",
      "Transcription",
      "Quality Assurance",
      "Machine Learning Data",
    ],
    icon: Headphones,
  },
  {
    id: 4,
    period: "2023 — 2025",
    role: "Print Production Manager",
    company: "SPCT Printing Services",
    type: "Operations",
    description:
      "Managed print production operations, equipment, quality control, and client requirements in a hands-on technical environment.",
    highlights: [
      "Operated, inspected, and maintained printing equipment.",
      "Performed quality-control checks to improve consistency across production runs.",
      "Coordinated client requirements and production approvals.",
      "Troubleshot equipment and production issues during day-to-day operations.",
    ],
    technologies: [
      "Production",
      "Quality Control",
      "Equipment Maintenance",
      "Technical Troubleshooting",
    ],
    icon: Printer,
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative px-5 py-28 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}

        <Reveal
          direction="left"
          distance={45}
        >
          <div className="mb-20 grid gap-8 text-left lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="hero-mono mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Experience
              </p>

              <h2 className="hero-mono text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                Where I&apos;ve
                <br />

                <span className="text-gradient">
                  worked.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                My background combines web development, AI automation,
                structured data work, engineering, and hands-on technical
                operations. Each role has shaped how I approach solving
                practical problems with technology.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TIMELINE */}

        <div className="relative">
          {/* ANIMATED DESKTOP TIMELINE LINE */}

          <Reveal
            direction="down"
            distance={20}
            className="pointer-events-none absolute bottom-0 left-[178px] top-0 hidden lg:block"
          >
            <div className="experience-timeline-line h-full w-px bg-border" />
          </Reveal>

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <Reveal
                  key={experience.id}
                  direction="right"
                  distance={50}
                  delay={index * 110}
                >
                  <article className="experience-row group">
                    {/* DATE */}

                    <div className="experience-date">
                      <span className="hero-mono text-xs text-muted-foreground">
                        {experience.period}
                      </span>
                    </div>

                    {/* TIMELINE DOT */}

                    <div className="experience-dot-wrap">
                      <span className="experience-dot">
                        <span />
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div className="experience-card">
                      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
                        {/* LEFT */}

                        <div>
                          <div className="mb-6 flex items-start justify-between gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                              <Icon size={22} />
                            </div>

                            <span className="hero-mono text-xs text-muted-foreground">
                              0{index + 1}
                            </span>
                          </div>

                          <span className="project-category">
                            {experience.type}
                          </span>

                          <h3 className="hero-mono mt-5 text-2xl font-bold md:text-3xl">
                            {experience.role}
                          </h3>

                          <p className="mt-2 font-medium text-primary">
                            {experience.company}
                          </p>

                          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                            {experience.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {experience.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="tech-pill"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* RIGHT */}

                        <div className="border-t border-border/70 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                          <p className="hero-mono mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Selected responsibilities
                          </p>

                          <ul className="space-y-4">
                            {experience.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex gap-4 text-sm leading-6 text-muted-foreground"
                              >
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                <span>
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="experience-hover-arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* EDUCATION */}

        <Reveal
          direction="up"
          distance={40}
          delay={150}
        >
          <div className="mt-24 border-t border-border/70 pt-14">
            <div className="grid gap-8 text-left md:grid-cols-[0.6fr_1.4fr]">
              <div>
                <p className="hero-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Education
                </p>

                <p className="hero-mono mt-3 text-3xl font-bold">
                  2026
                </p>
              </div>

              <div>
                <h3 className="hero-mono text-2xl font-bold md:text-3xl">
                  Bachelor of Science in
                  <br />
                  Electronics Engineering
                </h3>

                <p className="mt-4 text-primary">
                  New Era University
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                  An engineering foundation spanning electronics, embedded
                  systems, communications, networking, programming, system
                  analysis, and technical problem solving.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* NEXT */}

        <Reveal delay={200}>
          <div className="mt-20 flex justify-end border-t border-border/70 pt-8">
            <a
              href="#faq"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Continue to FAQ

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};