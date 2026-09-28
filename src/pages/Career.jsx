import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
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
      <section className="career-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                💼 {t("career.heroBadge")}
              </span>

              <h1 className="display-5 fw-bold mb-3">
                {t("career.heroTitleLine1")}
                <br />
                {t("career.heroTitleLine2")}
              </h1>

              <p className="lead text-secondary">
                {t("career.heroDescription")}
              </p>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="career-hero-card text-center">
                <i className="bi bi-briefcase-fill display-4 text-success"></i>

                <h4 className="fw-bold mt-3">{t("career.journeyTitle")}</h4>

                <p className="text-secondary mb-0">
                  {t("career.journeyDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-success fw-semibold">
              {t("career.toolsLabel")}
            </span>

            <h2 className="fw-bold mt-2">{t("career.toolsTitle")}</h2>

            <p className="text-secondary">{t("career.toolsDescription")}</p>
          </div>

          <div className="row g-4">
            {tools.map(function (tool) {
              return (
                <div className="col-md-6" key={tool.title}>
                  <ToolCard {...tool} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="career-next-step py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                🧭 {t("career.plannerBadge")}
              </span>

              <h2 className="fw-bold">{t("career.plannerTitle")}</h2>

              <p className="text-secondary mb-0">
                {t("career.plannerDescription")}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/next-step" className="btn btn-success btn-lg px-4">
                {t("career.plannerButton")}

                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;

