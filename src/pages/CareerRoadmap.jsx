import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function CareerRoadmap() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    career: "",
    level: "",
    goal: "",
    time: "",
  });

  const [roadmap, setRoadmap] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);

  const roadmapData = {
    "Web Developer": [
      {
        titleKey: "careerRoadmap.steps.webDeveloper.htmlCss.title",
        descriptionKey: "careerRoadmap.steps.webDeveloper.htmlCss.description",
      },
      {
        titleKey: "careerRoadmap.steps.webDeveloper.javascript.title",
        descriptionKey:
          "careerRoadmap.steps.webDeveloper.javascript.description",
      },
      {
        titleKey: "careerRoadmap.steps.webDeveloper.projects.title",
        descriptionKey: "careerRoadmap.steps.webDeveloper.projects.description",
      },
      {
        titleKey: "careerRoadmap.steps.webDeveloper.git.title",
        descriptionKey: "careerRoadmap.steps.webDeveloper.git.description",
      },
      {
        titleKey: "careerRoadmap.steps.webDeveloper.portfolio.title",
        descriptionKey:
          "careerRoadmap.steps.webDeveloper.portfolio.description",
      },
      {
        titleKey: "careerRoadmap.steps.webDeveloper.internships.title",
        descriptionKey:
          "careerRoadmap.steps.webDeveloper.internships.description",
      },
    ],

    "App Developer": [
      {
        titleKey: "careerRoadmap.steps.appDeveloper.fundamentals.title",
        descriptionKey:
          "careerRoadmap.steps.appDeveloper.fundamentals.description",
      },
      {
        titleKey: "careerRoadmap.steps.appDeveloper.flutter.title",
        descriptionKey: "careerRoadmap.steps.appDeveloper.flutter.description",
      },
      {
        titleKey: "careerRoadmap.steps.appDeveloper.apps.title",
        descriptionKey: "careerRoadmap.steps.appDeveloper.apps.description",
      },
      {
        titleKey: "careerRoadmap.steps.appDeveloper.firebase.title",
        descriptionKey: "careerRoadmap.steps.appDeveloper.firebase.description",
      },
      {
        titleKey: "careerRoadmap.steps.appDeveloper.publish.title",
        descriptionKey: "careerRoadmap.steps.appDeveloper.publish.description",
      },
      {
        titleKey: "careerRoadmap.steps.appDeveloper.internships.title",
        descriptionKey:
          "careerRoadmap.steps.appDeveloper.internships.description",
      },
    ],

    "UI/UX Designer": [
      {
        titleKey: "careerRoadmap.steps.uiux.fundamentals.title",
        descriptionKey: "careerRoadmap.steps.uiux.fundamentals.description",
      },
      {
        titleKey: "careerRoadmap.steps.uiux.figma.title",
        descriptionKey: "careerRoadmap.steps.uiux.figma.description",
      },
      {
        titleKey: "careerRoadmap.steps.uiux.ux.title",
        descriptionKey: "careerRoadmap.steps.uiux.ux.description",
      },
      {
        titleKey: "careerRoadmap.steps.uiux.projects.title",
        descriptionKey: "careerRoadmap.steps.uiux.projects.description",
      },
      {
        titleKey: "careerRoadmap.steps.uiux.portfolio.title",
        descriptionKey: "careerRoadmap.steps.uiux.portfolio.description",
      },
      {
        titleKey: "careerRoadmap.steps.uiux.internships.title",
        descriptionKey: "careerRoadmap.steps.uiux.internships.description",
      },
    ],

    "MIS / Business Technology": [
      {
        titleKey: "careerRoadmap.steps.mis.businessSystems.title",
        descriptionKey: "careerRoadmap.steps.mis.businessSystems.description",
      },
      {
        titleKey: "careerRoadmap.steps.mis.database.title",
        descriptionKey: "careerRoadmap.steps.mis.database.description",
      },
      {
        titleKey: "careerRoadmap.steps.mis.analysis.title",
        descriptionKey: "careerRoadmap.steps.mis.analysis.description",
      },
      {
        titleKey: "careerRoadmap.steps.mis.projects.title",
        descriptionKey: "careerRoadmap.steps.mis.projects.description",
      },
      {
        titleKey: "careerRoadmap.steps.mis.communication.title",
        descriptionKey: "careerRoadmap.steps.mis.communication.description",
      },
      {
        titleKey: "careerRoadmap.steps.mis.internships.title",
        descriptionKey: "careerRoadmap.steps.mis.internships.description",
      },
    ],

    "Software Developer": [
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.fundamentals.title",
        descriptionKey:
          "careerRoadmap.steps.softwareDeveloper.fundamentals.description",
      },
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.path.title",
        descriptionKey:
          "careerRoadmap.steps.softwareDeveloper.path.description",
      },
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.stack.title",
        descriptionKey:
          "careerRoadmap.steps.softwareDeveloper.stack.description",
      },
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.projects.title",
        descriptionKey:
          "careerRoadmap.steps.softwareDeveloper.projects.description",
      },
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.git.title",
        descriptionKey: "careerRoadmap.steps.softwareDeveloper.git.description",
      },
      {
        titleKey: "careerRoadmap.steps.softwareDeveloper.jobs.title",
        descriptionKey:
          "careerRoadmap.steps.softwareDeveloper.jobs.description",
      },
    ],
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setForm(function (previousForm) {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  }

  function createRoadmap(event) {
    event.preventDefault();

    if (!form.career || !form.level || !form.goal || !form.time) {
      return;
    }

    setRoadmap(roadmapData[form.career]);
    setCompletedSteps([]);
  }

  function toggleStep(index) {
    setCompletedSteps(function (previousSteps) {
      if (previousSteps.includes(index)) {
        return previousSteps.filter(function (step) {
          return step !== index;
        });
      }

      return [...previousSteps, index];
    });
  }

  function resetRoadmap() {
    setRoadmap(null);
    setCompletedSteps([]);

    setForm({
      career: "",
      level: "",
      goal: "",
      time: "",
    });
  }

  function getCareerLabel(career) {
    const careerKeys = {
      "Web Developer": "careerRoadmap.careers.webDeveloper",
      "App Developer": "careerRoadmap.careers.appDeveloper",
      "UI/UX Designer": "careerRoadmap.careers.uiux",
      "MIS / Business Technology": "careerRoadmap.careers.mis",
      "Software Developer": "careerRoadmap.careers.softwareDeveloper",
    };

    return careerKeys[career] ? t(careerKeys[career]) : career;
  }

  function getLevelLabel(level) {
    const levelKeys = {
      Beginner: "careerRoadmap.levels.beginner",
      Student: "careerRoadmap.levels.student",
      Intermediate: "careerRoadmap.levels.intermediate",
      Advanced: "careerRoadmap.levels.advanced",
    };

    return levelKeys[level] ? t(levelKeys[level]) : level;
  }

  function getGoalLabel(goal) {
    const goalKeys = {
      "Learn the skills": "careerRoadmap.goals.learnSkills",
      "Build a portfolio": "careerRoadmap.goals.buildPortfolio",
      "Get an internship": "careerRoadmap.goals.getInternship",
      "Get a job": "careerRoadmap.goals.getJob",
    };

    return goalKeys[goal] ? t(goalKeys[goal]) : goal;
  }

  function getTimeLabel(time) {
    const timeKeys = {
      "30 minutes/day": "careerRoadmap.time.30m",
      "1 hour/day": "careerRoadmap.time.1h",
      "2 hours/day": "careerRoadmap.time.2h",
      "3+ hours/day": "careerRoadmap.time.3h",
    };

    return timeKeys[time] ? t(timeKeys[time]) : time;
  }

  const progress = roadmap
    ? Math.round((completedSteps.length / roadmap.length) * 100)
    : 0;

  return (
    <main className="career-roadmap-page py-5">
      <div className="container">
        {!roadmap ? (
          <>
            <div className="text-center mb-5">
              <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
                <i className="bi bi-graph-up-arrow me-2"></i>
                {t("careerRoadmap.badge")}
              </span>

              <h1 className="display-5 fw-bold">
                {t("careerRoadmap.heroTitle")}
              </h1>

              <p
                className="lead text-secondary mx-auto"
                style={{ maxWidth: "750px" }}
              >
                {t("careerRoadmap.heroDescription")}
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body p-4 p-lg-5">
                    <form onSubmit={createRoadmap}>
                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          {t("careerRoadmap.form.careerLabel")}
                        </label>

                        <select
                          name="career"
                          className="form-select form-select-lg"
                          value={form.career}
                          onChange={handleChange}
                        >
                          <option value="">
                            {t("careerRoadmap.form.careerPlaceholder")}
                          </option>

                          <option value="Web Developer">
                            {t("careerRoadmap.careers.webDeveloper")}
                          </option>

                          <option value="App Developer">
                            {t("careerRoadmap.careers.appDeveloper")}
                          </option>

                          <option value="UI/UX Designer">
                            {t("careerRoadmap.careers.uiux")}
                          </option>

                          <option value="MIS / Business Technology">
                            {t("careerRoadmap.careers.mis")}
                          </option>

                          <option value="Software Developer">
                            {t("careerRoadmap.careers.softwareDeveloper")}
                          </option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          {t("careerRoadmap.form.levelLabel")}
                        </label>

                        <select
                          name="level"
                          className="form-select form-select-lg"
                          value={form.level}
                          onChange={handleChange}
                        >
                          <option value="">
                            {t("careerRoadmap.form.levelPlaceholder")}
                          </option>

                          <option value="Beginner">
                            {t("careerRoadmap.levels.beginner")}
                          </option>

                          <option value="Student">
                            {t("careerRoadmap.levels.student")}
                          </option>

                          <option value="Intermediate">
                            {t("careerRoadmap.levels.intermediate")}
                          </option>

                          <option value="Advanced">
                            {t("careerRoadmap.levels.advanced")}
                          </option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          {t("careerRoadmap.form.goalLabel")}
                        </label>

                        <select
                          name="goal"
                          className="form-select form-select-lg"
                          value={form.goal}
                          onChange={handleChange}
                        >
                          <option value="">
                            {t("careerRoadmap.form.goalPlaceholder")}
                          </option>

                          <option value="Learn the skills">
                            {t("careerRoadmap.goals.learnSkills")}
                          </option>

                          <option value="Build a portfolio">
                            {t("careerRoadmap.goals.buildPortfolio")}
                          </option>

                          <option value="Get an internship">
                            {t("careerRoadmap.goals.getInternship")}
                          </option>

                          <option value="Get a job">
                            {t("careerRoadmap.goals.getJob")}
                          </option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          {t("careerRoadmap.form.timeLabel")}
                        </label>

                        <select
                          name="time"
                          className="form-select form-select-lg"
                          value={form.time}
                          onChange={handleChange}
                        >
                          <option value="">
                            {t("careerRoadmap.form.timePlaceholder")}
                          </option>

                          <option value="30 minutes/day">
                            {t("careerRoadmap.time.30m")}
                          </option>

                          <option value="1 hour/day">
                            {t("careerRoadmap.time.1h")}
                          </option>

                          <option value="2 hours/day">
                            {t("careerRoadmap.time.2h")}
                          </option>

                          <option value="3+ hours/day">
                            {t("careerRoadmap.time.3h")}
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-danger btn-lg w-100"
                      >
                        <i className="bi bi-signpost-split me-2"></i>
                        {t("careerRoadmap.createButton")}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-5">
              <div className="col-md-4">
                <div className="card border-0 bg-primary-subtle rounded-4 h-100">
                  <div className="card-body p-4">
                    <i className="bi bi-bullseye text-primary fs-2"></i>

                    <h5 className="fw-bold mt-3">
                      {t("careerRoadmap.bottom.directionTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("careerRoadmap.bottom.directionDescription")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 bg-success-subtle rounded-4 h-100">
                  <div className="card-body p-4">
                    <i className="bi bi-list-check text-success fs-2"></i>

                    <h5 className="fw-bold mt-3">
                      {t("careerRoadmap.bottom.stepsTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("careerRoadmap.bottom.stepsDescription")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 bg-warning-subtle rounded-4 h-100">
                  <div className="card-body p-4">
                    <i className="bi bi-trophy text-warning fs-2"></i>

                    <h5 className="fw-bold mt-3">
                      {t("careerRoadmap.bottom.progressTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("careerRoadmap.bottom.progressDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
              <div>
                <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-2">
                  {t("careerRoadmap.badge")}
                </span>

                <h1 className="fw-bold mb-1">{getCareerLabel(form.career)}</h1>

                <p className="text-secondary mb-0">
                  {getLevelLabel(form.level)} → {getGoalLabel(form.goal)} →{" "}
                  {getTimeLabel(form.time)}
                </p>
              </div>

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={resetRoadmap}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i>
                {t("careerRoadmap.createNewButton")}
              </button>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold mb-0">
                    {t("careerRoadmap.progress.title")}
                  </h5>

                  <strong className="text-danger">{progress}%</strong>
                </div>

                <div
                  className="progress"
                  role="progressbar"
                  style={{ height: "12px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <p className="text-secondary small mt-2 mb-0">
                  {completedSteps.length} {t("careerRoadmap.progress.of")}{" "}
                  {roadmap.length} {t("careerRoadmap.progress.completed")}
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-8">
                <div className="d-grid gap-3">
                  {roadmap.map(function (step, index) {
                    const completed = completedSteps.includes(index);

                    return (
                      <div
                        className={`card border-0 shadow-sm rounded-4 ${
                          completed ? "bg-success-subtle" : ""
                        }`}
                        key={index}
                      >
                        <div className="card-body p-4">
                          <div className="d-flex gap-3">
                            <div>
                              <button
                                type="button"
                                className={`btn rounded-circle ${
                                  completed
                                    ? "btn-success"
                                    : "btn-outline-secondary"
                                }`}
                                style={{
                                  width: "45px",
                                  height: "45px",
                                }}
                                onClick={function () {
                                  toggleStep(index);
                                }}
                              >
                                {completed ? (
                                  <i className="bi bi-check-lg"></i>
                                ) : (
                                  index + 1
                                )}
                              </button>
                            </div>

                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-start gap-2">
                                <div>
                                  <span className="text-secondary small">
                                    {t("careerRoadmap.step")} {index + 1}
                                  </span>

                                  <h5
                                    className={`fw-bold mt-1 ${
                                      completed
                                        ? "text-success text-decoration-line-through"
                                        : ""
                                    }`}
                                  >
                                    {t(step.titleKey)}
                                  </h5>
                                </div>

                                {completed && (
                                  <span className="badge bg-success">
                                    {t("careerRoadmap.completed")}
                                  </span>
                                )}
                              </div>

                              <p className="text-secondary mb-0">
                                {t(step.descriptionKey)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 mb-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">
                      <i className="bi bi-info-circle text-danger me-2"></i>
                      {t("careerRoadmap.yourPlan")}
                    </h5>

                    <div className="mb-3">
                      <small className="text-secondary d-block">
                        {t("careerRoadmap.plan.career")}
                      </small>

                      <strong>{getCareerLabel(form.career)}</strong>
                    </div>

                    <div className="mb-3">
                      <small className="text-secondary d-block">
                        {t("careerRoadmap.plan.currentLevel")}
                      </small>

                      <strong>{getLevelLabel(form.level)}</strong>
                    </div>

                    <div className="mb-3">
                      <small className="text-secondary d-block">
                        {t("careerRoadmap.plan.mainGoal")}
                      </small>

                      <strong>{getGoalLabel(form.goal)}</strong>
                    </div>

                    <div>
                      <small className="text-secondary d-block">
                        {t("careerRoadmap.plan.availableTime")}
                      </small>

                      <strong>{getTimeLabel(form.time)}</strong>
                    </div>
                  </div>
                </div>

                <div className="card border-0 bg-danger-subtle rounded-4">
                  <div className="card-body p-4">
                    <i className="bi bi-lightbulb text-danger fs-2"></i>

                    <h5 className="fw-bold mt-3">
                      {t("careerRoadmap.keepGoing.title")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("careerRoadmap.keepGoing.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default CareerRoadmap;

