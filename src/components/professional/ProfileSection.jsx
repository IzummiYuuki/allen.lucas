import {
  ArrowUpRight,
  Bot,
  Code2,
  Cpu,
  GraduationCap,
  Workflow,
} from "lucide-react";

import PropTypes from "prop-types";

import { Reveal } from "../Reveal";

const technologies = [
  "React",
  "JavaScript",
  "Vite",
  "Firebase",
  "HTML",
  "CSS",
  "REST APIs",
  "n8n",
];

export const ProfileSection = () => {
  return (
    <section
      id="profile"
      className="relative px-5 py-24 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}

        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div className="text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Short Profile
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                A little about me.
              </h2>
            </div>

            <span className="hidden text-sm text-muted-foreground md:block">
              Quezon City, Philippines
            </span>
          </div>
        </Reveal>

        {/* MAIN GRID */}

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* INTRO */}

          <Reveal
            direction="left"
            distance={55}
          >
            <div className="glass-card relative h-full overflow-hidden rounded-3xl p-7 text-left md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Code2 size={23} />
                </div>

                <h3 className="max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">
                  I build modern web applications and automation systems that
                  turn ideas and repetitive processes into practical digital
                  solutions.
                </h3>

                <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                  I&apos;m Allen James Lucas, a Web Developer and AI Automation
                  Developer with an Electronics Engineering background. I build
                  responsive web applications, AI-powered workflows, API
                  integrations, dashboards, data-processing systems, and
                  practical automation solutions.
                </p>

                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                  My main focus is web development, while automation allows me
                  to connect applications and services together to reduce
                  repetitive work and create more useful end-to-end systems.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="tech-pill"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}

          <div className="grid gap-5">
            <Reveal
              direction="right"
              delay={120}
              distance={45}
            >
              <div className="glass-card h-full rounded-3xl p-6 text-left">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={21} />
                </div>

                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Education
                </p>

                <h3 className="font-semibold">
                  B.S. Electronics Engineering
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  New Era University
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  2026
                </p>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={220}
              distance={45}
            >
              <div className="glass-card h-full rounded-3xl p-6 text-left">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Workflow size={21} />
                </div>

                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Current Focus
                </p>

                <h3 className="font-semibold">
                  Web Development &amp; AI Automation
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  React applications, Firebase, APIs, n8n workflows, AI agents,
                  webhooks, and practical web-based automation systems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* SMALL CARDS */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Reveal
            delay={0}
            distance={35}
          >
            <ProfileCard
              icon={<Code2 size={20} />}
              label="Development"
              value="React + JavaScript"
            />
          </Reveal>

          <Reveal
            delay={100}
            distance={35}
          >
            <ProfileCard
              icon={<Bot size={20} />}
              label="Automation"
              value="n8n + AI Agents"
            />
          </Reveal>

          <Reveal
            delay={200}
            distance={35}
          >
            <ProfileCard
              icon={<Cpu size={20} />}
              label="Engineering"
              value="Electronics & Embedded"
            />
          </Reveal>
        </div>

        {/* LINK */}

        <Reveal
          delay={250}
          distance={25}
        >
          <div className="mt-8 flex justify-start">
            <a
              href="https://www.linkedin.com/in/allenjameslucas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
            >
              More about my background

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

const ProfileCard = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="glass-card h-full rounded-2xl p-5 text-left transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-4 text-primary">
        {icon}
      </div>

      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 font-medium">
        {value}
      </p>
    </div>
  );
};

ProfileCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};