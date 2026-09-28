import {
  ArrowDown,
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Projects",
    sublabel: "built",
  },
  {
    value: 5,
    suffix: "+",
    label: "Automation",
    sublabel: "workflows",
  },
  {
    value: 3,
    suffix: "",
    label: "Core",
    sublabel: "focus areas",
  },
  {
    value: 2026,
    suffix: "",
    label: "ECE",
    sublabel: "graduate",
    isYear: true,
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28"
    >
      {/* GRID BACKGROUND */}
      <div className="portfolio-grid absolute inset-0 opacity-70" />

      {/* BACKGROUND GLOWS */}
      <div className="hero-glow pointer-events-none absolute -left-72 -top-72 h-[750px] w-[750px] rounded-full" />

      <div className="hero-glow pointer-events-none absolute -bottom-80 -right-72 h-[700px] w-[700px] rounded-full opacity-60" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* MAIN HERO */}
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT */}
          <div className="text-left">
            <p className="hero-mono mb-4 text-sm font-semibold tracking-wide text-muted-foreground md:text-lg">
              AI Automation &amp; Web Developer
            </p>

            <h1 className="hero-mono text-[3.5rem] font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Hello I&apos;m
              <br />

              <span className="text-gradient">
                Allen James
                <br />
                Lucas
              </span>
            </h1>

            <div className="mt-9 max-w-2xl">
              <p className="hero-mono text-sm leading-7 text-muted-foreground md:text-base">
                Web Development • AI Automation • API Integration
              </p>

              <p className="hero-mono text-sm leading-7 text-muted-foreground md:text-base">
                Electronics Engineering • Quezon City, Philippines
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/Allen-Lucas-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-outline-button group"
              >
                VIEW CV

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* EMAIL */}

              <SocialButton
                href="mailto:allenlcs95@gmail.com"
                label="Email"
              >
                <Mail size={18} />
              </SocialButton>

              {/* LINKEDIN */}

              <SocialButton
                href="https://www.linkedin.com/in/allenjameslucas"
                label="LinkedIn"
                external
              >
                <Linkedin size={18} />
              </SocialButton>

              {/* FACEBOOK */}

              <SocialButton
                href="https://www.facebook.com/allen.lucas.7"
                label="Facebook"
                external
              >
                <Facebook size={18} />
              </SocialButton>

              {/* UPWORK */}

              <SocialButton
                href="https://www.upwork.com/freelancers/~0173f61d2ac2441494"
                label="Upwork"
                external
              >
                <span className="hero-mono text-[9px] font-bold">
                  UP
                </span>
              </SocialButton>

              {/* GITHUB */}

              <SocialButton
                href="#"
                label="GitHub"
              >
                <Github size={18} />
              </SocialButton>
            </div>


          </div>

          {/* RIGHT - PROFILE IMAGE */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="profile-orbit">
              {/* ROTATING SEGMENTED RING */}
              <div className="profile-ring profile-ring-one" />

              <div className="profile-ring profile-ring-two" />

              {/* PHOTO */}
              <div className="profile-photo-shell">
                <img
                  src="/profile.jpg"
                  alt="Allen James Lucas"
                  className="profile-photo"
                />
              </div>

              {/* DECORATIVE DOTS */}
              <span className="profile-dot profile-dot-one" />
              <span className="profile-dot profile-dot-two" />
              <span className="profile-dot profile-dot-three" />
            </div>
          </div>

          {/* MOBILE PROFILE IMAGE */}
          <div className="flex justify-center lg:hidden">
            <div className="profile-orbit profile-orbit-mobile">
              <div className="profile-ring profile-ring-one" />

              <div className="profile-ring profile-ring-two" />

              <div className="profile-photo-shell">
                <img
                  src="/profile.jpg"
                  alt="Allen James Lucas"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATED STATISTICS */}
        <div className="relative mt-10 grid border-y border-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter
              key={`${stat.label}-${stat.sublabel}`}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              isYear={stat.isYear}
            />
          ))}
        </div>

        {/* SCROLL */}
        <a
          href="#profile"
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 pb-8 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="hero-mono text-[10px] uppercase tracking-[0.25em]">
            Explore
          </span>

          <ArrowDown
            size={16}
            className="animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};

const SocialButton = ({
  href,
  label,
  external = false,
  children,
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="hero-social-button"
    >
      {children}
    </a>
  );
};

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const StatCounter = ({
  value,
  suffix,
  label,
  sublabel,
  isYear = false,
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;

        const duration = 1400;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          /*
           * Ease-out cubic:
           * starts quickly and slows down near the final number.
           */
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          let nextValue;

          if (isYear) {
            /*
             * Starting a year counter at zero would flash through
             * thousands of meaningless numbers.
             * Instead it animates from 2000 to the target year.
             */
            const startYear = 2000;

            nextValue = Math.floor(
              startYear + (value - startYear) * easedProgress
            );
          } else {
            nextValue = Math.floor(value * easedProgress);
          }

          setCount(nextValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, isYear]);

  return (
    <div
      ref={counterRef}
      className="relative flex min-h-36 items-center gap-4 border-border/70 px-5 py-8 text-left sm:nth-[odd]:border-r lg:border-r lg:last:border-r-0"
    >
      <span className="hero-mono text-4xl font-bold tracking-tight md:text-5xl">
        {count}
        {suffix}
      </span>

      <div className="hero-mono text-xs leading-5 text-muted-foreground md:text-sm">
        <p>{label}</p>
        <p>{sublabel}</p>
      </div>
    </div>
  );
};

StatCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string.isRequired,
  isYear: PropTypes.bool,
};