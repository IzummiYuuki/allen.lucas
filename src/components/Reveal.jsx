import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  className = "",
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${
        isVisible ? "reveal-visible" : ""
      } ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  direction: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
    "scale",
  ]),
  distance: PropTypes.number,
  className: PropTypes.string,
};