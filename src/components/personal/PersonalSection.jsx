import PropTypes from "prop-types";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Gauge,
  Music,
  Sparkles,
  Wrench,
} from "lucide-react";



import { useState } from "react";
import { Reveal } from "../Reveal";

const hobbies = [
  {
    title: "Motorcycle Builds",
    subtitle: "Garage / Aerox",
    description:
      "Motorcycles, modifications, maintenance, tuning, troubleshooting, and trying different setups just because I can.",
    image: "/personal/hobby1.png",
    icon: Gauge,
  },
  {
    title: "Electronics & Tech",
    subtitle: "ESP32 / Arduino",
    description:
      "Microcontrollers, sensors, electronics experiments, small tools, and ideas that usually start with 'what if I build this?'",
    image: "/personal/hobby2.png",
    icon: Cpu,
  },
  {
    title: "Photo & Video",
    subtitle: "GoPro / Cameras",
    description:
      "Capturing rides, builds, projects, random moments, and experimenting with camera settings and editing.",
    image: "/personal/hobby3.png",
    icon: Camera,
  },
  {
    title: "Things I Build",
    subtitle: "DIY / Experiments",
    description:
      "Repairing, modifying, automating, and building things for no other reason than wanting to understand how they work.",
    image: "/personal/hobby4.png",
    icon: Wrench,
  },
];

const lifeCards = [
  {
    category: "Garage",
    title: "Motorcycles",
    image: "/personal/life1.png",
  },
  {
    category: "Tech",
    title: "Electronics",
    image: "/personal/life2.png",
  },
  {
    category: "Family",
    title: "My Dogs",
    image: "/personal/life3.png",
  },
  {
    category: "Active",
    title: "Sports",
    image: "/personal/life4.png",
  },
  {
    category: "Downtime",
    title: "Games & Media",
    image: "/personal/life5.png",
  },
];

