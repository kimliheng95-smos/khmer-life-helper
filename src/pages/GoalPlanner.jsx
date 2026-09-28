import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function GoalPlanner() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    goal: "",
    category: "",
    deadline: "",
    reason: "",
    firstStep: "",
  });

  const [goalData, setGoalData] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      id: 1,
      title: t("goalPlanner.steps.1.title"),
      description: t("goalPlanner.steps.1.description"),
    },
    {
      id: 2,
      title: t("goalPlanner.steps.2.title"),
      description: t("goalPlanner.steps.2.description"),
    },
    {
      id: 3,
      title: t("goalPlanner.steps.3.title"),
      description: t("goalPlanner.steps.3.description"),
    },
    {
      id: 4,
      title: t("goalPlanner.steps.4.title"),
      description: t("goalPlanner.steps.4.description"),
    },
    {
      id: 5,
      title: t("goalPlanner.steps.5.title"),
      description: t("goalPlanner.steps.5.description"),
    },
  ];

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

  function createGoal(event) {
    event.preventDefault();

    setGoalData({
      goal: form.goal,
      category: form.category,
      deadline: form.deadline,
      reason: form.reason,
      firstStep: form.firstStep,
    });

    setCompletedSteps([]);
  }

  function toggleStep(stepId) {
    setCompletedSteps(function (previousSteps) {
      if (previousSteps.includes(stepId)) {
        return previousSteps.filter(function (id) {
          return id !== stepId;
        });
      }

      return [...previousSteps, stepId];
    });
  }

  function resetGoal() {
    setForm({
      goal: "",
      category: "",
      deadline: "",
      reason: "",
      firstStep: "",
    });

    setGoalData(null);
    setCompletedSteps([]);
  }

  const progress = goalData ? (completedSteps.length / steps.length) * 100 : 0;

  return (
    <main className="goal-planner-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
            🎯 {t("goalPlanner.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("goalPlanner.heroTitleLine1")}
            <br />
            {t("goalPlanner.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("goalPlanner.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-danger-subtle text-danger rounded-3 p-3 me-3">
                    <i className="bi bi-bullseye fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("goalPlanner.form.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("goalPlanner.form.description")}
                    </p>
                  </div>
                </div>

                <form onSubmit={createGoal}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("goalPlanner.form.goalLabel")}
                    </label>

                    <input
                      type="text"
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t("goalPlanner.form.goalPlaceholder")}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("goalPlanner.form.categoryLabel")}
                    </label>

                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("goalPlanner.form.categoryPlaceholder")}
                      </option>

                      <option value="Education">
                        {t("goalPlanner.categories.education")}
                      </option>

                      <option value="Career">
                        {t("goalPlanner.categories.career")}
                      </option>

                      <option value="Finance">
                        {t("goalPlanner.categories.finance")}
                      </option>

                      <option value="Health">
                        {t("goalPlanner.categories.health")}
                      </option>

                      <option value="Personal Growth">
                        {t("goalPlanner.categories.personalGrowth")}
                      </option>

                      <option value="Other">
                        {t("goalPlanner.categories.other")}
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("goalPlanner.form.deadlineLabel")}
                    </label>

                    <input
                      type="date"
                      name="deadline"
                      value={form.deadline}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("goalPlanner.form.reasonLabel")}
                    </label>

                    <textarea
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                      placeholder={t("goalPlanner.form.reasonPlaceholder")}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("goalPlanner.form.firstStepLabel")}
                    </label>

                    <input
                      type="text"
                      name="firstStep"
                      value={form.firstStep}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t("goalPlanner.form.firstStepPlaceholder")}
                      required
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg flex-grow-1"
                    >
                      <i className="bi bi-bullseye me-2"></i>
                      {t("goalPlanner.form.createButton")}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={resetGoal}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                    <i className="bi bi-graph-up-arrow fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("goalPlanner.result.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("goalPlanner.result.description")}
                    </p>
                  </div>
                </div>

                {!goalData ? (
                  <div className="text-center py-5">
                    <i className="bi bi-trophy display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("goalPlanner.result.emptyTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("goalPlanner.result.emptyDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-danger-subtle rounded-4 p-4 mb-4">
                      <small className="text-secondary">
                        {t("goalPlanner.result.yourGoal")}
                      </small>

                      <h4 className="fw-bold mt-2 mb-3">{goalData.goal}</h4>

                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-danger">
                          {goalData.category === "Education"
                            ? t("goalPlanner.categories.education")
                            : goalData.category === "Career"
                              ? t("goalPlanner.categories.career")
                              : goalData.category === "Finance"
                                ? t("goalPlanner.categories.finance")
                                : goalData.category === "Health"
                                  ? t("goalPlanner.categories.health")
                                  : goalData.category === "Personal Growth"
                                    ? t("goalPlanner.categories.personalGrowth")
                                    : t("goalPlanner.categories.other")}
                        </span>

                        <span className="badge bg-secondary">
                          {t("goalPlanner.result.deadline")}:{" "}
                          {goalData.deadline}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">
                          {t("goalPlanner.result.progress")}
                        </span>

                        <span className="text-secondary">
                          {completedSteps.length}/{steps.length}
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
                        {t("goalPlanner.result.completed")}
                      </small>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold">
                        {t("goalPlanner.result.actionSteps")}
                      </h6>

                      <div className="d-grid gap-2 mt-3">
                        {steps.map(function (step) {
                          const isCompleted = completedSteps.includes(step.id);

                          return (
                            <button
                              key={step.id}
                              type="button"
                              className={`btn text-start border rounded-3 p-3 ${
                                isCompleted ? "bg-success-subtle" : "bg-white"
                              }`}
                              onClick={function () {
                                toggleStep(step.id);
                              }}
                            >
                              <div className="d-flex align-items-start">
                                <i
                                  className={`bi ${
                                    isCompleted
                                      ? "bi-check-circle-fill text-success"
                                      : "bi-circle text-secondary"
                                  } fs-5 me-3`}
                                ></i>

                                <div>
                                  <strong
                                    className={
                                      isCompleted
                                        ? "text-decoration-line-through"
                                        : ""
                                    }
                                  >
                                    {t("goalPlanner.result.step")} {step.id}:{" "}
                                    {step.title}
                                  </strong>

                                  <div className="small text-secondary mt-1">
                                    {step.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="alert alert-primary mb-0">
                      <i className="bi bi-lightbulb me-2"></i>
                      <strong>{t("goalPlanner.result.firstStep")}:</strong>{" "}
                      {goalData.firstStep}
                    </div>

                    {goalData.reason && (
                      <div className="mt-3 p-3 bg-light rounded-3">
                        <small className="text-secondary">
                          {t("goalPlanner.result.whyThisMatters")}
                        </small>

                        <p className="mb-0 mt-1">{goalData.reason}</p>
                      </div>
                    )}

                    {completedSteps.length === steps.length && (
                      <div className="alert alert-success mt-3 mb-0">
                        <i className="bi bi-trophy-fill me-2"></i>
                        {t("goalPlanner.result.congratulations")}
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
                <i className="bi bi-bullseye text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("goalPlanner.bottom.specific.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("goalPlanner.bottom.specific.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-list-check text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("goalPlanner.bottom.steps.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("goalPlanner.bottom.steps.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-graph-up-arrow text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("goalPlanner.bottom.progress.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("goalPlanner.bottom.progress.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GoalPlanner;

