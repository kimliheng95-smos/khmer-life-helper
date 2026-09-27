import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function LearningRoadmap() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    field: "",
    level: "",
    goal: "",
    time: "",
  });

  const [roadmap, setRoadmap] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);

  const roadmapData = {
    "Web Development": [
      {
        title: t("learningRoadmap.steps.web.htmlCss.title"),
        description: t("learningRoadmap.steps.web.htmlCss.description"),
      },
      {
        title: t("learningRoadmap.steps.web.javascript.title"),
        description: t("learningRoadmap.steps.web.javascript.description"),
      },
      {
        title: t("learningRoadmap.steps.web.responsive.title"),
        description: t("learningRoadmap.steps.web.responsive.description"),
      },
      {
        title: t("learningRoadmap.steps.web.gitGithub.title"),
        description: t("learningRoadmap.steps.web.gitGithub.description"),
      },
      {
        title: t("learningRoadmap.steps.web.react.title"),
        description: t("learningRoadmap.steps.web.react.description"),
      },
    ],

    "App Development": [
      {
        title: t("learningRoadmap.steps.app.programming.title"),
        description: t("learningRoadmap.steps.app.programming.description"),
      },
      {
        title: t("learningRoadmap.steps.app.dart.title"),
        description: t("learningRoadmap.steps.app.dart.description"),
      },
      {
        title: t("learningRoadmap.steps.app.flutter.title"),
        description: t("learningRoadmap.steps.app.flutter.description"),
      },
      {
        title: t("learningRoadmap.steps.app.apiFirebase.title"),
        description: t("learningRoadmap.steps.app.apiFirebase.description"),
      },
      {
        title: t("learningRoadmap.steps.app.projects.title"),
        description: t("learningRoadmap.steps.app.projects.description"),
      },
    ],

    "UI/UX Design": [
      {
        title: t("learningRoadmap.steps.uiux.fundamentals.title"),
        description: t("learningRoadmap.steps.uiux.fundamentals.description"),
      },
      {
        title: t("learningRoadmap.steps.uiux.figma.title"),
        description: t("learningRoadmap.steps.uiux.figma.description"),
      },
      {
        title: t("learningRoadmap.steps.uiux.research.title"),
        description: t("learningRoadmap.steps.uiux.research.description"),
      },
      {
        title: t("learningRoadmap.steps.uiux.wireframes.title"),
        description: t("learningRoadmap.steps.uiux.wireframes.description"),
      },
      {
        title: t("learningRoadmap.steps.uiux.portfolio.title"),
        description: t("learningRoadmap.steps.uiux.portfolio.description"),
      },
    ],

    "MIS / Business Technology": [
      {
        title: t("learningRoadmap.steps.mis.business.title"),
        description: t("learningRoadmap.steps.mis.business.description"),
      },
      {
        title: t("learningRoadmap.steps.mis.database.title"),
        description: t("learningRoadmap.steps.mis.database.description"),
      },
      {
        title: t("learningRoadmap.steps.mis.informationSystems.title"),
        description: t(
          "learningRoadmap.steps.mis.informationSystems.description",
        ),
      },
      {
        title: t("learningRoadmap.steps.mis.businessAnalysis.title"),
        description: t(
          "learningRoadmap.steps.mis.businessAnalysis.description",
        ),
      },
      {
        title: t("learningRoadmap.steps.mis.projects.title"),
        description: t("learningRoadmap.steps.mis.projects.description"),
      },
    ],
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(function (previousForm) {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  }

  function createRoadmap(event) {
    event.preventDefault();

    const steps = roadmapData[form.field] || [];

    setRoadmap({
      field: form.field,
      level: form.level,
      goal: form.goal,
      time: form.time,
      steps: steps,
    });

    setCompletedSteps([]);
  }

  function toggleStep(index) {
    setCompletedSteps(function (previousSteps) {
      if (previousSteps.includes(index)) {
        return previousSteps.filter(function (stepIndex) {
          return stepIndex !== index;
        });
      }

      return [...previousSteps, index];
    });
  }

  function resetRoadmap() {
    setForm({
      field: "",
      level: "",
      goal: "",
      time: "",
    });

    setRoadmap(null);
    setCompletedSteps([]);
  }

  function getFieldLabel(field) {
    const fieldLabels = {
      "Web Development": t("learningRoadmap.fields.web"),
      "App Development": t("learningRoadmap.fields.app"),
      "UI/UX Design": t("learningRoadmap.fields.uiux"),
      "MIS / Business Technology": t("learningRoadmap.fields.mis"),
    };

    return fieldLabels[field] || field;
  }

  function getLevelLabel(level) {
    const levelLabels = {
      Beginner: t("learningRoadmap.levels.beginner"),
      Intermediate: t("learningRoadmap.levels.intermediate"),
      Advanced: t("learningRoadmap.levels.advanced"),
    };

    return levelLabels[level] || level;
  }

  function getTimeLabel(time) {
    const timeLabels = {
      "30 minutes/day": t("learningRoadmap.times.thirtyMinutes"),
      "1 hour/day": t("learningRoadmap.times.oneHour"),
      "2 hours/day": t("learningRoadmap.times.twoHours"),
      "3+ hours/day": t("learningRoadmap.times.threeHours"),
    };

    return timeLabels[time] || time;
  }

  const progress = roadmap
    ? (completedSteps.length / roadmap.steps.length) * 100
    : 0;

  return (
    <main className="learning-roadmap-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
            🗺️ {t("learningRoadmap.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("learningRoadmap.heroTitleLine1")}
            <br />
            {t("learningRoadmap.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("learningRoadmap.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-danger-subtle text-danger rounded-3 p-3 me-3">
                    <i className="bi bi-signpost-split fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("learningRoadmap.form.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("learningRoadmap.form.description")}
                    </p>
                  </div>
                </div>

                <form onSubmit={createRoadmap}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("learningRoadmap.form.learningField")}
                    </label>

                    <select
                      name="field"
                      value={form.field}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("learningRoadmap.form.selectField")}
                      </option>

                      <option value="Web Development">
                        {t("learningRoadmap.fields.web")}
                      </option>

                      <option value="App Development">
                        {t("learningRoadmap.fields.app")}
                      </option>

                      <option value="UI/UX Design">
                        {t("learningRoadmap.fields.uiux")}
                      </option>

                      <option value="MIS / Business Technology">
                        {t("learningRoadmap.fields.mis")}
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("learningRoadmap.form.currentLevel")}
                    </label>

                    <select
                      name="level"
                      value={form.level}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("learningRoadmap.form.selectLevel")}
                      </option>

                      <option value="Beginner">
                        {t("learningRoadmap.levels.beginner")}
                      </option>

                      <option value="Intermediate">
                        {t("learningRoadmap.levels.intermediate")}
                      </option>

                      <option value="Advanced">
                        {t("learningRoadmap.levels.advanced")}
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("learningRoadmap.form.learningGoal")}
                    </label>

                    <textarea
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                      placeholder={t("learningRoadmap.form.goalPlaceholder")}
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("learningRoadmap.form.availableTime")}
                    </label>

                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("learningRoadmap.form.selectTime")}
                      </option>

                      <option value="30 minutes/day">
                        {t("learningRoadmap.times.thirtyMinutes")}
                      </option>

                      <option value="1 hour/day">
                        {t("learningRoadmap.times.oneHour")}
                      </option>

                      <option value="2 hours/day">
                        {t("learningRoadmap.times.twoHours")}
                      </option>

                      <option value="3+ hours/day">
                        {t("learningRoadmap.times.threeHours")}
                      </option>
                    </select>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg flex-grow-1"
                    >
                      <i className="bi bi-map me-2"></i>
                      {t("learningRoadmap.form.createRoadmap")}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={resetRoadmap}
                      aria-label={t("learningRoadmap.form.reset")}
                      title={t("learningRoadmap.form.reset")}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                    <i className="bi bi-map fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("learningRoadmap.result.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("learningRoadmap.result.description")}
                    </p>
                  </div>
                </div>

                {!roadmap ? (
                  <div className="text-center py-5">
                    <i className="bi bi-signpost-2 display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("learningRoadmap.empty.title")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("learningRoadmap.empty.description")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-danger-subtle rounded-4 p-4 mb-4">
                      <small className="text-secondary">
                        {t("learningRoadmap.result.target")}
                      </small>

                      <h3 className="fw-bold mt-1 mb-3">
                        {getFieldLabel(roadmap.field)}
                      </h3>

                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-danger">
                          {getLevelLabel(roadmap.level)}
                        </span>

                        <span className="badge bg-secondary">
                          {getTimeLabel(roadmap.time)}
                        </span>
                      </div>

                      <p className="mb-0 mt-3">
                        <strong>{t("learningRoadmap.result.goal")}:</strong>{" "}
                        {roadmap.goal}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">
                          {t("learningRoadmap.result.progress")}
                        </span>

                        <span className="text-secondary">
                          {completedSteps.length}/{roadmap.steps.length}
                        </span>
                      </div>

                      <div className="progress" style={{ height: "10px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{
                            width: `${progress}%`,
                          }}
                        ></div>
                      </div>

                      <small className="text-secondary">
                        {progress.toFixed(0)}%{" "}
                        {t("learningRoadmap.result.completed")}
                      </small>
                    </div>

                    <div className="d-grid gap-3">
                      {roadmap.steps.map(function (step, index) {
                        const isCompleted = completedSteps.includes(index);

                        return (
                          <button
                            type="button"
                            key={index}
                            className={`btn text-start border rounded-4 p-3 ${
                              isCompleted ? "bg-success-subtle" : "bg-white"
                            }`}
                            onClick={function () {
                              toggleStep(index);
                            }}
                          >
                            <div className="d-flex align-items-start">
                              <div className="me-3">
                                <span
                                  className={`rounded-circle d-flex align-items-center justify-content-center ${
                                    isCompleted
                                      ? "bg-success text-white"
                                      : "bg-danger text-white"
                                  }`}
                                  style={{
                                    width: "38px",
                                    height: "38px",
                                  }}
                                >
                                  {isCompleted ? (
                                    <i className="bi bi-check-lg"></i>
                                  ) : (
                                    index + 1
                                  )}
                                </span>
                              </div>

                              <div>
                                <h6
                                  className={`fw-bold mb-1 ${
                                    isCompleted
                                      ? "text-decoration-line-through text-secondary"
                                      : ""
                                  }`}
                                >
                                  {step.title}
                                </h6>

                                <p className="text-secondary small mb-0">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {completedSteps.length === roadmap.steps.length && (
                      <div className="alert alert-success mt-4 mb-0">
                        <i className="bi bi-trophy-fill me-2"></i>
                        {t("learningRoadmap.result.completedMessage")}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="card border-0 bg-primary-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-1-circle text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("learningRoadmap.tips.fundamentals.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("learningRoadmap.tips.fundamentals.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-code-square text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("learningRoadmap.tips.projects.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("learningRoadmap.tips.projects.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-arrow-up-right-circle text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("learningRoadmap.tips.improve.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("learningRoadmap.tips.improve.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LearningRoadmap;
