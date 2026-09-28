import {
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { Reveal } from "../Reveal";

const socials = [
  {
    name: "Email",
    detail: "allenlcs95@gmail.com",
    href: "mailto:allenlcs95@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    detail: "allenjameslucas",
    href: "https://www.linkedin.com/in/allenjameslucas",
    icon: Linkedin,
    external: true,
  },
  {
    name: "Facebook",
    detail: "allen.lucas.7",
    href: "https://www.facebook.com/allen.lucas.7",
    icon: Facebook,
    external: true,
  },
  {
    name: "Upwork",
    detail: "View freelancer profile",
    href: "https://www.upwork.com/freelancers/~0173f61d2ac2441494",
    textIcon: "UP",
    external: true,
  },
  {
    name: "GitHub",
    detail: "View my repositories",
    href: "#",
    icon: Github,
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-32 md:px-8 md:py-40"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="contact-glow pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <Reveal
          direction="scale"
          distance={30}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="hero-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Let&apos;s Talk
            </p>

            <h2 className="hero-mono mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Have something
              <br />

              <span className="text-gradient">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Whether it&apos;s a website, web application, AI automation
              workflow, API integration, technical opportunity, or simply
              something worth building, I&apos;d be happy to hear about it.
            </p>

            <div className="mt-10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=allenlcs95@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-main-button group"
              >
                LET&apos;S GET IN TOUCH

                <span className="contact-main-button-icon">
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 border-t border-border/70">
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <Reveal
                  key={social.name}
                  delay={index * 80}
                  distance={25}
                  className="h-full"
                >
                  <a
                    href={social.href}
                    target={
                      social.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="contact-social group h-full"
                  >
                    <div className="contact-social-icon">
                      {Icon ? (
                        <Icon size={20} />
                      ) : (
                        <span className="hero-mono text-[10px] font-bold">
                          {social.textIcon}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 text-left">
                      <p className="hero-mono text-xs font-semibold uppercase tracking-[0.12em]">
                        {social.name}
                      </p>

                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {social.detail}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="ml-auto shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-8 text-left sm:flex-row sm:items-center sm:justify-between">
            <p className="hero-mono text-xs text-muted-foreground">
              Based in Quezon City, Philippines
            </p>

            <p className="hero-mono text-xs text-muted-foreground">
              Open to remote opportunities &amp; collaborations
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};