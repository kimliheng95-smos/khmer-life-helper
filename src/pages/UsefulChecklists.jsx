import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import PageHero from "../components/PageHero";
import { ProgressRing, Reveal } from "../components/Motion";

function UsefulChecklists() {
  const { t } = useLanguage();

  const checklists = [
    {
      id: "study",
      title: t("usefulChecklists.lists.study.title"),
      icon: "bi-mortarboard",
      color: "primary",
      items: [
        t("usefulChecklists.lists.study.items.review"),
        t("usefulChecklists.lists.study.items.assignments"),
        t("usefulChecklists.lists.study.items.practice"),
        t("usefulChecklists.lists.study.items.prepare"),
        t("usefulChecklists.lists.study.items.organize"),
      ],
    },
    {
      id: "career",
      title: t("usefulChecklists.lists.career.title"),
      icon: "bi-briefcase",
      color: "success",
      items: [
        t("usefulChecklists.lists.career.items.cv"),
        t("usefulChecklists.lists.career.items.skill"),
        t("usefulChecklists.lists.career.items.portfolio"),
        t("usefulChecklists.lists.career.items.internship"),
        t("usefulChecklists.lists.career.items.interview"),
      ],
    },
    {
      id: "daily",
      title: t("usefulChecklists.lists.daily.title"),
      icon: "bi-calendar-check",
      color: "warning",
      items: [
        t("usefulChecklists.lists.daily.items.plan"),
        t("usefulChecklists.lists.daily.items.water"),
        t("usefulChecklists.lists.daily.items.exercise"),
        t("usefulChecklists.lists.daily.items.tasks"),
        t("usefulChecklists.lists.daily.items.tomorrow"),
      ],
    },
    {
      id: "personal",
      title: t("usefulChecklists.lists.personal.title"),
      icon: "bi-stars",
      color: "danger",
      items: [
        t("usefulChecklists.lists.personal.items.learn"),
        t("usefulChecklists.lists.personal.items.reflect"),
        t("usefulChecklists.lists.personal.items.skill"),
        t("usefulChecklists.lists.personal.items.family"),
        t("usefulChecklists.lists.personal.items.priority"),
      ],
    },
  ];

  const [selectedChecklist, setSelectedChecklist] = useState("study");
  const [completed, setCompleted] = useState({});

  const currentChecklist = checklists.find(function (checklist) {
    return checklist.id === selectedChecklist;
  });

  function toggleItem(itemIndex) {
    const key = selectedChecklist + "-" + itemIndex;

    setCompleted(function (previousCompleted) {
      return {
        ...previousCompleted,
        [key]: !previousCompleted[key],
      };
    });
  }

  function resetChecklist() {
    setCompleted(function (previousCompleted) {
      const updated = { ...previousCompleted };

      currentChecklist.items.forEach(function (_, index) {
        delete updated[selectedChecklist + "-" + index];
      });

      return updated;
    });
  }

  const completedCount = currentChecklist.items.filter(function (_, index) {
    return completed[selectedChecklist + "-" + index];
  }).length;

  const progress = (completedCount / currentChecklist.items.length) * 100;

  return (
    <main className="useful-checklists-page pb-5">
      <PageHero
        badge={`✅ ${t("usefulChecklists.badge")}`}
        title={
          <>
            {t("usefulChecklists.heroTitleLine1")}
            <br />
            <span className="text-warning-emphasis">
              {t("usefulChecklists.heroTitleLine2")}
            </span>
          </>
        }
        subtitle={t("usefulChecklists.heroDescription")}
        color="warning"
        align="center"
        breadcrumbs={[
          { label: t("navbar.life"), to: "/life" },
          { label: t("life.tools.checklists.title") },
        ]}
      />

      <div className="container pt-5">

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">
                  {t("usefulChecklists.chooseTitle")}
                </h5>

                <div className="d-grid gap-2">
                  {checklists.map(function (checklist) {
                    const isActive = selectedChecklist === checklist.id;

                    return (
                      <button
                        key={checklist.id}
                        type="button"
                        className={`btn text-start p-3 ${
                          isActive
                            ? "btn-" + checklist.color
                            : "btn-outline-secondary"
                        }`}
                        onClick={function () {
                          setSelectedChecklist(checklist.id);
                        }}
                      >
                        <i className={`bi ${checklist.icon} me-2`}></i>

                        {checklist.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <ProgressRing
                      value={progress}
                      size={70}
                      strokeWidth={6}
                      color="#2563eb"
                    />
                    <div>
                      <h3 className="fw-bold mb-1">{currentChecklist.title}</h3>
                      <p className="text-secondary mb-0">
                        {completedCount} {t("usefulChecklists.progress.of")}{" "}
                        {currentChecklist.items.length}{" "}
                        {t("usefulChecklists.progress.completed")}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetChecklist}
                  >
                    <i className="bi bi-arrow-counterclockwise me-1"></i>
                    {t("usefulChecklists.reset")}
                  </button>
                </div>

                <div className="progress mb-4" style={{ height: "10px" }}>
                  <div
                    className={`progress-bar bg-${currentChecklist.color}`}
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <div className="d-grid gap-2">
                  {currentChecklist.items.map(function (item, index) {
                    const key = selectedChecklist + "-" + index;
                    const isCompleted = completed[key];

                    return (
                      <button
                        key={key}
                        type="button"
                        className={`btn text-start border rounded-3 p-3 ${
                          isCompleted ? "bg-success-subtle" : "bg-white"
                        }`}
                        onClick={function () {
                          toggleItem(index);
                        }}
                      >
                        <i
                          className={`bi ${
                            isCompleted
                              ? "bi-check-circle-fill text-success"
                              : "bi-circle text-secondary"
                          } me-3`}
                        ></i>

                        <span
                          className={
                            isCompleted
                              ? "text-decoration-line-through text-secondary"
                              : ""
                          }
                        >
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {completedCount === currentChecklist.items.length && (
                  <div className="alert alert-success mt-4 mb-0">
                    <i className="bi bi-trophy-fill me-2"></i>
                    {t("usefulChecklists.completedMessage")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Reveal className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="card border-0 bg-primary-subtle rounded-4 h-100 klh-hover-lift">
              <div className="card-body p-4">
                <i className="bi bi-check2-circle text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("usefulChecklists.bottom.track.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("usefulChecklists.bottom.track.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-lightning-charge text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("usefulChecklists.bottom.productive.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("usefulChecklists.bottom.productive.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100 klh-hover-lift">
              <div className="card-body p-4">
                <i className="bi bi-stars text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("usefulChecklists.bottom.habits.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("usefulChecklists.bottom.habits.description")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default UsefulChecklists;

