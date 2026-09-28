import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

import PropTypes from "prop-types";

import {
  useEffect,
  useState,
} from "react";

import { Reveal } from "../Reveal";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Performance & Data Management System",
    organization: "Philippine Red Cross",
    category: "Web Application",

    description:
      "A web-based performance and data management system built to replace spreadsheet-driven workflows. It includes KPI monitoring, automated performance calculations, reporting, configurable dashboards, backups, and downloadable exports.",

    images: [
      "/projects/red-cross.png",
      "/projects/red-cross-2.png",
      "/projects/red-cross-3.png",
      "/projects/red-cross-4.png",
    ],

    overview:
      "A centralized web application developed to improve the way operational and performance data is managed. The system replaces repetitive spreadsheet-based processes with a structured interface for managing records, monitoring performance, and generating reports.",

    challenge:
      "Performance information was being handled through manual spreadsheet workflows, making monitoring, calculations, reporting, and maintaining consistent records more difficult.",

    solution:
      "I developed a React and Firebase web application that centralizes the workflow and automates key calculations while providing dashboards, reporting tools, configurable data, backups, and exports.",

    features: [
      "Centralized performance and operational data management",
      "Automated KPI and performance calculations",
      "Configurable dashboard and monitoring interface",
      "Reporting and filtering tools",
      "Downloadable data exports",
      "Backup and data management functionality",
    ],

    tags: [
      "React",
      "Vite",
      "Firebase",
      "JavaScript",
      "KPI Dashboard",
      "Automation",
    ],

    featured: true,
  },

  {
    id: 2,
    number: "02",
    title: "AI Logo Sheet Extraction",
    organization: "Automation Project",
    category: "AI Automation",

    description:
      "An automated workflow designed to process logo sheets, extract structured information, and move the resulting data through an AI-assisted processing pipeline.",

    images: [
      "/projects/logo-extraction.png",
      "/projects/logo-extraction-2.png",
      "/projects/logo-extraction-3.png",
    ],

    overview:
      "An AI-assisted automation workflow created to process logo sheets and transform information from incoming files into structured data that can be used by other systems.",

    challenge:
      "Manually reviewing files and extracting information from logo sheets is repetitive and becomes inefficient when processing larger quantities of data.",

    solution:
      "I created an n8n workflow that receives the source material, sends relevant content through AI processing, structures the extracted information, and passes the result through the rest of the automation pipeline.",

    features: [
      "Automated file processing",
      "AI-assisted information extraction",
      "Structured data generation",
      "Multi-step n8n workflow",
      "Automated processing pipeline",
    ],

    tags: [
      "n8n",
      "AI",
      "Data Extraction",
      "Automation",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Pinterest AI Analysis",
    organization: "Automation Project",
    category: "AI Analysis",

    description:
      "An automated Pinterest analysis workflow that collects content data, processes it with AI, and organizes insights for analysis and content decision-making.",

    images: [
      "/projects/pinterest-ai.png",
      "/projects/pinterest-ai-2.png",
      "/projects/pinterest-ai-3.png",
    ],

    overview:
      "An automated workflow for collecting Pinterest-related content information and transforming it into structured AI-generated analysis.",

    challenge:
      "Analyzing content manually requires gathering information from multiple sources and repeatedly organizing it before useful patterns can be identified.",

    solution:
      "I built an n8n workflow that connects data collection with AI analysis and organizes the resulting information into a more useful format for reviewing content and trends.",

    features: [
      "Automated content collection",
      "AI-assisted analysis",
      "API integration",
      "Structured output",
      "Automated multi-step processing",
    ],

    tags: [
      "n8n",
      "AI",
      "Pinterest",
      "API",
      "Analysis",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "AI Video Automation",
    organization: "Automation Project",
    category: "Generative AI",

    description:
      "A multi-step AI workflow for coordinating content generation and automated image or video processing through connected AI services.",

    images: [
      "/projects/video-automation.png",
      "/projects/video-automation-2.png",
      "/projects/video-automation-3.png",
    ],

    overview:
      "A generative AI workflow designed to coordinate multiple stages of content generation and media processing through a single automated pipeline.",

    challenge:
      "AI content production can require several separate tools and repeated manual transfers between generation and processing stages.",

    solution:
      "I used n8n to coordinate AI services and API requests so that individual content-generation steps can be connected into one automated workflow.",

    features: [
      "Multi-step AI generation workflow",
      "API-connected AI services",
      "Automated content processing",
      "Image and video workflow coordination",
      "Structured automation pipeline",
    ],

    tags: [
      "n8n",
      "Generative AI",
      "API",
      "Video Automation",
    ],
  },

  {
    id: 5,
    number: "05",
    title: "AI Email Management",
    organization: "Automation Project",
    category: "AI Agent",

    description:
      "An AI-assisted email workflow for processing incoming messages, extracting useful context, categorizing requests, and supporting automated responses.",

    images: [
      "/projects/email-agent.png",
      "/projects/email-agent-2.png",
      "/projects/email-agent-3.png",
    ],

    overview:
      "An automated email-processing system that uses AI to understand incoming messages and move them through an organized workflow.",

    challenge:
      "Repeatedly reviewing, categorizing, and responding to incoming emails can consume significant time when performed manually.",

    solution:
      "I created an n8n workflow that receives email information, processes its context using AI, categorizes the request, and prepares it for the appropriate automated action.",

    features: [
      "Incoming email processing",
      "AI context analysis",
      "Automatic categorization",
      "Workflow routing",
      "Automated response support",
    ],

    tags: [
      "n8n",
      "AI Agent",
      "Email",
      "Automation",
    ],
  },

  {
    id: 6,
    number: "06",
    title: "AI Fitness Coach",
    organization: "Automation Project",
    category: "AI Assistant",

    description:
      "An AI-powered fitness assistant workflow that processes user information and generates contextual responses through an automated conversational pipeline.",

    images: [
      "/projects/fitness-coach.png",
      "/projects/fitness-coach-2.png",
      "/projects/fitness-coach-3.png",
    ],

    overview:
      "A conversational AI workflow designed to process user-provided fitness information and generate contextual responses through an automated assistant.",

    challenge:
      "A useful conversational assistant needs to receive user information, maintain relevant context, process the request, and return an appropriate response reliably.",

    solution:
      "I created an automated workflow that routes user input through an AI processing pipeline and generates responses based on the information provided to the system.",

    features: [
      "Conversational AI workflow",
      "User-input processing",
      "Contextual AI responses",
      "Automated message pipeline",
      "Multi-step workflow logic",
    ],

    tags: [
      "n8n",
      "AI",
      "Automation",
      "Assistant",
    ],
  },

  {
    id: 7,
    number: "07",
    title: "WhatsApp AI Assistant",
    organization: "Automation Project",
    category: "Conversational AI",

    description:
      "A WhatsApp-connected AI workflow designed to receive messages, process requests through an AI agent, and automatically return relevant responses.",

    images: [
      "/projects/whatsapp-ai.png",
      "/projects/whatsapp-ai-2.png",
      "/projects/whatsapp-ai-3.png",
    ],

    overview:
      "A messaging automation workflow that connects WhatsApp conversations with an AI processing pipeline.",

    challenge:
      "Connecting a messaging platform with an AI assistant requires handling incoming messages, processing requests, and returning responses through the correct communication channel.",

    solution:
      "I created an n8n workflow that receives WhatsApp messages through webhooks, routes the message through an AI agent, and sends the generated response back through the messaging workflow.",

    features: [
      "WhatsApp message integration",
      "Webhook-based message handling",
      "AI agent processing",
      "Automated responses",
      "Multi-step conversational workflow",
    ],

    tags: [
      "n8n",
      "WhatsApp",
      "AI Agent",
      "Webhooks",
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [activeImage, setActiveImage] =
    useState(0);

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (
        event.key === "ArrowRight" &&
        selectedProject.images.length > 1
      ) {
        setActiveImage((current) =>
          current ===
          selectedProject.images.length - 1
            ? 0
            : current + 1
        );
      }

      if (
        event.key === "ArrowLeft" &&
        selectedProject.images.length > 1
      ) {
        setActiveImage((current) =>
          current === 0
            ? selectedProject.images.length - 1
            : current - 1
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setActiveImage((current) =>
      current ===
      selectedProject.images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setActiveImage((current) =>
      current === 0
        ? selectedProject.images.length - 1
        : current - 1
    );
  };

  return (
    <>
      <section
        id="projects"
        className="relative px-5 py-28 md:px-8"
      >
        <div className="container mx-auto max-w-7xl">
          {/* HEADER */}

          <Reveal
            direction="left"
            distance={45}
          >
            <div className="mb-16 flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
              <div>
                <p className="hero-mono mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Selected Work
                </p>

                <h2 className="hero-mono text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  Recent
                  <br />

                  <span className="text-gradient">
                    Projects.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-right">
                A selection of web development and AI automation projects
                I&apos;ve built, ranging from complete web applications to
                AI-powered workflows and API integrations.
              </p>
            </div>
          </Reveal>

          {/* FEATURED */}

          <Reveal
            direction="scale"
            distance={30}
          >
            <button
              type="button"
              className="project-featured group w-full cursor-pointer"
              onClick={() =>
                openProject(featuredProject)
              }
            >
              <div className="project-featured-image">
                <img
                  src={featuredProject.images[0]}
                  alt={featuredProject.title}
                  loading="lazy"
                />

                <div className="project-image-overlay" />

                <span className="project-number">
                  {featuredProject.number}
                </span>

                {featuredProject.images.length >
                  1 && (
                  <span className="project-image-count">
                    {featuredProject.images.length} images
                  </span>
                )}
              </div>

              <div className="project-featured-content">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="project-category">
                      {featuredProject.category}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {featuredProject.organization}
                    </span>
                  </div>

                  <h3 className="hero-mono text-2xl font-bold md:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    {featuredProject.description}
                  </p>
                </div>

                <div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {featuredProject.tags.map(
                      (tag) => (
                        <span
                          key={tag}
                          className="tech-pill"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                    View project details

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </button>
          </Reveal>

          {/* GRID */}

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {otherProjects.map(
              (project, index) => {
                const direction =
                  index % 2 === 0
                    ? "left"
                    : "right";

                return (
                  <Reveal
                    key={project.id}
                    direction={direction}
                    distance={45}
                    delay={
                      (index % 2) * 100
                    }
                    className="h-full"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        openProject(project)
                      }
                      className="project-card group h-full w-full cursor-pointer"
                    >
                      <div className="project-card-image">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          loading="lazy"
                        />

                        <div className="project-image-overlay" />

                        <span className="project-number">
                          {project.number}
                        </span>

                        {project.images.length >
                          1 && (
                          <span className="project-image-count">
                            {project.images.length} images
                          </span>
                        )}

                        <div className="project-arrow">
                          <ArrowUpRight
                            size={19}
                          />
                        </div>
                      </div>

                      <div className="p-6 md:p-7">
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <span className="project-category">
                            {project.category}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            {
                              project.organization
                            }
                          </span>
                        </div>

                        <h3 className="hero-mono text-xl font-bold md:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                          {
                            project.description
                          }
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map(
                            (tag) => (
                              <span
                                key={tag}
                                className="tech-pill"
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </button>
                  </Reveal>
                );
              }
            )}
          </div>

          {/* BOTTOM */}

          <Reveal delay={100}>
            <div className="mt-16 flex flex-col gap-4 border-t border-border/70 pt-8 text-left md:flex-row md:items-center md:justify-between">
              <p className="hero-mono text-sm text-muted-foreground">
                07 projects / web development + AI automation
              </p>

              <a
                href="#experience"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Continue to experience

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODAL */}

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeProject();
            }
          }}
          role="presentation"
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeProject}
              className="project-modal-close"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* IMAGE GALLERY */}

            <div className="project-modal-gallery">
              <div className="project-modal-image">
                <img
                  key={
                    selectedProject.images[
                      activeImage
                    ]
                  }
                  src={
                    selectedProject.images[
                      activeImage
                    ]
                  }
                  alt={`${selectedProject.title} screenshot ${
                    activeImage + 1
                  }`}
                  className="project-gallery-image"
                />

                <div className="project-image-overlay" />

                <span className="project-number">
                  {selectedProject.number}
                </span>

                {selectedProject.images.length >
                  1 && (
                  <>
                    <button
                      type="button"
                      className="project-gallery-arrow project-gallery-prev"
                      onClick={previousImage}
                      aria-label="Previous screenshot"
                    >
                      <ArrowLeft
                        size={20}
                      />
                    </button>

                    <button
                      type="button"
                      className="project-gallery-arrow project-gallery-next"
                      onClick={nextImage}
                      aria-label="Next screenshot"
                    >
                      <ArrowRight
                        size={20}
                      />
                    </button>

                    <span className="project-gallery-counter">
                      {String(
                        activeImage + 1
                      ).padStart(2, "0")}
                      {" / "}
                      {String(
                        selectedProject
                          .images.length
                      ).padStart(2, "0")}
                    </span>
                  </>
                )}
              </div>

              {/* DOTS */}

              {selectedProject.images.length >
                1 && (
                <div className="project-gallery-dots">
                  {selectedProject.images.map(
                    (image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        className={
                          index === activeImage
                            ? "project-gallery-dot project-gallery-dot-active"
                            : "project-gallery-dot"
                        }
                        aria-label={`View screenshot ${
                          index + 1
                        }`}
                      />
                    )
                  )}
                </div>
              )}
            </div>

            {/* CONTENT */}

            <div className="project-modal-content">
              <div className="flex flex-wrap items-center gap-3">
                <span className="project-category">
                  {selectedProject.category}
                </span>

                <span className="hero-mono text-xs text-muted-foreground">
                  {selectedProject.organization}
                </span>
              </div>

              <h2
                id="project-modal-title"
                className="hero-mono mt-5 max-w-4xl text-3xl font-bold tracking-[-0.035em] md:text-5xl"
              >
                {selectedProject.title}
              </h2>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
                {selectedProject.description}
              </p>

              {/* DETAILS */}

              <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="space-y-10">
                  <ProjectTextBlock
                    label="Overview"
                    text={
                      selectedProject.overview
                    }
                  />

                  <ProjectTextBlock
                    label="The Challenge"
                    text={
                      selectedProject.challenge
                    }
                  />

                  <ProjectTextBlock
                    label="The Solution"
                    text={
                      selectedProject.solution
                    }
                  />
                </div>

                <div>
                  <p className="hero-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Key Features
                  </p>

                  <div className="mt-5 space-y-3">
                    {selectedProject.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="project-modal-feature"
                        >
                          <span className="project-modal-check">
                            <Check
                              size={13}
                              strokeWidth={3}
                            />
                          </span>

                          <span>
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-10 border-t border-border/70 pt-8">
                    <p className="hero-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Technologies
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {selectedProject.tags.map(
                        (tag) => (
                          <span
                            key={tag}
                            className="tech-pill"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div className="mt-14 flex items-center justify-between border-t border-border/70 pt-7">
                <p className="hero-mono text-xs text-muted-foreground">
                  PROJECT /{" "}
                  {selectedProject.number}
                </p>

                <button
                  type="button"
                  onClick={closeProject}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Close project

                  <X
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectTextBlock = ({
  label,
  text,
}) => {
  return (
    <div>
      <p className="hero-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {label}
      </p>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
        {text}
      </p>
    </div>
  );
};

ProjectTextBlock.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};