import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import PageHero from "../components/PageHero";
import { ProgressRing, Reveal } from "../components/Motion";

function Dashboard() {
  const { t } = useLanguage();
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  const [goal] = useState(function () {
    return localStorage.getItem("khmer-life-helper-goal") || "";
  });

  const [completedTasks, setCompletedTasks] = useState(function () {
    const savedTasks = localStorage.getItem(
      "khmer-life-helper-completed-tasks",
    );

    if (!savedTasks) {
      return [];
    }

    try {
      const parsedTasks = JSON.parse(savedTasks);

      return Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch {
      return [];
    }
  });

  const plans = {
    "Find an Internship": [
      {
        week: 1,
        title: t("dashboard.plans.findInternship.week1.title"),
        tasks: [
          t("dashboard.plans.findInternship.week1.tasks.0"),
          t("dashboard.plans.findInternship.week1.tasks.1"),
          t("dashboard.plans.findInternship.week1.tasks.2"),
        ],
      },
      {
        week: 2,
        title: t("dashboard.plans.findInternship.week2.title"),
        tasks: [
          t("dashboard.plans.findInternship.week2.tasks.0"),
          t("dashboard.plans.findInternship.week2.tasks.1"),
          t("dashboard.plans.findInternship.week2.tasks.2"),
        ],
      },
      {
        week: 3,
        title: t("dashboard.plans.findInternship.week3.title"),
        tasks: [
          t("dashboard.plans.findInternship.week3.tasks.0"),
          t("dashboard.plans.findInternship.week3.tasks.1"),
          t("dashboard.plans.findInternship.week3.tasks.2"),
        ],
      },
      {
        week: 4,
        title: t("dashboard.plans.findInternship.week4.title"),
        tasks: [
          t("dashboard.plans.findInternship.week4.tasks.0"),
          t("dashboard.plans.findInternship.week4.tasks.1"),
          t("dashboard.plans.findInternship.week4.tasks.2"),
        ],
      },
      {
        week: 5,
        title: t("dashboard.plans.findInternship.week5.title"),
        tasks: [
          t("dashboard.plans.findInternship.week5.tasks.0"),
          t("dashboard.plans.findInternship.week5.tasks.1"),
          t("dashboard.plans.findInternship.week5.tasks.2"),
        ],
      },
      {
        week: 6,
        title: t("dashboard.plans.findInternship.week6.title"),
        tasks: [
          t("dashboard.plans.findInternship.week6.tasks.0"),
          t("dashboard.plans.findInternship.week6.tasks.1"),
          t("dashboard.plans.findInternship.week6.tasks.2"),
        ],
      },
      {
        week: 7,
        title: t("dashboard.plans.findInternship.week7.title"),
        tasks: [
          t("dashboard.plans.findInternship.week7.tasks.0"),
          t("dashboard.plans.findInternship.week7.tasks.1"),
          t("dashboard.plans.findInternship.week7.tasks.2"),
        ],
      },
      {
        week: 8,
        title: t("dashboard.plans.findInternship.week8.title"),
        tasks: [
          t("dashboard.plans.findInternship.week8.tasks.0"),
          t("dashboard.plans.findInternship.week8.tasks.1"),
          t("dashboard.plans.findInternship.week8.tasks.2"),
        ],
      },
      {
        week: 9,
        title: t("dashboard.plans.findInternship.week9.title"),
        tasks: [
          t("dashboard.plans.findInternship.week9.tasks.0"),
          t("dashboard.plans.findInternship.week9.tasks.1"),
          t("dashboard.plans.findInternship.week9.tasks.2"),
        ],
      },
      {
        week: 10,
        title: t("dashboard.plans.findInternship.week10.title"),
        tasks: [
          t("dashboard.plans.findInternship.week10.tasks.0"),
          t("dashboard.plans.findInternship.week10.tasks.1"),
          t("dashboard.plans.findInternship.week10.tasks.2"),
        ],
      },
      {
        week: 11,
        title: t("dashboard.plans.findInternship.week11.title"),
        tasks: [
          t("dashboard.plans.findInternship.week11.tasks.0"),
          t("dashboard.plans.findInternship.week11.tasks.1"),
          t("dashboard.plans.findInternship.week11.tasks.2"),
        ],
      },
      {
        week: 12,
        title: t("dashboard.plans.findInternship.week12.title"),
        tasks: [
          t("dashboard.plans.findInternship.week12.tasks.0"),
          t("dashboard.plans.findInternship.week12.tasks.1"),
          t("dashboard.plans.findInternship.week12.tasks.2"),
        ],
      },
    ],

    "Learn a Skill": [
      {
        week: 1,
        title: t("dashboard.plans.learnSkill.week1.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week1.tasks.0"),
          t("dashboard.plans.learnSkill.week1.tasks.1"),
          t("dashboard.plans.learnSkill.week1.tasks.2"),
        ],
      },
      {
        week: 2,
        title: t("dashboard.plans.learnSkill.week2.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week2.tasks.0"),
          t("dashboard.plans.learnSkill.week2.tasks.1"),
          t("dashboard.plans.learnSkill.week2.tasks.2"),
        ],
      },
      {
        week: 3,
        title: t("dashboard.plans.learnSkill.week3.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week3.tasks.0"),
          t("dashboard.plans.learnSkill.week3.tasks.1"),
          t("dashboard.plans.learnSkill.week3.tasks.2"),
        ],
      },
      {
        week: 4,
        title: t("dashboard.plans.learnSkill.week4.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week4.tasks.0"),
          t("dashboard.plans.learnSkill.week4.tasks.1"),
          t("dashboard.plans.learnSkill.week4.tasks.2"),
        ],
      },
      {
        week: 5,
        title: t("dashboard.plans.learnSkill.week5.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week5.tasks.0"),
          t("dashboard.plans.learnSkill.week5.tasks.1"),
          t("dashboard.plans.learnSkill.week5.tasks.2"),
        ],
      },
      {
        week: 6,
        title: t("dashboard.plans.learnSkill.week6.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week6.tasks.0"),
          t("dashboard.plans.learnSkill.week6.tasks.1"),
          t("dashboard.plans.learnSkill.week6.tasks.2"),
        ],
      },
      {
        week: 7,
        title: t("dashboard.plans.learnSkill.week7.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week7.tasks.0"),
          t("dashboard.plans.learnSkill.week7.tasks.1"),
          t("dashboard.plans.learnSkill.week7.tasks.2"),
        ],
      },
      {
        week: 8,
        title: t("dashboard.plans.learnSkill.week8.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week8.tasks.0"),
          t("dashboard.plans.learnSkill.week8.tasks.1"),
          t("dashboard.plans.learnSkill.week8.tasks.2"),
        ],
      },
      {
        week: 9,
        title: t("dashboard.plans.learnSkill.week9.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week9.tasks.0"),
          t("dashboard.plans.learnSkill.week9.tasks.1"),
          t("dashboard.plans.learnSkill.week9.tasks.2"),
        ],
      },
      {
        week: 10,
        title: t("dashboard.plans.learnSkill.week10.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week10.tasks.0"),
          t("dashboard.plans.learnSkill.week10.tasks.1"),
          t("dashboard.plans.learnSkill.week10.tasks.2"),
        ],
      },
      {
        week: 11,
        title: t("dashboard.plans.learnSkill.week11.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week11.tasks.0"),
          t("dashboard.plans.learnSkill.week11.tasks.1"),
          t("dashboard.plans.learnSkill.week11.tasks.2"),
        ],
      },
      {
        week: 12,
        title: t("dashboard.plans.learnSkill.week12.title"),
        tasks: [
          t("dashboard.plans.learnSkill.week12.tasks.0"),
          t("dashboard.plans.learnSkill.week12.tasks.1"),
          t("dashboard.plans.learnSkill.week12.tasks.2"),
        ],
      },
    ],

    "Improve My Studies": [
      {
        week: 1,
        title: t("dashboard.plans.improveStudies.week1.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week1.tasks.0"),
          t("dashboard.plans.improveStudies.week1.tasks.1"),
          t("dashboard.plans.improveStudies.week1.tasks.2"),
        ],
      },
      {
        week: 2,
        title: t("dashboard.plans.improveStudies.week2.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week2.tasks.0"),
          t("dashboard.plans.improveStudies.week2.tasks.1"),
          t("dashboard.plans.improveStudies.week2.tasks.2"),
        ],
      },
      {
        week: 3,
        title: t("dashboard.plans.improveStudies.week3.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week3.tasks.0"),
          t("dashboard.plans.improveStudies.week3.tasks.1"),
          t("dashboard.plans.improveStudies.week3.tasks.2"),
        ],
      },
      {
        week: 4,
        title: t("dashboard.plans.improveStudies.week4.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week4.tasks.0"),
          t("dashboard.plans.improveStudies.week4.tasks.1"),
          t("dashboard.plans.improveStudies.week4.tasks.2"),
        ],
      },
      {
        week: 5,
        title: t("dashboard.plans.improveStudies.week5.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week5.tasks.0"),
          t("dashboard.plans.improveStudies.week5.tasks.1"),
          t("dashboard.plans.improveStudies.week5.tasks.2"),
        ],
      },
      {
        week: 6,
        title: t("dashboard.plans.improveStudies.week6.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week6.tasks.0"),
          t("dashboard.plans.improveStudies.week6.tasks.1"),
          t("dashboard.plans.improveStudies.week6.tasks.2"),
        ],
      },
      {
        week: 7,
        title: t("dashboard.plans.improveStudies.week7.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week7.tasks.0"),
          t("dashboard.plans.improveStudies.week7.tasks.1"),
          t("dashboard.plans.improveStudies.week7.tasks.2"),
        ],
      },
      {
        week: 8,
        title: t("dashboard.plans.improveStudies.week8.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week8.tasks.0"),
          t("dashboard.plans.improveStudies.week8.tasks.1"),
          t("dashboard.plans.improveStudies.week8.tasks.2"),
        ],
      },
      {
        week: 9,
        title: t("dashboard.plans.improveStudies.week9.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week9.tasks.0"),
          t("dashboard.plans.improveStudies.week9.tasks.1"),
          t("dashboard.plans.improveStudies.week9.tasks.2"),
        ],
      },
      {
        week: 10,
        title: t("dashboard.plans.improveStudies.week10.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week10.tasks.0"),
          t("dashboard.plans.improveStudies.week10.tasks.1"),
          t("dashboard.plans.improveStudies.week10.tasks.2"),
        ],
      },
      {
        week: 11,
        title: t("dashboard.plans.improveStudies.week11.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week11.tasks.0"),
          t("dashboard.plans.improveStudies.week11.tasks.1"),
          t("dashboard.plans.improveStudies.week11.tasks.2"),
        ],
      },
      {
        week: 12,
        title: t("dashboard.plans.improveStudies.week12.title"),
        tasks: [
          t("dashboard.plans.improveStudies.week12.tasks.0"),
          t("dashboard.plans.improveStudies.week12.tasks.1"),
          t("dashboard.plans.improveStudies.week12.tasks.2"),
        ],
      },
    ],

    "Reach a Goal": [
      {
        week: 1,
        title: t("dashboard.plans.reachGoal.week1.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week1.tasks.0"),
          t("dashboard.plans.reachGoal.week1.tasks.1"),
          t("dashboard.plans.reachGoal.week1.tasks.2"),
        ],
      },
      {
        week: 2,
        title: t("dashboard.plans.reachGoal.week2.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week2.tasks.0"),
          t("dashboard.plans.reachGoal.week2.tasks.1"),
          t("dashboard.plans.reachGoal.week2.tasks.2"),
        ],
      },
      {
        week: 3,
        title: t("dashboard.plans.reachGoal.week3.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week3.tasks.0"),
          t("dashboard.plans.reachGoal.week3.tasks.1"),
          t("dashboard.plans.reachGoal.week3.tasks.2"),
        ],
      },
      {
        week: 4,
        title: t("dashboard.plans.reachGoal.week4.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week4.tasks.0"),
          t("dashboard.plans.reachGoal.week4.tasks.1"),
          t("dashboard.plans.reachGoal.week4.tasks.2"),
        ],
      },
      {
        week: 5,
        title: t("dashboard.plans.reachGoal.week5.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week5.tasks.0"),
          t("dashboard.plans.reachGoal.week5.tasks.1"),
          t("dashboard.plans.reachGoal.week5.tasks.2"),
        ],
      },
      {
        week: 6,
        title: t("dashboard.plans.reachGoal.week6.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week6.tasks.0"),
          t("dashboard.plans.reachGoal.week6.tasks.1"),
          t("dashboard.plans.reachGoal.week6.tasks.2"),
        ],
      },
      {
        week: 7,
        title: t("dashboard.plans.reachGoal.week7.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week7.tasks.0"),
          t("dashboard.plans.reachGoal.week7.tasks.1"),
          t("dashboard.plans.reachGoal.week7.tasks.2"),
        ],
      },
      {
        week: 8,
        title: t("dashboard.plans.reachGoal.week8.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week8.tasks.0"),
          t("dashboard.plans.reachGoal.week8.tasks.1"),
          t("dashboard.plans.reachGoal.week8.tasks.2"),
        ],
      },
      {
        week: 9,
        title: t("dashboard.plans.reachGoal.week9.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week9.tasks.0"),
          t("dashboard.plans.reachGoal.week9.tasks.1"),
          t("dashboard.plans.reachGoal.week9.tasks.2"),
        ],
      },
      {
        week: 10,
        title: t("dashboard.plans.reachGoal.week10.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week10.tasks.0"),
          t("dashboard.plans.reachGoal.week10.tasks.1"),
          t("dashboard.plans.reachGoal.week10.tasks.2"),
        ],
      },
      {
        week: 11,
        title: t("dashboard.plans.reachGoal.week11.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week11.tasks.0"),
          t("dashboard.plans.reachGoal.week11.tasks.1"),
          t("dashboard.plans.reachGoal.week11.tasks.2"),
        ],
      },
      {
        week: 12,
        title: t("dashboard.plans.reachGoal.week12.title"),
        tasks: [
          t("dashboard.plans.reachGoal.week12.tasks.0"),
          t("dashboard.plans.reachGoal.week12.tasks.1"),
          t("dashboard.plans.reachGoal.week12.tasks.2"),
        ],
      },
    ],
  };

  const currentPlan = plans[goal] || [];

  const allTasks = currentPlan.reduce(function (result, week) {
    week.tasks.forEach(function (task, index) {
      result.push({
        id: goal + "-" + week.week + "-" + index,
        task: task,
        week: week.week,
        weekTitle: week.title,
      });
    });

    return result;
  }, []);

  const completedCurrentTasks = completedTasks.filter(function (taskId) {
    return taskId.startsWith(goal + "-");
  });

  const totalTasks = allTasks.length;
  const completedCount = completedCurrentTasks.length;
  const remainingCount = totalTasks - completedCount;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

  const nextTask = allTasks.find(function (item) {
    return !completedTasks.includes(item.id);
  });

  const currentWeekNumber = nextTask ? nextTask.week : currentPlan.length;

  const currentWeek = currentPlan.find(function (week) {
    return week.week === currentWeekNumber;
  });

  const currentWeekTasks = currentWeek
    ? currentWeek.tasks.map(function (task, index) {
        return {
          id: goal + "-" + currentWeek.week + "-" + index,
          task: task,
        };
      })
    : [];

  function toggleTask(taskId) {
    setCompletedTasks(function (previousTasks) {
      const newTasks = previousTasks.includes(taskId)
        ? previousTasks.filter(function (id) {
            return id !== taskId;
          })
        : [...previousTasks, taskId];

      localStorage.setItem(
        "khmer-life-helper-completed-tasks",
        JSON.stringify(newTasks),
      );

      return newTasks;
    });
  }

  if (!goal) {
    return (
      <main>
        <PageHero
          badge={t("dashboard.badge")}
          badgeIcon="bi-speedometer2"
          title={t("dashboard.title")}
          subtitle={t("dashboard.subtitle")}
          color="primary"
          align="center"
          breadcrumbs={[{ label: t("navbar.dashboard") }]}
        />

        <section className="py-5 bg-light">
          <div className="container">
            <Reveal variant="zoom">
              <div
                className="card border-0 shadow-sm rounded-4 mx-auto text-center p-5"
                style={{ maxWidth: "620px" }}
              >
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-4 bg-primary-subtle text-primary"
                  style={{ width: "84px", height: "84px", fontSize: "2.5rem" }}
                >
                  <i className="bi bi-compass"></i>
                </div>

                <h2 className="fw-bold mb-3">{t("dashboard.empty.title")}</h2>

                <p className="text-secondary mb-4">
                  {t("dashboard.empty.description")}
                </p>

                <Link
                  to="/next-step"
                  className="btn btn-primary btn-lg px-4 align-self-center klh-arrow-hover"
                >
                  <span>{t("dashboard.empty.button")}</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        badge={t("dashboard.badge")}
        badgeIcon="bi-compass"
        title={t("dashboard.title")}
        subtitle={t("dashboard.subtitle")}
        color="primary"
        breadcrumbs={[{ label: t("navbar.dashboard") }]}
        aside={
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 d-flex align-items-center justify-content-between gap-3">
              <div>
                <small className="text-secondary d-block mb-1">
                  {t("dashboard.currentGoal")}
                </small>
                <h4 className="fw-bold mb-2">{goal}</h4>
                <Link
                  to="/next-step"
                  className="btn btn-outline-primary btn-sm klh-arrow-hover"
                >
                  <i className="bi bi-map me-2"></i>
                  {t("dashboard.viewFullPlan")}
                </Link>
              </div>

              <ProgressRing
                value={progress}
                size={96}
                strokeWidth={8}
                color="#2563eb"
                label={t("common.progress")}
              />
            </div>
          </div>
        }
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-8">
              <Reveal className="h-100">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div
                        className="bg-primary-subtle text-primary rounded-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "55px",
                          height: "55px",
                          fontSize: "24px",
                        }}
                      >
                        <i className="bi bi-bullseye"></i>
                      </div>

                      <div>
                        <small className="text-secondary">
                          {t("dashboard.currentGoal")}
                        </small>

                        <h3 className="fw-bold mb-0">{goal}</h3>
                      </div>
                    </div>

                    <div className="mb-2 d-flex justify-content-between">
                      <span className="fw-semibold">
                        {t("dashboard.overallProgress")}
                      </span>

                      <strong className="text-primary">{progress}%</strong>
                    </div>

                    <div className="progress mb-4" style={{ height: "12px" }}>
                      <div
                        className="progress-bar"
                        style={{ width: progress + "%" }}
                      ></div>
                    </div>

                    <div className="row g-3">
                      <div className="col-4">
                        <div className="bg-light rounded-4 p-3 text-center">
                          <h4 className="fw-bold mb-0">{totalTasks}</h4>
                          <small className="text-secondary">
                            {t("dashboard.stats.total")}
                          </small>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="bg-success-subtle rounded-4 p-3 text-center">
                          <h4 className="fw-bold text-success mb-0">
                            {completedCount}
                          </h4>
                          <small className="text-secondary">
                            {t("dashboard.stats.completed")}
                          </small>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="bg-warning-subtle rounded-4 p-3 text-center">
                          <h4 className="fw-bold text-warning mb-0">
                            {remainingCount}
                          </h4>
                          <small className="text-secondary">
                            {t("dashboard.stats.remaining")}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={90} className="h-100">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="bg-warning-subtle text-warning rounded-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          fontSize: "22px",
                        }}
                      >
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>

                      <div>
                        <small className="text-secondary">
                          {t("dashboard.nextAction")}
                        </small>
                      </div>
                    </div>

                    {nextTask ? (
                      <>
                        <h4 className="fw-bold flex-grow-1">{nextTask.task}</h4>

                        <p className="text-secondary small">
                          {t("dashboard.week")} {nextTask.week}:{" "}
                          {nextTask.weekTitle}
                        </p>

                        <Link
                          to="/next-step"
                          className="btn btn-primary w-100 klh-arrow-hover"
                        >
                          <span>{t("dashboard.continuePlan")}</span>
                          <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                      </>
                    ) : (
                      <>
                        <h4 className="fw-bold text-success">
                          {t("dashboard.allDone.title")}
                        </h4>

                        <p className="text-secondary flex-grow-1">
                          {t("dashboard.allDone.description")}
                        </p>

                        <div className="text-success fw-semibold">
                          <i className="bi bi-trophy-fill me-2"></i>
                          {t("dashboard.allDone.greatJob")}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <Reveal delay={120}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                      <div>
                        <h3 className="fw-bold mb-1">
                          {showAllWeeks
                            ? t("ui.dashboard.allWeeks")
                            : t("dashboard.thisWeek")}
                        </h3>

                        <p className="text-secondary mb-0">
                          {showAllWeeks
                            ? goal
                            : `${t("dashboard.week")} ${currentWeekNumber}${
                                currentWeek ? " - " + currentWeek.title : ""
                              }`}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setShowAllWeeks((prev) => !prev)}
                      >
                        <i className="bi bi-calendar3 me-1"></i>
                        {showAllWeeks
                          ? t("ui.dashboard.thisWeekOnly")
                          : t("ui.dashboard.allWeeks")}
                      </button>
                    </div>

                    {showAllWeeks ? (
                      <div className="d-grid gap-3">
                        {currentPlan.map(function (week) {
                          return (
                            <div className="week-card mb-0" key={week.week}>
                              <div className="week-header py-3">
                                <span className="week-number">{week.week}</span>
                                <div className="fw-bold">
                                  {t("dashboard.week")} {week.week}:{" "}
                                  <span className="text-secondary fw-normal">
                                    {week.title}
                                  </span>
                                </div>
                              </div>
                              <div className="week-tasks">
                                {week.tasks.map(function (task, index) {
                                  const taskId =
                                    goal + "-" + week.week + "-" + index;
                                  const completed =
                                    completedTasks.includes(taskId);
                                  return (
                                    <label
                                      key={taskId}
                                      className={
                                        "task-item " +
                                        (completed ? "task-completed" : "")
                                      }
                                    >
                                      <input
                                        type="checkbox"
                                        checked={completed}
                                        onChange={() => toggleTask(taskId)}
                                      />
                                      <span>{task}</span>
                                      {completed && (
                                        <i className="bi bi-check-circle-fill text-success ms-auto"></i>
                                      )}
                                    </label>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : currentWeekTasks.length > 0 ? (
                      <div>
                        {currentWeekTasks.map(function (item) {
                          const completed = completedTasks.includes(item.id);

                          return (
                            <label
                              key={item.id}
                              className={
                                "d-flex align-items-center gap-3 p-3 mb-2 rounded-3 border " +
                                (completed
                                  ? "bg-success-subtle border-success-subtle"
                                  : "bg-light border-transparent")
                              }
                              style={{ cursor: "pointer" }}
                            >
                              <input
                                type="checkbox"
                                className="form-check-input mt-0"
                                checked={completed}
                                onChange={function () {
                                  toggleTask(item.id);
                                }}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                              />

                              <span
                                className={
                                  completed
                                    ? "text-decoration-line-through text-secondary"
                                    : "fw-semibold"
                                }
                              >
                                {item.task}
                              </span>

                              {completed && (
                                <i className="bi bi-check-circle-fill text-success ms-auto"></i>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <i className="bi bi-check-circle-fill text-success fs-1"></i>

                        <p className="fw-semibold mt-3 mb-0">
                          {t("dashboard.completedPlan")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={160} className="h-100">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">
                      {t("dashboard.quickActions")}
                    </h4>

                    <div className="d-grid gap-2">
                      <Link
                        to="/next-step"
                        className="btn btn-outline-primary text-start klh-arrow-hover"
                      >
                        <i className="bi bi-map me-2"></i>
                        {t("dashboard.actions.viewRoadmap")}
                      </Link>

                      <Link
                        to="/career"
                        className="btn btn-outline-primary text-start klh-arrow-hover"
                      >
                        <i className="bi bi-briefcase me-2"></i>
                        {t("dashboard.actions.exploreCareer")}
                      </Link>

                      <Link
                        to="/student"
                        className="btn btn-outline-primary text-start klh-arrow-hover"
                      >
                        <i className="bi bi-mortarboard me-2"></i>
                        {t("dashboard.actions.studentTools")}
                      </Link>

                      <Link
                        to="/life"
                        className="btn btn-outline-primary text-start klh-arrow-hover"
                      >
                        <i className="bi bi-heart me-2"></i>
                        {t("dashboard.actions.lifeTools")}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <div className="alert alert-info border-0 mt-4 rounded-4 shadow-xs">
              <div className="d-flex gap-3">
                <i className="bi bi-info-circle-fill fs-5"></i>

                <div>
                  <strong>{t("dashboard.saved.title")}</strong>

                  <div className="small mt-1">
                    {t("dashboard.saved.description")}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

