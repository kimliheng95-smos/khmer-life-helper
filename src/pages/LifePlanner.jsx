import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function LifePlanner() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    day: "",
    priority: "",
    study: "",
    work: "",
    exercise: "",
    personal: "",
    sleep: "",
  });

  const [plan, setPlan] = useState(null);

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

  function createPlan(event) {
    event.preventDefault();

    setPlan({
      day: form.day,
      priority: form.priority,
      study: form.study,
      work: form.work,
      exercise: form.exercise,
      personal: form.personal,
      sleep: form.sleep,
    });
  }

  function clearPlan() {
    setForm({
      day: "",
      priority: "",
      study: "",
      work: "",
      exercise: "",
      personal: "",
      sleep: "",
    });

    setPlan(null);
  }

  return (
    <main className="life-planner-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
            📅 {t("lifePlanner.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("lifePlanner.heroTitleLine1")}
            <br />
            {t("lifePlanner.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("lifePlanner.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success-subtle text-success rounded-3 p-3 me-3">
                    <i className="bi bi-calendar-check fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("lifePlanner.form.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("lifePlanner.form.description")}
                    </p>
                  </div>
                </div>

                <form onSubmit={createPlan}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("lifePlanner.form.day")}
                    </label>

                    <input
                      type="date"
                      name="day"
                      value={form.day}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("lifePlanner.form.priority")}
                    </label>

                    <input
                      type="text"
                      name="priority"
                      value={form.priority}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t("lifePlanner.form.priorityPlaceholder")}
                      required
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        {t("lifePlanner.form.study")}
                      </label>

                      <select
                        name="study"
                        value={form.study}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">
                          {t("lifePlanner.form.selectTime")}
                        </option>
                        <option value="30 minutes">
                          {t("lifePlanner.time.30m")}
                        </option>
                        <option value="1 hour">
                          {t("lifePlanner.time.1h")}
                        </option>
                        <option value="2 hours">
                          {t("lifePlanner.time.2h")}
                        </option>
                        <option value="3 hours">
                          {t("lifePlanner.time.3h")}
                        </option>
                        <option value="4+ hours">
                          {t("lifePlanner.time.4h")}
                        </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("lifePlanner.form.work")}
                      </label>

                      <select
                        name="work"
                        value={form.work}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">
                          {t("lifePlanner.form.selectTime")}
                        </option>
                        <option value="30 minutes">
                          {t("lifePlanner.time.30m")}
                        </option>
                        <option value="1 hour">
                          {t("lifePlanner.time.1h")}
                        </option>
                        <option value="2 hours">
                          {t("lifePlanner.time.2h")}
                        </option>
                        <option value="3 hours">
                          {t("lifePlanner.time.3h")}
                        </option>
                        <option value="4+ hours">
                          {t("lifePlanner.time.4h")}
                        </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("lifePlanner.form.exercise")}
                      </label>

                      <select
                        name="exercise"
                        value={form.exercise}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">
                          {t("lifePlanner.form.selectTime")}
                        </option>
                        <option value="None">
                          {t("lifePlanner.time.none")}
                        </option>
                        <option value="15 minutes">
                          {t("lifePlanner.time.15m")}
                        </option>
                        <option value="30 minutes">
                          {t("lifePlanner.time.30m")}
                        </option>
                        <option value="1 hour">
                          {t("lifePlanner.time.1h")}
                        </option>
                        <option value="1+ hour">
                          {t("lifePlanner.time.1hPlus")}
                        </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("lifePlanner.form.personal")}
                      </label>

                      <select
                        name="personal"
                        value={form.personal}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">
                          {t("lifePlanner.form.selectTime")}
                        </option>
                        <option value="30 minutes">
                          {t("lifePlanner.time.30m")}
                        </option>
                        <option value="1 hour">
                          {t("lifePlanner.time.1h")}
                        </option>
                        <option value="2 hours">
                          {t("lifePlanner.time.2h")}
                        </option>
                        <option value="3+ hours">
                          {t("lifePlanner.time.3hPlus")}
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        {t("lifePlanner.form.sleep")}
                      </label>

                      <select
                        name="sleep"
                        value={form.sleep}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">
                          {t("lifePlanner.form.selectSleep")}
                        </option>
                        <option value="6 hours">
                          {t("lifePlanner.sleep.6h")}
                        </option>
                        <option value="7 hours">
                          {t("lifePlanner.sleep.7h")}
                        </option>
                        <option value="8 hours">
                          {t("lifePlanner.sleep.8h")}
                        </option>
                        <option value="9 hours">
                          {t("lifePlanner.sleep.9h")}
                        </option>
                        <option value="10+ hours">
                          {t("lifePlanner.sleep.10h")}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg flex-grow-1"
                    >
                      <i className="bi bi-calendar-plus me-2"></i>
                      {t("lifePlanner.form.createPlan")}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={clearPlan}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                    <i className="bi bi-list-check fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("lifePlanner.result.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("lifePlanner.result.description")}
                    </p>
                  </div>
                </div>

                {!plan ? (
                  <div className="text-center py-5">
                    <i className="bi bi-calendar2-week display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("lifePlanner.result.emptyTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("lifePlanner.result.emptyDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="alert alert-success">
                      <i className="bi bi-calendar-check me-2"></i>
                      {t("lifePlanner.result.planFor")}{" "}
                      <strong>{plan.day}</strong>
                    </div>

                    <div className="mb-4">
                      <small className="text-secondary">
                        {t("lifePlanner.result.mainPriority")}
                      </small>

                      <h5 className="fw-bold mt-1">{plan.priority}</h5>
                    </div>

                    <div className="list-group list-group-flush">
                      <div className="list-group-item px-0 d-flex justify-content-between">
                        <span>
                          <i className="bi bi-book me-2 text-primary"></i>
                          {t("lifePlanner.result.study")}
                        </span>

                        <strong>
                          {plan.study || t("lifePlanner.result.notSet")}
                        </strong>
                      </div>

                      <div className="list-group-item px-0 d-flex justify-content-between">
                        <span>
                          <i className="bi bi-briefcase me-2 text-success"></i>
                          {t("lifePlanner.result.work")}
                        </span>

                        <strong>
                          {plan.work || t("lifePlanner.result.notSet")}
                        </strong>
                      </div>

                      <div className="list-group-item px-0 d-flex justify-content-between">
                        <span>
                          <i className="bi bi-heart-pulse me-2 text-danger"></i>
                          {t("lifePlanner.result.exercise")}
                        </span>

                        <strong>
                          {plan.exercise || t("lifePlanner.result.notSet")}
                        </strong>
                      </div>

                      <div className="list-group-item px-0 d-flex justify-content-between">
                        <span>
                          <i className="bi bi-person me-2 text-warning"></i>
                          {t("lifePlanner.result.personal")}
                        </span>

                        <strong>
                          {plan.personal || t("lifePlanner.result.notSet")}
                        </strong>
                      </div>

                      <div className="list-group-item px-0 d-flex justify-content-between">
                        <span>
                          <i className="bi bi-moon-stars me-2 text-info"></i>
                          {t("lifePlanner.result.sleep")}
                        </span>

                        <strong>
                          {plan.sleep || t("lifePlanner.result.notSet")}
                        </strong>
                      </div>
                    </div>

                    <div className="alert alert-primary mt-4 mb-0">
                      <i className="bi bi-lightbulb me-2"></i>
                      {t("lifePlanner.result.tip")}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card border-0 bg-primary-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-bullseye text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("lifePlanner.bottom.priorities.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("lifePlanner.bottom.priorities.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-clock text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("lifePlanner.bottom.time.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("lifePlanner.bottom.time.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-stars text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("lifePlanner.bottom.consistency.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("lifePlanner.bottom.consistency.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LifePlanner;

