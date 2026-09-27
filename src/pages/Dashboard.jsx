import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Dashboard() {
  const { t } = useLanguage();

  const [goal, setGoal] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(function () {
    const savedGoal = localStorage.getItem("khmer-life-helper-goal");
    const savedTasks = localStorage.getItem(
      "khmer-life-helper-completed-tasks",
    );

    if (savedGoal) {
      setGoal(savedGoal);
    }

    if (savedTasks) {
      try {
        setCompletedTasks(JSON.parse(savedTasks));
      } catch (error) {
        setCompletedTasks([]);
      }
    }
  }, []);

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
      let newTasks = [];

      if (previousTasks.includes(taskId)) {
        newTasks = previousTasks.filter(function (id) {
          return id !== taskId;
        });
      } else {
        newTasks = [...previousTasks, taskId];
      }

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
        <section className="py-5">
          <div className="container">
            <div className="text-center py-5">
              <div className="mb-4">
                <i
                  className="bi bi-compass text-primary"
                  style={{ fontSize: "70px" }}
                ></i>
              </div>

              <h1 className="fw-bold mb-3">{t("dashboard.empty.title")}</h1>

              <p className="text-secondary mb-4">
                {t("dashboard.empty.description")}
              </p>

              <Link to="/next-step" className="btn btn-primary btn-lg px-4">
                {t("dashboard.empty.button")}
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <div>
              <span className="badge bg-primary-subtle text-primary mb-2">
                <i className="bi bi-compass me-2"></i>
                {t("dashboard.badge")}
              </span>

              <h1 className="fw-bold mb-1">{t("dashboard.title")}</h1>

              <p className="text-secondary mb-0">{t("dashboard.subtitle")}</p>
            </div>

            <Link to="/next-step" className="btn btn-outline-primary">
              <i className="bi bi-map me-2"></i>
              {t("dashboard.viewFullPlan")}
            </Link>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-lg-8">
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

                  <div className="progress mb-3" style={{ height: "12px" }}>
                    <div
                      className="progress-bar"
                      style={{ width: progress + "%" }}
                    ></div>
                  </div>

                  <div className="row g-3">
                    <div className="col-4">
                      <div className="text-center">
                        <h4 className="fw-bold mb-0">{totalTasks}</h4>

                        <small className="text-secondary">
                          {t("dashboard.stats.total")}
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="text-center">
                        <h4 className="fw-bold text-success mb-0">
                          {completedCount}
                        </h4>

                        <small className="text-secondary">
                          {t("dashboard.stats.completed")}
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="text-center">
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
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
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
                      <h4 className="fw-bold">{nextTask.task}</h4>

                      <p className="text-secondary small">
                        {t("dashboard.week")} {nextTask.week}:{" "}
                        {nextTask.weekTitle}
                      </p>

                      <Link to="/next-step" className="btn btn-primary w-100">
                        {t("dashboard.continuePlan")}
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h4 className="fw-bold text-success">
                        {t("dashboard.allDone.title")}
                      </h4>

                      <p className="text-secondary">
                        {t("dashboard.allDone.description")}
                      </p>

                      <div className="text-success">
                        <i className="bi bi-trophy-fill me-2"></i>
                        {t("dashboard.allDone.greatJob")}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h3 className="fw-bold mb-1">
                        {t("dashboard.thisWeek")}
                      </h3>

                      <p className="text-secondary mb-0">
                        {t("dashboard.week")} {currentWeekNumber}
                        {currentWeek ? " - " + currentWeek.title : ""}
                      </p>
                    </div>

                    <span className="badge bg-primary-subtle text-primary px-3 py-2">
                      {t("dashboard.week")} {currentWeekNumber}
                    </span>
                  </div>

                  {currentWeekTasks.length > 0 ? (
                    <div>
                      {currentWeekTasks.map(function (item) {
                        const completed = completedTasks.includes(item.id);

                        return (
                          <label
                            key={item.id}
                            className={
                              "d-flex align-items-center gap-3 p-3 mb-2 rounded-3 " +
                              (completed ? "bg-success-subtle" : "bg-light")
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
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
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">
                    {t("dashboard.quickActions")}
                  </h4>

                  <div className="d-grid gap-2">
                    <Link
                      to="/next-step"
                      className="btn btn-outline-primary text-start"
                    >
                      <i className="bi bi-map me-2"></i>
                      {t("dashboard.actions.viewRoadmap")}
                    </Link>

                    <Link
                      to="/career"
                      className="btn btn-outline-primary text-start"
                    >
                      <i className="bi bi-briefcase me-2"></i>
                      {t("dashboard.actions.exploreCareer")}
                    </Link>

                    <Link
                      to="/student"
                      className="btn btn-outline-primary text-start"
                    >
                      <i className="bi bi-mortarboard me-2"></i>
                      {t("dashboard.actions.studentTools")}
                    </Link>

                    <Link
                      to="/life"
                      className="btn btn-outline-primary text-start"
                    >
                      <i className="bi bi-heart me-2"></i>
                      {t("dashboard.actions.lifeTools")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info border-0 mt-4">
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
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
