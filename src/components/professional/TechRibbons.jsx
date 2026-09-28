import PropTypes from "prop-types";

const firstRow = [
  "REACT",
  "JAVASCRIPT",
  "VITE",
  "FIREBASE",
  "HTML",
  "CSS",
  "REST API",
];

const secondRow = [
  "WEB DEVELOPMENT",
  "N8N",
  "AI AUTOMATION",
  "OPENAI",
  "GEMINI",
  "PYTHON",
  "WEBHOOKS",
];

const RibbonContent = ({ items }) => {
  const content = [
    ...items,
    ...items,
    ...items,
  ];

  return (
    <>
      {content.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="tech-ribbon-item"
        >
          <span>{item}</span>

          <span className="tech-ribbon-separator">
            ◆
          </span>
        </span>
      ))}
    </>
  );
};

RibbonContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
};

export const TechRibbons = () => {
  return (
    <section
      className="tech-ribbons"
      aria-hidden="true"
    >
      <div className="tech-ribbon tech-ribbon-primary">
        <div className="tech-ribbon-track tech-ribbon-track-left">
          <RibbonContent items={firstRow} />
        </div>
      </div>

      <div className="tech-ribbon tech-ribbon-secondary">
        <div className="tech-ribbon-track tech-ribbon-track-right">
          <RibbonContent items={secondRow} />
        </div>
      </div>
    </section>
  );
};