import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import ToolCard from "../components/ToolCard";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Motion";

function Student() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: "bi-mortarboard",
      title: t("student.tools.scholarship.title"),
      description: t("student.tools.scholarship.description"),
      button: t("student.tools.scholarship.button"),
      color: "primary",
      to: "/student/scholarships",
    },
    {
      icon: "bi-compass",
      title: t("student.tools.major.title"),
      description: t("student.tools.major.description"),
      button: t("student.tools.major.button"),
      color: "success",
      to: "/student/majors",
    },
    {
      icon: "bi-book",
      title: t("student.tools.study.title"),
      description: t("student.tools.study.description"),
      button: t("student.tools.study.button"),
      color: "warning",
      to: "/student/study-guide",
    },
    {
      icon: "bi-signpost-split",
      title: t("student.tools.roadmap.title"),
      description: t("student.tools.roadmap.description"),
      button: t("student.tools.roadmap.button"),
      color: "danger",
      to: "/student/learning-roadmap",
    },
  ];

  return (
    <>
      <PageHero
        badge={`🎓 ${t("student.heroBadge")}`}
        title={
          <>
            {t("student.heroTitleLine1")}
            <br />
            <span className="klh-gradient-text">
              {t("student.heroTitleLine2")}
            </span>
          </>
        }
        subtitle={t("student.heroDescription")}
        color="primary"
        breadcrumbs={[{ label: t("navbar.student") }]}
        aside={
          <div className="student-hero-card text-center">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 bg-primary-subtle text-primary mb-3"
              style={{ width: "74px", height: "74px", fontSize: "2.2rem" }}
            >
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <h4 className="fw-bold">{t("student.journeyTitle")}</h4>
            <p className="text-secondary mb-3">
              {t("student.journeyDescription")}
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                4 {t("ui.nav.tools")}
              </span>
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                100% {t("ui.home.stats.free")}
              </span>
            </div>
          </div>
        }
      />

      <section className="py-5 bg-light">
        <div className="container py-lg-3">
          <Reveal className="text-center mb-5">
            <span className="klh-pill-badge klh-pill-primary mb-2">
              {t("student.toolsLabel")}
            </span>
            <h2 className="display-6 fw-bold mt-2">{t("student.toolsTitle")}</h2>
            <p className="text-secondary mb-0">
              {t("student.toolsDescription")}
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
                  <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                    📚 {t("student.plannerBadge")}
                  </span>
                  <h2 className="fw-bold text-white mb-2">
                    {t("student.plannerTitle")}
                  </h2>
                  <p className="text-white-50 mb-0">
                    {t("student.plannerDescription")}
                  </p>
                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <Link
                    to="/student/learning-roadmap"
                    className="btn btn-light btn-lg px-4 fw-bold klh-arrow-hover"
                  >
                    <span>{t("student.plannerButton")}</span>
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

export default Student;
