import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import ToolCard from "../components/ToolCard";

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
      <section className="student-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                🎓 {t("student.heroBadge")}
              </span>

              <h1 className="display-5 fw-bold mb-3">
                {t("student.heroTitleLine1")}
                <br />
                {t("student.heroTitleLine2")}
              </h1>

              <p className="lead text-secondary">
                {t("student.heroDescription")}
              </p>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="student-hero-card text-center">
                <i className="bi bi-mortarboard-fill display-4 text-primary"></i>

                <h4 className="fw-bold mt-3">{t("student.journeyTitle")}</h4>

                <p className="text-secondary mb-0">
                  {t("student.journeyDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">
              {t("student.toolsLabel")}
            </span>

            <h2 className="fw-bold mt-2">{t("student.toolsTitle")}</h2>

            <p className="text-secondary">{t("student.toolsDescription")}</p>
          </div>

          <div className="row g-4">
            {tools.map(function (tool) {
              return (
                <div className="col-md-6" key={tool.to}>
                  <ToolCard {...tool} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="student-next-step py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                📚 {t("student.plannerBadge")}
              </span>

              <h2 className="fw-bold">{t("student.plannerTitle")}</h2>

              <p className="text-secondary mb-0">
                {t("student.plannerDescription")}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link
                to="/student/learning-roadmap"
                className="btn btn-primary btn-lg px-4"
              >
                {t("student.plannerButton")}
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Student;
