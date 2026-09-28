import {
  Camera,
  Cpu,
  Gauge,
  Wrench,
} from "lucide-react";

import { Reveal } from "../Reveal";

const interests = [
  {
    number: "01",
    title: "Motorcycles",
    subtitle: "BUILD / RIDE / TUNE",
    description:
      "Motorcycles are one of my main interests outside of work — from maintenance and troubleshooting to modifications, tuning, aesthetics, and experimenting with different setups.",
    icon: Gauge,
    accent: "violet",
  },
  {
    number: "02",
    title: "Electronics",
    subtitle: "ESP32 / ARDUINO / SENSORS",
    description:
      "I enjoy turning electronics knowledge into small practical projects using microcontrollers, sensors, modules, and embedded systems.",
    icon: Cpu,
    accent: "cyan",
  },
  {
    number: "03",
    title: "Projects & Builds",
    subtitle: "MODIFY / REPAIR / CREATE",
    description:
      "I like understanding how things work, taking them apart, improving them, repairing problems, and building solutions instead of leaving things alone.",
    icon: Wrench,
    accent: "orange",
  },
  {
    number: "04",
    title: "Photo & Video",
    subtitle: "GOPRO / RIDES / VISUALS",
    description:
      "I also enjoy capturing projects, motorcycles, rides, and everyday moments through photography and video.",
    icon: Camera,
    accent: "blue",
  },
];

export const InterestsSection = () => {
  return (
    <section
      id="interests"
      className="relative px-5 py-28 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}

        <Reveal
          direction="left"
          distance={45}
        >
          <div className="mb-16 grid gap-8 text-left lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="hero-mono mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Currently Into
              </p>

              <h2 className="hero-mono text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                Things that keep
                <br />

                <span className="text-gradient">
                  me curious.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                Not everything needs to become a job or a product. Some things
                are worth doing simply because they&apos;re interesting.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CARDS */}

        <div className="personal-interest-grid">
          {interests.map((interest, index) => {
            const Icon = interest.icon;

            return (
              <Reveal
                key={interest.title}
                direction={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
                delay={(index % 2) * 90}
                distance={45}
                className="h-full"
              >
                <article
                  className="personal-interest-card group"
                  data-accent={interest.accent}
                >
                  <div className="personal-interest-top">
                    <span className="personal-interest-number">
                      {interest.number}
                    </span>

                    <div className="personal-interest-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="hero-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {interest.subtitle}
                    </p>

                    <h3 className="hero-mono mt-3 text-2xl font-bold md:text-3xl">
                      {interest.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>

                  <div className="personal-interest-glow" />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* MARQUEE */}

        <Reveal delay={150}>
          <div className="personal-marquee">
            <div className="personal-marquee-track">
              <MarqueeContent />
              <MarqueeContent />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const MarqueeContent = () => {
  const words = [
    "MOTORCYCLES",
    "TECH",
    "ESP32",
    "BUILDING",
    "CAMERAS",
    "ENGINEERING",
    "DIY",
    "EXPERIMENTS",
  ];

  return (
    <>
      {words.map((word) => (
        <span
          key={word}
          className="personal-marquee-item"
        >
          {word}

          <span>
            ◆
          </span>
        </span>
      ))}
    </>
  );
};