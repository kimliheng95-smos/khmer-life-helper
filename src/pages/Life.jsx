import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import { useLanguage } from "../context/useLanguage";

function Life() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: "bi-wallet2",
      title: t("life.tools.budget.title"),
      description: t("life.tools.budget.description"),
      button: t("life.tools.budget.button"),
      color: "primary",
      to: "/life/budget",
    },
    {
      icon: "bi-calendar-check",
      title: t("life.tools.planner.title"),
      description: t("life.tools.planner.description"),
      button: t("life.tools.planner.button"),
      color: "success",
      to: "/life/planner",
    },
    {
      icon: "bi-check2-square",
      title: t("life.tools.checklists.title"),
      description: t("life.tools.checklists.description"),
      button: t("life.tools.checklists.button"),
      color: "warning",
      to: "/life/checklists",
    },
    {
      icon: "bi-bullseye",
      title: t("life.tools.goal.title"),
      description: t("life.tools.goal.description"),
      button: t("life.tools.goal.button"),
      color: "danger",
      to: "/life/goals",
    },
  ];

  return (
    <>
      <section className="life-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                🌱 {t("life.heroBadge")}
              </span>

              <h1 className="display-5 fw-bold mb-3">
                {t("life.heroTitleLine1")}
                <br />
                {t("life.heroTitleLine2")}
              </h1>

              <p className="lead text-secondary">{t("life.heroDescription")}</p>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="life-hero-card text-center">
                <i className="bi bi-stars display-4 text-success"></i>

                <h4 className="fw-bold mt-3">{t("life.heroCardTitle")}</h4>

                <p className="text-secondary mb-0">{t("life.heroCardSteps")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-success fw-semibold">
              {t("life.toolsLabel")}
            </span>

            <h2 className="fw-bold mt-2">{t("life.toolsTitle")}</h2>

            <p className="text-secondary">{t("life.toolsDescription")}</p>
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

      <section className="life-next-step py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                🌱 {t("life.nextStepBadge")}
              </span>

              <h2 className="fw-bold">{t("life.nextStepTitle")}</h2>

              <p className="text-secondary mb-0">
                {t("life.nextStepDescription")}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/life/goals" className="btn btn-success btn-lg px-4">
                {t("life.nextStepButton")}
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Life;

