import {
  ArrowDown,
  Camera,
  Cpu,
  Gauge,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Reveal } from "../Reveal";

const personalTags = [
  "MOTORCYCLES",
  "ELECTRONICS",
  "ESP32",
  "CAMERAS",
  "DIY",
  "ENGINEERING",
];

export const PersonalHero = () => {
  return (
    <section
      id="personal-home"
      className="personal-hero relative min-h-screen overflow-hidden px-5 pt-32 md:px-8"
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="personal-hero-number"
        aria-hidden="true"
      >
        02
      </div>

      <div
        className="personal-hero-circle personal-hero-circle-one"
        aria-hidden="true"
      />

      <div
        className="personal-hero-circle personal-hero-circle-two"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid min-h-[650px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}

          <Reveal
            direction="left"
            distance={55}
          >
            <div className="text-left">
              <div className="mb-7 flex items-center gap-3">
                <span className="personal-status-dot" />

                <p className="hero-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Personal Space / 02
                </p>
              </div>

              <h1 className="hero-mono text-[3.6rem] font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Beyond
                <br />

                <span className="text-gradient">
                  the code.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                This is where the professional stuff ends and the things I
                genuinely enjoy building, modifying, testing, riding, and
                experimenting with begin.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {personalTags.map((tag) => (
                  <span
                    key={tag}
                    className="personal-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#interests"
                className="personal-explore-button group mt-10"
              >
                EXPLORE

                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </Reveal>

          {/* RIGHT */}

          <Reveal
            direction="scale"
            delay={120}
            distance={30}
          >
            <div className="personal-hero-visual">
              {/* PHOTO PLACEHOLDER */}

              <div className="personal-photo-frame">
                <div className="personal-photo-placeholder">
                  <Gauge
                    size={52}
                    strokeWidth={1.3}
                  />

                  <p className="hero-mono mt-5 text-xs font-semibold uppercase tracking-[0.18em]">
                    Garage Photo
                  </p>

                  <p className="mt-2 max-w-[220px] text-center text-xs leading-5 text-muted-foreground">
                    Your motorcycle photo will go here later.
                  </p>
                </div>

                <span className="personal-frame-corner personal-frame-corner-one" />
                <span className="personal-frame-corner personal-frame-corner-two" />
                <span className="personal-frame-corner personal-frame-corner-three" />
                <span className="personal-frame-corner personal-frame-corner-four" />
              </div>

              {/* FLOATING CARDS */}

              <div className="personal-float-card personal-float-card-one">
                <Wrench size={16} />

                <span>
                  BUILD
                </span>
              </div>

              <div className="personal-float-card personal-float-card-two">
                <Cpu size={16} />

                <span>
                  EXPERIMENT
                </span>
              </div>

              <div className="personal-float-card personal-float-card-three">
                <Camera size={16} />

                <span>
                  CAPTURE
                </span>
              </div>

              <div className="personal-float-card personal-float-card-four">
                <Sparkles size={16} />

                <span>
                  CREATE
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM LINE */}

        <Reveal delay={200}>
          <div className="personal-hero-footer">
            <span>
              ALLEN / PERSONAL
            </span>

            <span>
              QUEZON CITY / PH
            </span>

            <span>
              BUILD • RIDE • EXPERIMENT
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};