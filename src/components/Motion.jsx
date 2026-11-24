import { useEffect, useRef, useState } from "react";

/**
 * Top hairline scroll-progress indicator.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        className="scroll-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/**
 * IntersectionObserver scroll-reveal wrapper with directional variants and stagger delay.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as = "div",
  immediate = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -32px 0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [immediate]);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`klh-reveal klh-reveal-${variant} ${
        visible ? "is-visible" : ""
      } ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/**
 * Animated number counter that smoothly counts up when scrolled into view.
 */
export function CountUp({ end, duration = 1200, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      const target = Number(end) || 0;

      const step = (now) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(target * eased));

        if (t < 1) {
          window.requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      };

      window.requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/**
 * Interactive mouse-tracking spotlight container for flagship cards.
 */
export function SpotlightCard({ children, className = "", ...props }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`klh-spotlight-card ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Crisp animated SVG circular progress ring.
 */
export function ProgressRing({
  value = 0,
  size = 96,
  strokeWidth = 8,
  color = "#2563eb",
  trackColor = "rgba(148, 163, 184, 0.2)",
  label,
}) {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className="klh-progress-ring"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      <div className="klh-progress-ring-label">
        <span>{Math.round(clamped)}%</span>
        {label && <small>{label}</small>}
      </div>
    </div>
  );
}

/**
 * Floating smooth scroll-to-top button.
 */
export function BackToTop({ label = "Back to top" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label={label}
      title={label}
      className={`klh-back-to-top ${visible ? "is-visible" : ""}`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
