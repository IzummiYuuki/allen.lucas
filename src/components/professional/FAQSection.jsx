import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "../Reveal";

const faqs = [
  {
    question: "What type of opportunities are you looking for?",
    answer:
      "I am primarily interested in web development and AI automation opportunities. I am also open to roles involving workflow automation, API integrations, technical support, and related technology-focused work, including remote and freelance opportunities.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "I work primarily with React, JavaScript, Vite, Firebase, HTML, and CSS. I also integrate REST APIs, authentication, databases, and automation services when building web applications.",
  },
  {
    question: "What automation platforms do you work with?",
    answer:
      "My primary automation platform is n8n. I use it together with REST APIs, webhooks, JSON, databases, messaging platforms, email services, and AI models to build multi-step automated workflows.",
  },
  {
    question: "Can you integrate AI into websites and workflows?",
    answer:
      "Yes. I work with AI services including OpenAI, Gemini, and Claude and connect them with web applications, APIs, databases, and automation workflows for tasks such as analysis, extraction, classification, summarization, and automated responses.",
  },
  {
    question: "What kind of web applications have you built?",
    answer:
      "My projects include a web-based performance and data management system for the Philippine Red Cross using React, Vite, and Firebase, along with several projects that connect web technologies with APIs, AI services, and automation workflows.",
  },
  {
    question: "What is your engineering background?",
    answer:
      "I have a Bachelor of Science in Electronics Engineering background covering electronics, embedded systems, communications, networking, programming, system analysis, and technical troubleshooting.",
  },
  {
    question: "Are you available for remote work?",
    answer:
      "Yes. I am based in Quezon City, Philippines and I am open to remote employment, freelance projects, and collaborations.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative px-5 py-28 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}

        <Reveal>
          <div className="mb-16 grid gap-8 text-left lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="hero-mono mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                FAQ
              </p>

              <h2 className="hero-mono text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                A few things
                <br />

                <span className="text-gradient">
                  you may ask.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                A quick overview of what I build, the technologies I work with,
                and the opportunities I&apos;m currently open to.
              </p>
            </div>
          </div>
        </Reveal>

        {/* QUESTIONS */}

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal
                key={faq.question}
                delay={index * 60}
                distance={25}
              >
                <article
                  className={`faq-item ${
                    isOpen ? "faq-item-open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-5 md:gap-8">
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>
                    </div>

                    <span className="faq-toggle">
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  <div
                    className={`faq-answer-wrapper ${
                      isOpen ? "faq-answer-open" : ""
                    }`}
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* BOTTOM */}

        <Reveal delay={120}>
          <div className="mt-12 border-t border-border/70 pt-8 text-left">
            <p className="hero-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Still have a question?
            </p>

            <a
              href="#contact"
              className="mt-3 inline-block text-sm font-medium text-primary transition-opacity hover:opacity-70"
            >
              Let&apos;s talk →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};