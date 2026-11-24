import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Motion";
import { useLanguage } from "../context/useLanguage";

function Career() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: "bi-file-earmark-person",
      title: t("career.tools.cv.title"),
      description: t("career.tools.cv.description"),
      button: t("career.tools.cv.button"),
      color: "primary",
      to: "/career/cv-builder",
    },
    {
      icon: "bi-chat-dots",
      title: t("career.tools.interview.title"),
      description: t("career.tools.interview.description"),
      button: t("career.tools.interview.button"),
      color: "success",
      to: "/career/interview",
    },
    {
      icon: "bi-briefcase",
      title: t("career.tools.internship.title"),
      description: t("career.tools.internship.description"),
      button: t("career.tools.internship.button"),
      color: "warning",
      to: "/career/internships",
    },
    {
      icon: "bi-graph-up-arrow",
      title: t("career.tools.roadmap.title"),
      description: t("career.tools.roadmap.description"),
      button: t("career.tools.roadmap.button"),
      color: "danger",
      to: "/career/roadmap",
    },
  ];

  return (
    <>
      <PageHero
        badge={`💼 ${t("career.heroBadge")}`}
        title={
          <>
            {t("career.heroTitleLine1")}
            <br />
            <span className="text-success">{t("career.heroTitleLine2")}</span>
          </>
        }
        subtitle={t("career.heroDescription")}
        color="success"
        breadcrumbs={[{ label: t("navbar.career") }]}
        aside={
          <div className="career-hero-card text-center">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 bg-success-subtle text-success mb-3"
              style={{ width: "74px", height: "74px", fontSize: "2.2rem" }}
            >
              <i className="bi bi-briefcase-fill"></i>
            </div>
            <h4 className="fw-bold">{t("career.journeyTitle")}</h4>
            <p className="text-secondary mb-3">
              {t("career.journeyDescription")}
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                4 {t("ui.nav.tools")}
              </span>
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                {t("ui.home.preview.chip1Title")}
              </span>
            </div>
          </div>
        }
      />

      <section className="py-5 bg-light">
        <div className="container py-lg-3">
          <Reveal className="text-center mb-5">
            <span className="klh-pill-badge klh-pill-success mb-2">
              {t("career.toolsLabel")}
            </span>
            <h2 className="display-6 fw-bold mt-2">{t("career.toolsTitle")}</h2>
            <p className="text-secondary mb-0">
              {t("career.toolsDescription")}
            </p>
          </Reveal>

          <div className="row g-4">
            {tools.map(function (tool, index) {
              return (
                <div className="col-md-6" key={tool.to}>
                  <Reveal delay={index * 90} className="h-100">
                    <ToolCard {...tool} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <Reveal variant="zoom">
            <div className="klh-cta-banner">
              <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                <div className="col-lg-8">
                  <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                    🧭 {t("career.plannerBadge")}
                  </span>
                  <h2 className="fw-bold text-white mb-2">
                    {t("career.plannerTitle")}
                  </h2>
                  <p className="text-white-50 mb-0">
                    {t("career.plannerDescription")}
                  </p>
                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <Link
                    to="/next-step"
                    className="btn btn-light btn-lg px-4 fw-bold klh-arrow-hover"
                  >
                    <span>{t("career.plannerButton")}</span>
                    <i className="bi bi-arrow-right ms-2"></i>
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

export default Career;
