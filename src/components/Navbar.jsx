import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

const professionalNavItems = [
  {
    name: "Profile",
    href: "#profile",
    id: "profile",
  },
  {
    name: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    name: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    name: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    name: "FAQ",
    href: "#faq",
    id: "faq",
  },
];

export const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("profile");

  const isPersonal =
    location.pathname === "/personal";

  /* NAVBAR BACKGROUND */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* MOBILE MENU */

  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ROUTE CHANGE */

  useEffect(() => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  /* ACTIVE SECTION */

  useEffect(() => {
    if (isPersonal) {
      return undefined;
    }

    const sections =
      professionalNavItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (visibleEntries.length > 0) {
            setActiveSection(
              visibleEntries[0].target.id
            );
          }
        },
        {
          rootMargin:
            "-25% 0px -55% 0px",
          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [isPersonal]);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-40 w-full transition-all duration-300",

        isScrolled
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl"
          : "py-5"
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* BRAND */}

        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Allen Lucas professional portfolio"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
            AL
          </div>

          <span className="hidden font-semibold tracking-tight sm:block">
            Allen Lucas
          </span>
        </Link>

        {/* PROFESSIONAL / PERSONAL */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex rounded-full border border-border bg-background/70 p-1 backdrop-blur-xl">
            <Link
              to="/"
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",

                !isPersonal
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Professional
            </Link>

            <Link
              to="/personal"
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",

                isPersonal
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Personal
            </Link>
          </div>
        </div>

        {/* DESKTOP */}

        <div className="hidden items-center gap-5 md:flex">
          {!isPersonal &&
            professionalNavItems.map(
              (item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-2 text-xs transition-colors lg:text-sm",

                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}

                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",

                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0"
                      )}
                    />
                  </a>
                );
              }
            )}

          {isPersonal && (
            <span className="text-sm text-muted-foreground">
              Personal Portfolio
            </span>
          )}

          {!isPersonal && (
            <a
              href="#contact"
              className="rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10"
            >
              Let&apos;s get in touch
            </a>
          )}
        </div>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          onClick={() =>
            setIsMenuOpen(
              (previous) => !previous
            )
          }
          className="relative z-50 p-2 text-foreground md:hidden"
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

        {/* MOBILE MENU */}

        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all md:hidden",

            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <div className="mb-10 flex rounded-full border border-border p-1">
            <Link
              to="/"
              className={cn(
                "rounded-full px-4 py-2 text-sm",

                !isPersonal
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              Professional
            </Link>

            <Link
              to="/personal"
              className={cn(
                "rounded-full px-4 py-2 text-sm",

                isPersonal
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              Personal
            </Link>
          </div>

          {!isPersonal && (
            <div className="flex flex-col items-center gap-7 text-xl">
              {professionalNavItems.map(
                (item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className={
                      activeSection ===
                      item.id
                        ? "text-primary"
                        : ""
                    }
                  >
                    {item.name}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="text-primary"
                onClick={() =>
                  setIsMenuOpen(false)
                }
              >
                Let&apos;s get in touch
              </a>
            </div>
          )}

          {isPersonal && (
            <p className="text-xl text-muted-foreground">
              Personal Portfolio
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};