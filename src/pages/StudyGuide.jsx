import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function StudyGuide() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    subject: "",
    studyTime: "",
    difficulty: "",
    goal: "",
  });

  const [plan, setPlan] = useState(null);
  const [completedSessions, setCompletedSessions] = useState([]);

  const studyMethods = [
    {
      title: t("studyGuide.methods.activeRecall.title"),
      icon: "bi-lightning-charge",
      description: t("studyGuide.methods.activeRecall.description"),
    },
    {
      title: t("studyGuide.methods.practice.title"),
      icon: "bi-pencil-square",
      description: t("studyGuide.methods.practice.description"),
    },
    {
      title: t("studyGuide.methods.review.title"),
      icon: "bi-arrow-repeat",
      description: t("studyGuide.methods.review.description"),
    },
    {
      title: t("studyGuide.methods.explain.title"),
      icon: "bi-chat-left-text",
      description: t("studyGuide.methods.explain.description"),
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

  function createStudyPlan(event) {
    event.preventDefault();

    let sessions = 3;

    if (form.studyTime === "30 minutes") {
      sessions = 2;
    }

    if (form.studyTime === "1 hour") {
      sessions = 3;
    }

    if (form.studyTime === "2 hours") {
      sessions = 4;
    }

    if (form.studyTime === "3+ hours") {
      sessions = 5;
    }

    setPlan({
      subject: form.subject,
      studyTime: form.studyTime,
      difficulty: form.difficulty,
      goal: form.goal,
      sessions: sessions,
    });

    setCompletedSessions([]);
  }

  function toggleSession(sessionNumber) {
    setCompletedSessions(function (previousSessions) {
      if (previousSessions.includes(sessionNumber)) {
        return previousSessions.filter(function (number) {
          return number !== sessionNumber;
        });
      }

      return [...previousSessions, sessionNumber];
    });
  }

  function clearPlan() {
    setForm({
      subject: "",
      studyTime: "",
      difficulty: "",
      goal: "",
    });

    setPlan(null);
    setCompletedSessions([]);
  }

  const sessionData = [
    {
      number: 1,
      title: t("studyGuide.sessions.understand.title"),
      icon: "bi-book",
      color: "primary",
      description: t("studyGuide.sessions.understand.description"),
    },
    {
      number: 2,
      title: t("studyGuide.sessions.practice.title"),
      icon: "bi-pencil-square",
      color: "success",
      description: t("studyGuide.sessions.practice.description"),
    },
    {
      number: 3,
      title: t("studyGuide.sessions.recall.title"),
      icon: "bi-lightbulb",
      color: "warning",
      description: t("studyGuide.sessions.recall.description"),
    },
    {
      number: 4,
      title: t("studyGuide.sessions.review.title"),
      icon: "bi-arrow-repeat",
      color: "danger",
      description: t("studyGuide.sessions.review.description"),
    },
    {
      number: 5,
      title: t("studyGuide.sessions.test.title"),
      icon: "bi-check2-circle",
      color: "info",
      description: t("studyGuide.sessions.test.description"),
    },
  ];

  const activeSessions = plan ? sessionData.slice(0, plan.sessions) : [];

  const completedCount = completedSessions.length;

  const progress =
    activeSessions.length > 0
      ? Math.round((completedCount / activeSessions.length) * 100)
      : 0;

  function getStudyTimeLabel(value) {
    const labels = {
      "30 minutes": t("studyGuide.form.time30"),
      "1 hour": t("studyGuide.form.time1"),
      "2 hours": t("studyGuide.form.time2"),
      "3+ hours": t("studyGuide.form.time3"),
    };

    return labels[value] || value;
  }

  function getDifficultyLabel(value) {
    const labels = {
      Easy: t("studyGuide.form.easy"),
      Medium: t("studyGuide.form.medium"),
      Hard: t("studyGuide.form.hard"),
    };

    return labels[value] || value;
  }

  return (
    <main className="study-guide-page py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 mb-3">
            📚 {t("studyGuide.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("studyGuide.heroTitleLine1")}
            <br />
            {t("studyGuide.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("studyGuide.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          {/* Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-warning-subtle text-warning rounded-3 p-3 me-3">
                    <i className="bi bi-book fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("studyGuide.form.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("studyGuide.form.description")}
                    </p>
                  </div>
                </div>

                <form onSubmit={createStudyPlan}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("studyGuide.form.subject")}
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t("studyGuide.form.subjectPlaceholder")}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("studyGuide.form.availableTime")}
                    </label>

                    <select
                      name="studyTime"
                      value={form.studyTime}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("studyGuide.form.selectTime")}
                      </option>

                      <option value="30 minutes">
                        {t("studyGuide.form.time30")}
                      </option>

                      <option value="1 hour">
                        {t("studyGuide.form.time1")}
                      </option>

                      <option value="2 hours">
                        {t("studyGuide.form.time2")}
                      </option>

                      <option value="3+ hours">
                        {t("studyGuide.form.time3")}
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {t("studyGuide.form.difficulty")}
                    </label>

                    <select
                      name="difficulty"
                      value={form.difficulty}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">
                        {t("studyGuide.form.selectDifficulty")}
                      </option>

                      <option value="Easy">{t("studyGuide.form.easy")}</option>

                      <option value="Medium">
                        {t("studyGuide.form.medium")}
                      </option>

                      <option value="Hard">{t("studyGuide.form.hard")}</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("studyGuide.form.studyGoal")}
                    </label>

                    <textarea
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                      placeholder={t("studyGuide.form.goalPlaceholder")}
                      required
                    ></textarea>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg flex-grow-1"
                    >
                      <i className="bi bi-calendar-plus me-2"></i>
                      {t("studyGuide.form.createPlan")}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={clearPlan}
                      aria-label={t("studyGuide.form.reset")}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Plan */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                    <i className="bi bi-list-check fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("studyGuide.plan.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("studyGuide.plan.description")}
                    </p>
                  </div>
                </div>

                {!plan ? (
                  <div className="text-center py-5">
                    <i className="bi bi-journal-bookmark display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("studyGuide.plan.emptyTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("studyGuide.plan.emptyDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-warning-subtle rounded-4 p-4 mb-4">
                      <small className="text-secondary">
                        {t("studyGuide.plan.subjectLabel")}
                      </small>

                      <h3 className="fw-bold mt-1 mb-3">{plan.subject}</h3>

                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-warning text-dark">
                          {getStudyTimeLabel(plan.studyTime)}
                        </span>

                        <span className="badge bg-secondary">
                          {getDifficultyLabel(plan.difficulty)}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <small className="text-secondary">
                        {t("studyGuide.plan.goalLabel")}
                      </small>

                      <p className="fw-semibold mt-2 mb-0">{plan.goal}</p>
                    </div>

                    {/* Progress */}
                    <div className="bg-light rounded-4 p-3 mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>{t("studyGuide.plan.progress")}</strong>

                        <span className="fw-bold text-primary">
                          {progress}%
                        </span>
                      </div>

                      <div className="progress" style={{ height: "10px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>

                      <small className="text-secondary d-block mt-2">
                        {completedCount} {t("studyGuide.plan.of")}{" "}
                        {activeSessions.length}{" "}
                        {t("studyGuide.plan.sessionsCompleted")}
                      </small>
                    </div>

                    <h5 className="fw-bold mb-3">
                      {t("studyGuide.plan.recommendedSessions")}
                    </h5>

                    <div className="d-grid gap-2">
                      {activeSessions.map(function (session) {
                        const completed = completedSessions.includes(
                          session.number,
                        );

                        return (
                          <div
                            key={session.number}
                            className={`rounded-3 p-3 border ${
                              completed
                                ? "bg-success-subtle border-success"
                                : "bg-light"
                            }`}
                          >
                            <div className="d-flex align-items-start gap-3">
                              <div className="form-check mt-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={completed}
                                  onChange={function () {
                                    toggleSession(session.number);
                                  }}
                                  id={`session-${session.number}`}
                                />
                              </div>

                              <div className="flex-grow-1">
                                <label
                                  htmlFor={`session-${session.number}`}
                                  className={`fw-bold d-block ${
                                    completed
                                      ? "text-success text-decoration-line-through"
                                      : ""
                                  }`}
                                >
                                  <i
                                    className={`bi ${session.icon} text-${session.color} me-2`}
                                  ></i>
                                  {session.number}. {session.title}
                                </label>

                                <p className="text-secondary small mb-0 mt-1">
                                  {session.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {progress === 100 && (
                      <div className="alert alert-success mt-4 mb-0">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        {t("studyGuide.plan.completedMessage")}
                      </div>
                    )}

                    {progress < 100 && (
                      <div className="alert alert-primary mt-4 mb-0">
                        <i className="bi bi-lightbulb me-2"></i>
                        {t("studyGuide.plan.availableTimeMessage")}{" "}
                        <strong>
                          {plan.sessions} {t("studyGuide.plan.studySessions")}
                        </strong>
                        {t("studyGuide.plan.focusMessage")}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Study Methods */}
        <section className="mt-5">
          <div className="text-center mb-4">
            <span className="text-warning-emphasis fw-semibold">
              {t("studyGuide.methodsLabel")}
            </span>

            <h2 className="fw-bold mt-2">{t("studyGuide.methodsTitle")}</h2>
          </div>

          <div className="row g-4">
            {studyMethods.map(function (method, index) {
              return (
                <div className="col-md-6 col-lg-3" key={method.title}>
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-subtle text-primary rounded-3 p-3 d-inline-block">
                        <i className={`bi ${method.icon} fs-4`}></i>
                      </div>

                      <h5 className="fw-bold mt-3">
                        {index + 1}. {method.title}
                      </h5>

                      <p className="text-secondary mb-0">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Info */}
        <section className="mt-5">
          <div className="bg-primary-subtle rounded-4 p-4 p-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <i className="bi bi-stars text-primary fs-2"></i>

                <h3 className="fw-bold mt-3">{t("studyGuide.bottom.title")}</h3>

                <p className="text-secondary mb-0">
                  {t("studyGuide.bottom.description")}
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <span className="badge bg-primary fs-6 px-3 py-2">
                  {t("studyGuide.bottom.badge")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default StudyGuide;