export const PersonalSection = () => {
  const [lifeOffset, setLifeOffset] =
    useState(0);

  const [isSongPlaying, setIsSongPlaying] =
    useState(false);

  const moveLifeCards = (direction) => {
    setLifeOffset((current) => {
      const next =
        current + direction;

      return Math.max(
        0,
        Math.min(
          next,
          lifeCards.length - 3
        )
      );
    });
  };

  return (
    <div className="personal-page">
      {/* ===================================
          INTRO
      =================================== */}

      <section
        id="personal-home"
        className="personal-intro-section"
      >
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="personal-intro text-center">
              <p className="personal-eyebrow">
                PERSONAL / 02
              </p>

              <h1 className="personal-main-title">
                Allen&apos;s Hobbies
              </h1>

              <p className="personal-main-subtitle">
                I like to stay active. Two hobbies are added almost every year.
              </p>
            </div>
          </Reveal>

          {/* HOBBY GRID */}

          <div className="personal-hobby-grid">
            {hobbies.map(
              (hobby, index) => {
                const Icon = hobby.icon;

                return (
                  <Reveal
                    key={hobby.title}
                    delay={index * 80}
                    direction={
                      index % 2 === 0
                        ? "left"
                        : "right"
                    }
                    distance={30}
                  >
                    <article className="personal-hobby-card group">
                      <div className="personal-hobby-copy">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="personal-hobby-subtitle">
                              {hobby.subtitle}
                            </span>

                            <h2 className="personal-hobby-title">
                              {hobby.title}
                            </h2>
                          </div>

                          <div className="personal-hobby-icon">
                            <Icon size={19} />
                          </div>
                        </div>

                        <p className="personal-hobby-description">
                          {hobby.description}
                        </p>
                      </div>

                      <PersonalImage
                        src={hobby.image}
                        alt={hobby.title}
                        className="personal-hobby-image"
                        label={`hobby${index + 1}.png`}
                      />
                    </article>
                  </Reveal>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ===================================
          COMPONENTS OF LIFE
      =================================== */}

      <section
        id="personal-life"
        className="personal-life-section"
      >
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <Reveal
            direction="left"
            distance={35}
          >
            <div className="mb-8 flex items-end justify-between gap-6">
              <div className="text-left">
                <p className="personal-eyebrow">
                  A LITTLE MORE
                </p>

                <h2 className="personal-section-title">
                  Components of Allen&apos;s Life
                </h2>
              </div>

              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  className="personal-slider-button"
                  onClick={() =>
                    moveLifeCards(-1)
                  }
                  aria-label="Previous cards"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  className="personal-slider-button"
                  onClick={() =>
                    moveLifeCards(1)
                  }
                  aria-label="Next cards"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="personal-life-window">
            <div
              className="personal-life-track"
              style={{
                transform: `translateX(calc(${lifeOffset} * -220px))`,
              }}
            >
              {lifeCards.map(
                (card, index) => (
                  <Reveal
                    key={card.title}
                    delay={index * 60}
                    direction="scale"
                    distance={20}
                  >
                    <article className="personal-life-card group">
                      <PersonalImage
                        src={card.image}
                        alt={card.title}
                        className="personal-life-image"
                        label={`life${index + 1}.png`}
                      />

                      <div className="personal-life-overlay" />

                      <div className="personal-life-copy">
                        <span>
                          {card.category}
                        </span>

                        <h3>
                          {card.title}
                        </h3>
                      </div>
                    </article>
                  </Reveal>
                )
              )}
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2 sm:hidden">
            <button
              type="button"
              className="personal-slider-button"
              onClick={() =>
                moveLifeCards(-1)
              }
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              className="personal-slider-button"
              onClick={() =>
                moveLifeCards(1)
              }
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================
    PERSONAL DASHBOARD
=================================== */}

      <section className="personal-dashboard-section">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <Reveal direction="left">
            <div className="mb-10 text-left">
              <p className="personal-eyebrow">
                RANDOM STATS / CURRENT LIFE
              </p>

              <h2 className="personal-section-title">
                My little dashboard.
              </h2>
            </div>
          </Reveal>

          <div className="personal-bento">
            {/* ===============================
          LEFT COLUMN
      =============================== */}

            <div className="personal-bento-column">
              <Reveal direction="left">
                <article className="personal-routine-card">
                  <div className="personal-card-heading">
                    <span>
                      Daily routine
                    </span>

                    <span className="personal-live-dot" />
                  </div>

                  <div className="personal-routine-big">
                    <RoutineRow
                      time="08:00 AM"
                      activity="Coffee / Start"
                    />

                    <RoutineRow
                      time="10:00 AM"
                      activity="Build / Work"
                    />

                    <RoutineRow
                      time="06:00 PM"
                      activity="Garage"
                    />

                    <RoutineRow
                      time="09:00 PM"
                      activity="Personal Projects"
                    />

                    <RoutineRow
                      time="12:00 AM"
                      activity="Probably still awake"
                    />
                  </div>
                </article>
              </Reveal>

              {/* GARAGE WALL */}

              <Reveal
                direction="up"
                delay={100}
              >
                <article className="personal-wall-card">
                  <div className="personal-wall-title">
                    ★ allen&apos;s garage wall ★
                  </div>

                  <div className="personal-wall-grid">
                    {[
                      "wall1.png",
                      "wall2.png",
                      "wall3.png",
                      "wall4.png",
                      "wall5.png",
                      "wall6.png",
                    ].map((image) => (
                      <PersonalImage
                        key={image}
                        src={`/personal/${image}`}
                        alt={image}
                        className="personal-wall-image"
                        label={image}
                      />
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>

            {/* ===============================
          CENTER COLUMN
      =============================== */}

            <div className="personal-bento-column personal-bento-center">
              {/* PERSONAL MOTTO */}

              <Reveal direction="up">
                <article className="personal-motto-card">
                  <div className="personal-motto-top">
                    <div className="personal-motto-label">
                      <span className="personal-motto-dot" />

                      PERSONAL NOTE
                    </div>

                    <span className="personal-motto-index">
                      02 / 26
                    </span>
                  </div>

                  <div className="personal-motto-mark">
                    “
                  </div>

                  <blockquote className="personal-motto-quote">
                    Build a life you&apos;re
                    <br />
                    excited to wake up to.
                  </blockquote>

                  <div className="personal-motto-bottom">
                    <p>
                      Do the work.
                      <br />
                      Enjoy the ride.
                    </p>

                    <div className="personal-motto-signature">
                      <span />

                      ALLEN
                    </div>
                  </div>

                  <div className="personal-motto-orbit">
                    <span />
                  </div>
                </article>
              </Reveal>

              {/* MY WORLD */}

              <Reveal
                direction="scale"
                delay={120}
              >
                <article className="personal-world-card">
                  <div className="personal-world-header">
                    <div>
                      <p>PERSONAL SYSTEM</p>

                      <h3>My world.</h3>
                    </div>

                    <span className="personal-world-status">
                      ● ONLINE
                    </span>
                  </div>

                  <div className="personal-world-stage">
                    {/* ORBITS */}

                    <div className="personal-world-orbit personal-world-orbit-one" />

                    <div className="personal-world-orbit personal-world-orbit-two" />

                    {/* CONNECTIONS */}

                    <svg
                      className="personal-world-lines"
                      viewBox="0 0 500 320"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <line
                        x1="250"
                        y1="160"
                        x2="250"
                        y2="48"
                      />

                      <line
                        x1="250"
                        y1="160"
                        x2="70"
                        y2="160"
                      />

                      <line
                        x1="250"
                        y1="160"
                        x2="430"
                        y2="160"
                      />

                      <line
                        x1="250"
                        y1="160"
                        x2="250"
                        y2="275"
                      />
                    </svg>

                    {/* CENTER */}

                    <div className="personal-world-center">
                      <div className="personal-world-center-ring">
                        <span>AL</span>
                      </div>

                      <p>ALLEN</p>
                    </div>

                    {/* TECH */}

                    <div className="personal-world-node personal-world-tech">
                      <div className="personal-world-node-icon">
                        <Cpu size={20} />
                      </div>

                      <div>
                        <strong>TECH</strong>
                        <span>ESP32 / WEB</span>
                      </div>
                    </div>

                    {/* RIDE */}

                    <div className="personal-world-node personal-world-ride">
                      <div className="personal-world-node-icon">
                        <Gauge size={20} />
                      </div>

                      <div>
                        <strong>RIDE</strong>
                        <span>AEROX / GARAGE</span>
                      </div>
                    </div>

                    {/* BUILD */}

                    <div className="personal-world-node personal-world-build">
                      <div className="personal-world-node-icon">
                        <Wrench size={20} />
                      </div>

                      <div>
                        <strong>BUILD</strong>
                        <span>DIY / MODIFY</span>
                      </div>
                    </div>

                    {/* CAPTURE */}

                    <div className="personal-world-node personal-world-capture">
                      <div className="personal-world-node-icon">
                        <Camera size={20} />
                      </div>

                      <div>
                        <strong>CAPTURE</strong>
                        <span>GOPRO / PHOTO</span>
                      </div>
                    </div>

                    {/* MOVING SIGNAL */}

                    <span className="personal-world-signal personal-world-signal-one" />
                    <span className="personal-world-signal personal-world-signal-two" />
                  </div>

                  <div className="personal-world-footer">
                    <span>RIDE</span>
                    <i>◆</i>
                    <span>BUILD</span>
                    <i>◆</i>
                    <span>LEARN</span>
                    <i>◆</i>
                    <span>REPEAT</span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* ===============================
          RIGHT COLUMN
      =============================== */}

            <div className="personal-bento-column">
              {/* FAVORITE SONG */}

              <Reveal direction="right">
                <article className="personal-player-final">
                  <div className="personal-player-final-top">
                    <div>
                      <span className="personal-player-final-kicker">
                        CURRENT FAVORITE
                      </span>

                      <p className="personal-player-final-status">
                        <span />
                        ON REPEAT
                      </p>
                    </div>

                    <span className="personal-player-final-index">
                      01 / MUSIC
                    </span>
                  </div>

                  <div className="personal-player-final-song">
                    <div className="personal-player-final-art">
                      <Music size={31} />

                      <span className="personal-player-final-disc" />
                    </div>

                    <div>
                      <p className="personal-player-final-small">
                        LATELY PLAYING
                      </p>

                      <h3>
                        My current favorite
                      </h3>

                      <p>
                        On repeat lately
                      </p>
                    </div>
                  </div>

                  {isSongPlaying && (
                    <div className="personal-youtube-embed">
                      <iframe
                        src="https://www.youtube.com/embed/1UbUZo3-dC4?autoplay=1&rel=0"
                        title="Allen's current favorite song"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  <div className="personal-player-final-wave">
                    {[
                      35, 65, 42, 88, 55,
                      75, 38, 95, 62, 45,
                      82, 50, 72, 40, 60,
                    ].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 0.07}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="personal-player-final-progress">
                    <span />
                  </div>

                  <div className="personal-player-final-times">
                    <span>ON REPEAT</span>
                    <span>∞</span>
                  </div>

                  <div className="personal-player-final-controls">
                    <span className="personal-player-side-control">
                      ◀
                    </span>

                    <button
                      type="button"
                      className="personal-player-final-play"
                      onClick={() =>
                        setIsSongPlaying((current) => !current)
                      }
                      aria-label={
                        isSongPlaying
                          ? "Hide music player"
                          : "Play favorite song"
                      }
                    >
                      {isSongPlaying ? "■" : "▶"}
                    </button>

                    <span className="personal-player-side-control">
                      ▶
                    </span>
                  </div>

                

                  <div className="personal-player-final-orbit">
                    <span />
                  </div>
                </article>
              </Reveal>

              {/* STATS */}

              <Reveal
                direction="right"
                delay={100}
              >
                <div className="personal-stat-stack">
                  <StatRow
                    label="Motorcycle builds"
                    sublabel="GARAGE / AEROX"
                    value={1}
                    suffix="+"
                    type="blue"
                    icon={Gauge}
                    delay="0s"
                  />

                  <StatRow
                    label="Web projects"
                    sublabel="DESIGN / DEVELOPMENT"
                    value={7}
                    suffix="+"
                    type="purple"
                    icon={Cpu}
                    delay="0.08s"
                  />

                  <StatRow
                    label="AI workflows"
                    sublabel="N8N / AUTOMATION"
                    value={5}
                    suffix="+"
                    type="red"
                    icon={Sparkles}
                    delay="0.16s"
                  />

                  <StatRow
                    label="ESP32 ideas"
                    sublabel="ELECTRONICS / IOT"
                    value="∞"
                    suffix=""
                    type="green"
                    icon={Cpu}
                    delay="0.24s"
                  />

                  <StatRow
                    label="Random ideas"
                    sublabel="CURRENTLY LOADING..."
                    value="∞"
                    suffix=""
                    type="yellow"
                    icon={Wrench}
                    delay="0.32s"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          CLOSING
      =================================== */}

      <section className="personal-closing-section">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <Reveal direction="scale">
            <div className="personal-closing-card">
              <p className="personal-eyebrow">
                THAT&apos;S ALL FOR NOW
              </p>

              <h2>
                Thanks for visiting
                <br />
                my personal space.
              </h2>

              <p>
                Professional on one side.
                Random projects, motorcycles,
                electronics and everything else
                on this one.
              </p>

              <a
                href="/"
                className="personal-back-button"
              >
                Professional Portfolio
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

const PersonalImage = ({
  src,
  alt,
  className,
  label,
}) => {
  const [failed, setFailed] =
    useState(false);

  if (failed) {
    return (
      <div
        className={`${className} personal-image-placeholder`}
      >
        <Camera size={24} />

        <span>
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

const RoutineRow = ({
  time,
  activity,
}) => {
  return (
    <div className="personal-routine-row">
      <span>{time}</span>

      <p>{activity}</p>
    </div>
  );
};

const ProgressRow = ({
  label,
  progress,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span>{label}</span>

        <span className="text-muted-foreground">
          {progress}%
        </span>
      </div>

      <div className="personal-progress-track">
        <span
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

const MoodButton = ({
  icon: Icon,
  label,
}) => {
  return (
    <div className="personal-mood-button">
      <Icon size={15} />

      <span>{label}</span>
    </div>
  );
};



const StatRow = ({
  label,
  sublabel,
  value,
  suffix,
  type,
  icon: Icon,
  delay,
}) => {
  return (
    <div
      className={`personal-stat-row personal-stat-${type}`}
      style={{
        "--stat-delay": delay,
      }}
    >
      <div className="personal-stat-main">
        <div className="personal-stat-icon">
          <Icon size={18} />
        </div>

        <div className="personal-stat-copy">
          <strong>{label}</strong>

          <span>{sublabel}</span>
        </div>

        <div className="personal-stat-decoration">
           {"///"}
        </div>
      </div>

      <div className="personal-stat-value">
        <span className="personal-stat-value-text">
          {suffix}
          {value}
        </span>

        <span className="personal-stat-pulse" />
      </div>
    </div>
  );
};

PersonalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};



StatRow.propTypes = {
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  suffix: PropTypes.string.isRequired,

  type: PropTypes.oneOf([
    "blue",
    "purple",
    "red",
    "green",
    "yellow",
  ]).isRequired,

  icon: PropTypes.elementType.isRequired,
  delay: PropTypes.string.isRequired,
};

RoutineRow.propTypes = {
  time: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
};

ProgressRow.propTypes = {
  label: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

MoodButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};