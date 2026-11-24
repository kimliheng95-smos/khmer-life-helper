import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { TOOLS_CATALOG } from "../data/toolsCatalog";
import ToolCard from "../components/ToolCard";
import {
  CountUp,
  ProgressRing,
  Reveal,
  SpotlightCard,
} from "../components/Motion";

function Home() {
  const { t } = useLanguage();
  const [previewTab, setPreviewTab] = useState("student");
  const [activeCategory, setActiveCategory] = useState("all");

  const [savedGoal] = useState(() => {
    try {
      return localStorage.getItem("khmer-life-helper-goal") || "";
    } catch {
      return "";
    }
  });

  const studentTools = TOOLS_CATALOG.filter((item) => item.category === "student");
  const careerTools = TOOLS_CATALOG.filter((item) => item.category === "career");
  const lifeTools = TOOLS_CATALOG.filter((item) => item.category === "life");

  const previewConfig = {
    student: {
      color: "#2563eb",
      badgeClass: "primary",
      progress: 78,
      title: t("home.studentTitle"),
      subtitle: t("student.journeyDescription"),
      items: studentTools.slice(0, 3),
    },
    career: {
      color: "#059669",
      badgeClass: "success",
      progress: 85,
      title: t("home.careerTitle"),
      subtitle: t("career.journeyDescription"),
      items: careerTools.slice(0, 3),
    },
    life: {
      color: "#e11d48",
      badgeClass: "danger",
      progress: 92,
      title: t("home.lifeTitle"),
      subtitle: t("life.heroCardSteps"),
      items: lifeTools.slice(0, 3),
    },
  };

  const currentPreview = previewConfig[previewTab];

  const filteredTools =
    activeCategory === "all"
      ? TOOLS_CATALOG
      : TOOLS_CATALOG.filter((item) => item.category === activeCategory);

  const pillars = [
    {
      key: "student",
      to: "/student",
      icon: "bi-mortarboard",
      color: "primary",
      title: t("home.studentTitle"),
      description: t("home.studentDescription"),
      cta: t("home.exploreStudent"),
      tools: studentTools,
    },
    {
      key: "career",
      to: "/career",
      icon: "bi-briefcase",
      color: "success",
      title: t("home.careerTitle"),
      description: t("home.careerDescription"),
      cta: t("home.exploreCareer"),
      tools: careerTools,
    },
    {
      key: "life",
      to: "/life",
      icon: "bi-heart",
      color: "danger",
      title: t("home.lifeTitle"),
      description: t("home.lifeDescription"),
      cta: t("home.exploreLife"),
      tools: lifeTools,
    },
  ];

  const whyItems = [
    {
      icon: "bi-translate",
      color: "primary",
      title: t("ui.home.why.items.0.title"),
      desc: t("ui.home.why.items.0.desc"),
    },
    {
      icon: "bi-shield-check",
      color: "success",
      title: t("ui.home.why.items.1.title"),
      desc: t("ui.home.why.items.1.desc"),
    },
    {
      icon: "bi-lightning-charge",
      color: "warning",
      title: t("ui.home.why.items.2.title"),
      desc: t("ui.home.why.items.2.desc"),
    },
  ];

  const marqueeItems = [...TOOLS_CATALOG, ...TOOLS_CATALOG];

  return (
    <>
      {/* FLAGSHIP HERO */}
      <section className="klh-home-hero">
        <div className="klh-hero-grid" aria-hidden="true"></div>
        <div className="klh-orb klh-orb-1" aria-hidden="true"></div>
        <div className="klh-orb klh-orb-2" aria-hidden="true"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="klh-anim-fade-up">
                <span className="klh-pill-badge klh-pill-primary mb-3">
                  <span className="klh-live-dot" aria-hidden="true"></span>
                  <span>🇰🇭 {t("home.badge")}</span>
                  <span className="opacity-50">•</span>
                  <span>{t("ui.home.liveTag")}</span>
                </span>
              </div>

              <h1 className="klh-hero-title mb-3 klh-anim-fade-up klh-delay-1">
                <span className="klh-gradient-text">{t("home.heroTitle")}</span>
              </h1>

              <p className="lead text-secondary mb-4 klh-anim-fade-up klh-delay-2">
                {t("home.heroDescription")}
              </p>

              <div className="d-flex gap-3 flex-wrap mb-4 klh-anim-fade-up klh-delay-2">
                <Link
                  to="/next-step"
                  className="btn btn-primary btn-lg px-4 py-3 klh-arrow-hover"
                >
                  <i className="bi bi-compass me-2"></i>
                  <span>{t("home.startJourney")}</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a
                  href="#explore"
                  className="btn btn-outline-dark btn-lg px-4 py-3 bg-white"
                >
                  <i className="bi bi-grid me-2"></i>
                  {t("home.exploreTools")}
                </a>
              </div>

              {/* Trust / Live Stats Strip */}
              <div className="klh-hero-stats klh-anim-fade-up klh-delay-3">
                <div className="klh-stat-pill">
                  <strong>
                    <CountUp end={12} suffix="+" />
                  </strong>
                  <span>{t("ui.home.stats.tools")}</span>
                </div>

                <div className="klh-stat-pill">
                  <strong>
                    <CountUp end={4} />
                  </strong>
                  <span>{t("ui.home.stats.roadmaps")}</span>
                </div>

                <div className="klh-stat-pill">
                  <strong>
                    <CountUp end={100} suffix="%" />
                  </strong>
                  <span>{t("ui.home.stats.free")}</span>
                </div>
              </div>
            </div>

            {/* Interactive Live Platform Stage */}
            <div className="col-lg-6 klh-anim-fade-up klh-delay-2">
              <div className="klh-hero-stage">
                {/* Floating Chip 1 */}
                <div className="klh-float-chip klh-float-chip-1">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-3 bg-success-subtle text-success"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-file-earmark-check-fill"></i>
                  </span>
                  <div>
                    <div className="fw-bold text-dark">
                      {t("ui.home.preview.chip1Title")}
                    </div>
                    <small className="text-secondary">
                      {t("ui.home.preview.chip1Sub")}
                    </small>
                  </div>
                </div>

                {/* Floating Chip 2 */}
                <div className="klh-float-chip klh-float-chip-2">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-subtle text-primary"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-cloud-check-fill"></i>
                  </span>
                  <div>
                    <div className="fw-bold text-dark">
                      {t("ui.home.preview.chip2Title")}
                    </div>
                    <small className="text-secondary">
                      {t("ui.home.preview.chip2Sub")}
                    </small>
                  </div>
                </div>

                {/* Interactive App Window */}
                <div className="klh-mockup-window">
                  <div className="klh-mockup-topbar">
                    <div className="d-flex align-items-center gap-2">
                      <div className="klh-window-dots" aria-hidden="true">
                        <span style={{ background: "#f87171" }}></span>
                        <span style={{ background: "#fbbf24" }}></span>
                        <span style={{ background: "#34d399" }}></span>
                      </div>
                      <small className="fw-bold text-secondary ms-1">
                        {t("ui.home.preview.windowTitle")}
                      </small>
                    </div>

                    <div className="klh-mockup-tabs" role="tablist">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={previewTab === "student"}
                        className={`klh-mockup-tab ${
                          previewTab === "student" ? "is-active" : ""
                        }`}
                        onClick={() => setPreviewTab("student")}
                      >
                        <i className="bi bi-mortarboard"></i>
                        <span>{t("navbar.student")}</span>
                      </button>

                      <button
                        type="button"
                        role="tab"
                        aria-selected={previewTab === "career"}
                        className={`klh-mockup-tab ${
                          previewTab === "career" ? "is-active" : ""
                        }`}
                        onClick={() => setPreviewTab("career")}
                      >
                        <i className="bi bi-briefcase"></i>
                        <span>{t("navbar.career")}</span>
                      </button>

                      <button
                        type="button"
                        role="tab"
                        aria-selected={previewTab === "life"}
                        className={`klh-mockup-tab ${
                          previewTab === "life" ? "is-active" : ""
                        }`}
                        onClick={() => setPreviewTab("life")}
                      >
                        <i className="bi bi-heart"></i>
                        <span>{t("navbar.life")}</span>
                      </button>
                    </div>
                  </div>

                  <div key={previewTab} className="klh-mockup-panel">
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-4 p-3 rounded-4 bg-light border">
                      <div>
                        <span
                          className={`badge bg-${currentPreview.badgeClass}-subtle text-${currentPreview.badgeClass} mb-2`}
                        >
                          {t("ui.home.preview.readyBadge")}
                        </span>
                        <h4 className="fw-bold mb-1">{currentPreview.title}</h4>
                        <small className="text-secondary d-block">
                          {currentPreview.subtitle}
                        </small>
                      </div>

                      <ProgressRing
                        value={currentPreview.progress}
                        size={82}
                        strokeWidth={7}
                        color={currentPreview.color}
                        label={t("ui.home.preview.progressLabel")}
                      />
                    </div>

                    <div className="d-grid gap-2 mb-3">
                      {currentPreview.items.map((tool) => (
                        <Link
                          key={tool.id}
                          to={tool.to}
                          className="klh-mockup-mini-row"
                        >
                          <span
                            className={`d-inline-flex align-items-center justify-content-center rounded-3 bg-${tool.color}-subtle text-${tool.color}`}
                            style={{
                              width: "40px",
                              height: "40px",
                              flexShrink: 0,
                              fontSize: "1.1rem",
                            }}
                          >
                            <i className={`bi ${tool.icon}`}></i>
                          </span>

                          <div className="flex-grow-1 min-width-0">
                            <div className="fw-bold small text-dark">
                              {t(tool.titleKey)}
                            </div>
                            <small className="text-secondary d-block text-truncate">
                              {t(tool.descriptionKey)}
                            </small>
                          </div>

                          <i className="bi bi-chevron-right text-secondary"></i>
                        </Link>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                      <small className="text-secondary">
                        <i className="bi bi-compass text-primary me-1"></i>
                        {t("home.journeyStart")}
                      </small>

                      <Link
                        to="/next-step"
                        className="btn btn-primary btn-sm px-3 klh-arrow-hover"
                      >
                        {t("home.getStarted")}
                        <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TOOL RIBBON */}
      <div className="klh-marquee-wrap" aria-label={t("ui.home.allToolsTitle")}>
        <div className="klh-marquee-track">
          {marqueeItems.map((tool, index) => (
            <Link
              key={`${tool.id}-${index}`}
              to={tool.to}
              className="klh-marquee-pill"
            >
              <i className={`bi ${tool.icon} text-${tool.color}`}></i>
              <span>{t(tool.titleKey)}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CORE PILLARS (3 BENTO HUBS) */}
      <section className="py-5 bg-light" id="explore">
        <div className="container py-lg-4">
          <Reveal className="text-center mb-5">
            <span className="klh-pill-badge klh-pill-primary mb-2">
              {t("home.exploreLabel")}
            </span>
            <h2 className="display-6 fw-bold mt-2">{t("home.exploreTitle")}</h2>
            <p className="text-secondary lead mb-0">
              {t("home.exploreDescription")}
            </p>
          </Reveal>

          <div className="row g-4">
            {pillars.map((pillar, index) => (
              <div className="col-lg-4" key={pillar.key}>
                <Reveal delay={index * 100} className="h-100">
                  <SpotlightCard className="card category-card h-100">
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div
                          className={`category-icon bg-${pillar.color}-subtle text-${pillar.color}`}
                        >
                          <i className={`bi ${pillar.icon}`}></i>
                        </div>

                        <span
                          className={`badge bg-${pillar.color}-subtle text-${pillar.color} rounded-pill px-3 py-2`}
                        >
                          {pillar.tools.length} {t("ui.nav.tools")}
                        </span>
                      </div>

                      <h3 className="fw-bold mb-2">{pillar.title}</h3>
                      <p className="text-secondary mb-4">{pillar.description}</p>

                      <div className="d-grid gap-2 mb-4 flex-grow-1">
                        {pillar.tools.map((subTool) => (
                          <Link
                            key={subTool.id}
                            to={subTool.to}
                            className="klh-pillar-link"
                          >
                            <span className="d-flex align-items-center gap-2">
                              <i
                                className={`bi ${subTool.icon} text-${subTool.color}`}
                              ></i>
                              <span>{t(subTool.titleKey)}</span>
                            </span>
                            <i className="bi bi-arrow-right-short fs-5 text-secondary"></i>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to={pillar.to}
                        className={`btn btn-${pillar.color} w-100 klh-arrow-hover`}
                      >
                        <span>{pillar.cta}</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL-IN-ONE INTERACTIVE TOOLS DIRECTORY */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-lg-4">
          <Reveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
            <div>
              <span className="klh-pill-badge klh-pill-primary mb-2">
                {t("ui.home.allToolsLabel")}
              </span>
              <h2 className="display-6 fw-bold mt-2 mb-2">
                {t("ui.home.allToolsTitle")}
              </h2>
              <p className="text-secondary mb-0" style={{ maxWidth: "600px" }}>
                {t("ui.home.allToolsDesc")}
              </p>
            </div>

            <div className="klh-filter-pills" role="tablist">
              {[
                { id: "all", label: t("common.all") },
                { id: "student", label: t("navbar.student") },
                { id: "career", label: t("navbar.career") },
                { id: "life", label: t("navbar.life") },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab.id}
                  className={`klh-filter-pill ${
                    activeCategory === tab.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveCategory(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="row g-4">
            {filteredTools.map((tool, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={tool.id}>
                <Reveal delay={(index % 4) * 70} className="h-100" immediate>
                  <ToolCard
                    icon={tool.icon}
                    title={t(tool.titleKey)}
                    description={t(tool.descriptionKey)}
                    button={t(tool.buttonKey)}
                    color={tool.color}
                    to={tool.to}
                    badge={t(`navbar.${tool.category}`)}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP ENGINE TIMELINE */}
      <section className="next-step-section py-5">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal variant="left">
                <span className="klh-pill-badge klh-pill-primary mb-3">
                  🧭 {t("home.nextStepLabel")}
                </span>

                <h2 className="display-6 fw-bold mb-3">
                  {t("home.notSureTitle")}
                </h2>

                <p className="text-secondary lead mb-4">
                  {t("home.notSureDescription")}
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/next-step"
                    className="btn btn-primary btn-lg px-4 klh-arrow-hover"
                  >
                    <i className="bi bi-compass me-2"></i>
                    <span>{t("home.findNextStep")}</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  {savedGoal && (
                    <Link
                      to="/dashboard"
                      className="btn btn-outline-primary btn-lg px-4"
                    >
                      <i className="bi bi-speedometer2 me-2"></i>
                      {t("ui.home.openDashboard")}
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6">
              <Reveal variant="right">
                <div className="next-step-card">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div>
                      <h5 className="fw-bold mb-1">{t("home.step1Title")}</h5>
                      <p className="text-secondary mb-0">
                        {t("home.step1Description")}
                      </p>
                    </div>
                  </div>

                  <div className="step-line"></div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div>
                      <h5 className="fw-bold mb-1">{t("home.step2Title")}</h5>
                      <p className="text-secondary mb-0">
                        {t("home.step2Description")}
                      </p>
                    </div>
                  </div>

                  <div className="step-line"></div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div>
                      <h5 className="fw-bold mb-1">{t("home.step3Title")}</h5>
                      <p className="text-secondary mb-0">
                        {t("home.step3Description")}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KHMER LIFE HELPER */}
      <section className="py-5 bg-light border-top">
        <div className="container py-lg-3">
          <Reveal className="text-center mb-5">
            <span className="klh-pill-badge klh-pill-success mb-2">
              {t("ui.home.why.badge")}
            </span>
            <h2 className="display-6 fw-bold mt-2 mb-0">
              {t("ui.home.why.title")}
            </h2>
          </Reveal>

          <div className="row g-4">
            {whyItems.map((item, index) => (
              <div className="col-md-4" key={item.icon}>
                <Reveal delay={index * 90} className="h-100">
                  <div className="card klh-bento-card h-100">
                    <div className="card-body p-4">
                      <div
                        className={`tool-card-icon bg-${item.color}-subtle text-${item.color} mb-3`}
                      >
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <h4 className="fw-bold mb-2">{item.title}</h4>
                      <p className="text-secondary mb-0">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK GLASS FINAL CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <Reveal variant="zoom">
            <div className="klh-cta-banner text-center">
              <div className="position-relative" style={{ zIndex: 1 }}>
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-4 mb-3"
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontSize: "2rem",
                  }}
                >
                  <i className="bi bi-compass klh-gradient-text-warm"></i>
                </span>

                <h2 className="display-5 fw-bold text-white mt-2 mb-3">
                  {t("home.readyTitle")}
                </h2>

                <p
                  className="lead text-white-50 mx-auto mb-4"
                  style={{ maxWidth: "560px" }}
                >
                  {t("home.readyDescription")}
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link
                    to="/next-step"
                    className="btn btn-light btn-lg px-4 py-3 fw-bold klh-arrow-hover"
                  >
                    <span>{t("home.getStarted")}</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  <Link
                    to="/career/cv-builder"
                    className="btn btn-outline-light btn-lg px-4 py-3"
                  >
                    <i className="bi bi-file-earmark-person me-2"></i>
                    {t("career.tools.cv.button")}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
