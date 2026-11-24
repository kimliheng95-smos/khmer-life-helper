import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Motion";
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
      <PageHero
        badge={`🌱 ${t("life.heroBadge")}`}
        title={
          <>
            {t("life.heroTitleLine1")}
            <br />
            <span className="text-danger">{t("life.heroTitleLine2")}</span>
          </>
        }
        subtitle={t("life.heroDescription")}
        color="danger"
        breadcrumbs={[{ label: t("navbar.life") }]}
        aside={
          <div className="life-hero-card text-center">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 bg-danger-subtle text-danger mb-3"
              style={{ width: "74px", height: "74px", fontSize: "2.2rem" }}
            >
              <i className="bi bi-stars"></i>
            </div>
            <h4 className="fw-bold">{t("life.heroCardTitle")}</h4>
            <p className="text-secondary mb-3">{t("life.heroCardSteps")}</p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill">
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
            <span className="klh-pill-badge klh-pill-danger mb-2">
              {t("life.toolsLabel")}
            </span>
            <h2 className="display-6 fw-bold mt-2">{t("life.toolsTitle")}</h2>
            <p className="text-secondary mb-0">{t("life.toolsDescription")}</p>
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
                  <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
                    🌱 {t("life.nextStepBadge")}
                  </span>
                  <h2 className="fw-bold text-white mb-2">
                    {t("life.nextStepTitle")}
                  </h2>
                  <p className="text-white-50 mb-0">
                    {t("life.nextStepDescription")}
                  </p>
                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <Link
                    to="/life/goals"
                    className="btn btn-light btn-lg px-4 fw-bold klh-arrow-hover"
                  >
                    <span>{t("life.nextStepButton")}</span>
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

export default Life;
