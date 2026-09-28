export const StarBackground = () => {
  return (
    <div
      className="tech-background"
      aria-hidden="true"
    >
      {/* Base technical grid */}
      <div className="tech-bg-grid" />

      {/* Moving gradient mesh */}
      <div className="tech-mesh tech-mesh-one" />
      <div className="tech-mesh tech-mesh-two" />
      <div className="tech-mesh tech-mesh-three" />

      {/* Large background typography */}
      <div className="tech-bg-word tech-bg-word-one">
        AUTOMATION
      </div>

      <div className="tech-bg-word tech-bg-word-two">
        WEB
      </div>

      <div className="tech-bg-word tech-bg-word-three">
        ENGINEERING
      </div>

      {/* Decorative technical rings */}
      <div className="tech-ring tech-ring-one">
        <span />
      </div>

      <div className="tech-ring tech-ring-two">
        <span />
      </div>

      {/* Crosshair markers */}
      <div className="tech-cross tech-cross-one">
        <span />
      </div>

      <div className="tech-cross tech-cross-two">
        <span />
      </div>

      <div className="tech-cross tech-cross-three">
        <span />
      </div>

      {/* Coordinate labels */}
      <span className="tech-coordinate tech-coordinate-one">
        14.5995° N
      </span>

      <span className="tech-coordinate tech-coordinate-two">
        SYSTEM / 01
      </span>

      <span className="tech-coordinate tech-coordinate-three">
        BUILD / AUTOMATE
      </span>

      {/* Moving light sweep */}
      <div className="tech-scan" />

      {/* Edge vignette */}
      <div className="tech-vignette" />
    </div>
  );
};