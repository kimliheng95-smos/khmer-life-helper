import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function InterviewPractice() {
  const { t } = useLanguage();

  const questions = [
    {
      id: 1,
      category: "General",
      question: "Tell me about yourself.",
      tip: "Give a short introduction about your education, skills, projects, and career goal.",
      questionKey: "tellAboutYourself",
      tipKey: "tellAboutYourself",
    },
    {
      id: 2,
      category: "General",
      question: "Why do you want this internship?",
      tip: "Explain what you want to learn and how the internship connects to your career goal.",
      questionKey: "whyInternship",
      tipKey: "whyInternship",
    },
    {
      id: 3,
      category: "Skills",
      question: "What are your strongest technical skills?",
      tip: "Mention 2–4 relevant skills and briefly explain how you have used them.",
      questionKey: "technicalSkills",
      tipKey: "technicalSkills",
    },
    {
      id: 4,
      category: "Projects",
      question: "Tell me about a project you have worked on.",
      tip: "Explain the project goal, your role, technologies used, and what you learned.",
      questionKey: "project",
      tipKey: "project",
    },
    {
      id: 5,
      category: "Problem Solving",
      question: "How do you solve a problem when you do not know the answer?",
      tip: "Show that you can research, break the problem into smaller parts, test solutions, and ask for help when needed.",
      questionKey: "problemSolving",
      tipKey: "problemSolving",
    },
    {
      id: 6,
      category: "Teamwork",
      question: "How do you work with other people?",
      tip: "Talk about communication, listening, sharing responsibilities, and helping teammates.",
      questionKey: "teamwork",
      tipKey: "teamwork",
    },
    {
      id: 7,
      category: "Strengths",
      question: "What is one of your strengths?",
      tip: "Choose a real strength and support it with a short example.",
      questionKey: "strength",
      tipKey: "strength",
    },
    {
      id: 8,
      category: "Weaknesses",
      question: "What is one area you want to improve?",
      tip: "Choose something genuine and explain what you are doing to improve it.",
      questionKey: "improve",
      tipKey: "improve",
    },
    {
      id: 9,
      category: "Career",
      question: "Where do you see yourself in the next few years?",
      tip: "Connect your answer to the skills, experience, and career direction you want to develop.",
      questionKey: "future",
      tipKey: "future",
    },
    {
      id: 10,
      category: "Closing",
      question: "Why should we choose you?",
      tip: "Summarize your relevant skills, willingness to learn, projects, and the value you can bring.",
      questionKey: "chooseYou",
      tipKey: "chooseYou",
    },
  ];

  const categoryKeys = {
    All: "all",
    General: "general",
    Skills: "skills",
    Projects: "projects",
    "Problem Solving": "problemSolving",
    Teamwork: "teamwork",
    Strengths: "strengths",
    Weaknesses: "weaknesses",
    Career: "career",
    Closing: "closing",
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState({});
  const [showTip, setShowTip] = useState(false);

  const categories = ["All"];

  questions.forEach(function (item) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  const filteredQuestions =
    selectedCategory === "All"
      ? questions
      : questions.filter(function (item) {
          return item.category === selectedCategory;
        });

  function getCategoryText(category) {
    return t(`interviewPractice.categories.${categoryKeys[category]}`);
  }

  function selectQuestion(question) {
    setSelectedQuestion(question);
    setAnswer(answers[question.id] || "");
    setShowTip(false);
  }

  function saveAnswer() {
    if (!selectedQuestion) {
      return;
    }

    setAnswers(function (previousAnswers) {
      return {
        ...previousAnswers,
        [selectedQuestion.id]: answer,
      };
    });
  }

  function clearAnswer() {
    if (!selectedQuestion) {
      return;
    }

    setAnswers(function (previousAnswers) {
      const updatedAnswers = {
        ...previousAnswers,
      };

      delete updatedAnswers[selectedQuestion.id];

      return updatedAnswers;
    });

    setAnswer("");
  }

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  return (
    <main className="interview-practice-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
            <i className="bi bi-chat-dots me-2"></i>
            {t("interviewPractice.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("interviewPractice.heroTitle")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("interviewPractice.heroDescription")}
          </p>
        </div>

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h5 className="fw-bold mb-2">
                  {t("interviewPractice.progressTitle")}
                </h5>

                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <small className="text-secondary">
                  {answeredCount}/{questions.length}{" "}
                  {t("interviewPractice.questionsPracticed")}
                </small>
              </div>

              <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <span className="badge bg-success fs-6 px-3 py-2">
                  {progress.toFixed(0)}% {t("interviewPractice.complete")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2">
            {categories.map(function (category) {
              return (
                <button
                  type="button"
                  key={category}
                  className={`btn ${
                    selectedCategory === category
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={function () {
                    setSelectedCategory(category);
                  }}
                >
                  {getCategoryText(category)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("interviewPractice.questionsTitle")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("interviewPractice.questionsDescription")}
                    </p>
                  </div>

                  <span className="badge bg-light text-dark">
                    {filteredQuestions.length}
                  </span>
                </div>

                <div className="d-grid gap-3">
                  {filteredQuestions.map(function (question, index) {
                    const isAnswered = answers[question.id];

                    return (
                      <button
                        type="button"
                        key={question.id}
                        className={`btn text-start border rounded-4 p-3 ${
                          selectedQuestion?.id === question.id
                            ? "border-success bg-success-subtle"
                            : "bg-white"
                        }`}
                        onClick={function () {
                          selectQuestion(question);
                        }}
                      >
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            <span
                              className={`rounded-circle d-flex align-items-center justify-content-center ${
                                isAnswered
                                  ? "bg-success text-white"
                                  : "bg-light text-dark"
                              }`}
                              style={{
                                width: "38px",
                                height: "38px",
                              }}
                            >
                              {isAnswered ? (
                                <i className="bi bi-check-lg"></i>
                              ) : (
                                index + 1
                              )}
                            </span>
                          </div>

                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between gap-2">
                              <h6 className="fw-bold mb-1">
                                {t(
                                  `interviewPractice.questions.${question.questionKey}.question`,
                                )}
                              </h6>

                              {isAnswered && (
                                <i className="bi bi-check-circle-fill text-success"></i>
                              )}
                            </div>

                            <span className="badge bg-secondary-subtle text-secondary">
                              {getCategoryText(question.category)}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                {!selectedQuestion ? (
                  <div className="text-center py-5">
                    <i className="bi bi-person-workspace display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("interviewPractice.selectQuestion")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("interviewPractice.selectQuestionDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div>
                        <span className="badge bg-success-subtle text-success mb-2">
                          {getCategoryText(selectedQuestion.category)}
                        </span>

                        <h4 className="fw-bold mb-0">
                          {t(
                            `interviewPractice.questions.${selectedQuestion.questionKey}.question`,
                          )}
                        </h4>
                      </div>

                      <span className="badge bg-light text-dark">
                        {t("interviewPractice.question")} {selectedQuestion.id}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        {t("interviewPractice.yourAnswer")}
                      </label>

                      <textarea
                        className="form-control"
                        rows="8"
                        value={answer}
                        onChange={function (event) {
                          setAnswer(event.target.value);
                        }}
                        placeholder={t("interviewPractice.answerPlaceholder")}
                      ></textarea>

                      <small className="text-secondary">
                        {t("interviewPractice.answerTip")}
                      </small>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={saveAnswer}
                        disabled={!answer.trim()}
                      >
                        <i className="bi bi-check2 me-2"></i>
                        {t("interviewPractice.saveAnswer")}
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={clearAnswer}
                        disabled={!answers[selectedQuestion.id]}
                      >
                        <i className="bi bi-trash me-2"></i>
                        {t("interviewPractice.clearAnswer")}
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={function () {
                          setShowTip(!showTip);
                        }}
                      >
                        <i className="bi bi-lightbulb me-2"></i>
                        {showTip
                          ? t("interviewPractice.hideTip")
                          : t("interviewPractice.showTip")}
                      </button>
                    </div>

                    {showTip && (
                      <div className="alert alert-primary mb-0">
                        <div className="d-flex">
                          <i className="bi bi-lightbulb-fill me-2"></i>

                          <div>
                            <strong>
                              {t("interviewPractice.practiceTip")}
                            </strong>

                            <p className="mb-0 mt-1">
                              {t(
                                `interviewPractice.questions.${selectedQuestion.tipKey}.tip`,
                              )}
                            </p>
                          </div>
                        </div>
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
                <i className="bi bi-person-check text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("interviewPractice.beYourself.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("interviewPractice.beYourself.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-chat-square-text text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("interviewPractice.giveExamples.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("interviewPractice.giveExamples.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-arrow-repeat text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("interviewPractice.practiceAgain.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("interviewPractice.practiceAgain.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InterviewPractice;
