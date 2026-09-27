import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function InternshipFinder() {
  const { t } = useLanguage();

  const internships = [
    {
      id: 1,
      titleKey: "frontendDeveloper",
      company: "Tech Solutions Cambodia",
      location: "Phnom Penh",
      type: "Full-time",
      field: "Web Development",
      level: "Beginner",
      duration: "3 months",
      descriptionKey: "frontendDeveloper",
      requirementsKeys: [
        "htmlCss",
        "javascript",
        "willingness",
        "gitPlus",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Git"],
    },
    {
      id: 2,
      titleKey: "flutterDeveloper",
      company: "Digital App Cambodia",
      location: "Phnom Penh",
      type: "Full-time",
      field: "App Development",
      level: "Beginner",
      duration: "3 months",
      descriptionKey: "flutterDeveloper",
      requirementsKeys: [
        "programming",
        "dart",
        "flutterInterest",
        "problemSolving",
      ],
      skills: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 3,
      titleKey: "uiuxDesigner",
      company: "Creative Studio",
      location: "Phnom Penh",
      type: "Part-time",
      field: "UI/UX Design",
      level: "Beginner",
      duration: "2-3 months",
      descriptionKey: "uiuxDesigner",
      requirementsKeys: [
        "figma",
        "designFundamentals",
        "creativeThinking",
        "portfolioPlus",
      ],
      skills: ["Figma", "UI Design", "Prototyping"],
    },
    {
      id: 4,
      titleKey: "misAnalyst",
      company: "Business Technology Group",
      location: "Phnom Penh",
      type: "Full-time",
      field: "MIS / Business Technology",
      level: "Intermediate",
      duration: "3-6 months",
      descriptionKey: "misAnalyst",
      requirementsKeys: [
        "database",
        "businessProcess",
        "communication",
        "excel",
      ],
      skills: ["MIS", "Database", "Business Analysis", "Excel"],
    },
    {
      id: 5,
      titleKey: "juniorWebDeveloper",
      company: "Cambodia Web Studio",
      location: "Phnom Penh",
      type: "Full-time",
      field: "Web Development",
      level: "Intermediate",
      duration: "3 months",
      descriptionKey: "juniorWebDeveloper",
      requirementsKeys: [
        "htmlCssJs",
        "react",
        "gitGithub",
        "teamwork",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
    {
      id: 6,
      titleKey: "itSupport",
      company: "Smart Business Cambodia",
      location: "Phnom Penh",
      type: "Full-time",
      field: "IT Support",
      level: "Beginner",
      duration: "3 months",
      descriptionKey: "itSupport",
      requirementsKeys: [
        "computer",
        "windows",
        "networking",
        "communication",
      ],
      skills: ["Windows", "Networking", "Troubleshooting"],
    },
  ];

  const [search, setSearch] = useState("");
  const [field, setField] = useState("All");
  const [level, setLevel] = useState("All");
  const [type, setType] = useState("All");
  const [selectedInternship, setSelectedInternship] = useState(null);

  const fieldKeys = {
    All: "all",
    "Web Development": "webDevelopment",
    "App Development": "appDevelopment",
    "UI/UX Design": "uiuxDesign",
    "MIS / Business Technology": "misBusinessTechnology",
    "IT Support": "itSupport",
  };

  const levelKeys = {
    All: "all",
    Beginner: "beginner",
    Intermediate: "intermediate",
    Advanced: "advanced",
  };

  const typeKeys = {
    All: "all",
    "Full-time": "fullTime",
    "Part-time": "partTime",
  };

  function getFieldText(value) {
    return t(`internshipFinder.fields.${fieldKeys[value]}`);
  }

  function getLevelText(value) {
    return t(`internshipFinder.levels.${levelKeys[value]}`);
  }

  function getTypeText(value) {
    return t(`internshipFinder.types.${typeKeys[value]}`);
  }

  function getInternshipText(internship, type) {
    return t(
      `internshipFinder.internships.${internship[type]}`
    );
  }

  const filteredInternships = internships.filter(function (
    internship
  ) {
    const searchText = search.toLowerCase();

    const translatedTitle = getInternshipText(
      internship,
      "titleKey"
    ).toLowerCase();

    const translatedDescription = getInternshipText(
      internship,
      "descriptionKey"
    ).toLowerCase();

    const matchesSearch =
      translatedTitle.includes(searchText) ||
      internship.company.toLowerCase().includes(searchText) ||
      internship.field.toLowerCase().includes(searchText) ||
      translatedDescription.includes(searchText) ||
      internship.skills.some(function (skill) {
        return skill.toLowerCase().includes(searchText);
      });

    const matchesField =
      field === "All" || internship.field === field;

    const matchesLevel =
      level === "All" || internship.level === level;

    const matchesType =
      type === "All" || internship.type === type;

    return (
      matchesSearch &&
      matchesField &&
      matchesLevel &&
      matchesType
    );
  });

  function viewDetails(internship) {
    setSelectedInternship(internship);
  }

  function clearFilters() {
    setSearch("");
    setField("All");
    setLevel("All");
    setType("All");
    setSelectedInternship(null);
  }

  return (
    <main className="internship-finder-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 mb-3">
            <i className="bi bi-briefcase me-2"></i>
            {t("internshipFinder.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("internshipFinder.heroTitle")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "750px" }}
          >
            {t("internshipFinder.heroDescription")}
          </p>
        </div>

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h4 className="fw-bold mb-1">
                  {t("internshipFinder.findTitle")}
                </h4>

                <p className="text-secondary mb-0">
                  {t("internshipFinder.findDescription")}
                </p>
              </div>

              <span className="badge bg-warning text-dark fs-6">
                {filteredInternships.length}{" "}
                {t("internshipFinder.results")}
              </span>
            </div>

            <div className="row g-3">
              <div className="col-lg-4">
                <label className="form-label fw-semibold">
                  {t("internshipFinder.search")}
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    value={search}
                    placeholder={t(
                      "internshipFinder.searchPlaceholder"
                    )}
                    onChange={function (event) {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-4 col-lg-2">
                <label className="form-label fw-semibold">
                  {t("internshipFinder.field")}
                </label>

                <select
                  className="form-select"
                  value={field}
                  onChange={function (event) {
                    setField(event.target.value);
                  }}
                >
                  <option value="All">
                    {getFieldText("All")}
                  </option>
                  <option value="Web Development">
                    {getFieldText("Web Development")}
                  </option>
                  <option value="App Development">
                    {getFieldText("App Development")}
                  </option>
                  <option value="UI/UX Design">
                    {getFieldText("UI/UX Design")}
                  </option>
                  <option value="MIS / Business Technology">
                    {getFieldText("MIS / Business Technology")}
                  </option>
                  <option value="IT Support">
                    {getFieldText("IT Support")}
                  </option>
                </select>
              </div>

              <div className="col-md-4 col-lg-2">
                <label className="form-label fw-semibold">
                  {t("internshipFinder.level")}
                </label>

                <select
                  className="form-select"
                  value={level}
                  onChange={function (event) {
                    setLevel(event.target.value);
                  }}
                >
                  <option value="All">
                    {getLevelText("All")}
                  </option>
                  <option value="Beginner">
                    {getLevelText("Beginner")}
                  </option>
                  <option value="Intermediate">
                    {getLevelText("Intermediate")}
                  </option>
                  <option value="Advanced">
                    {getLevelText("Advanced")}
                  </option>
                </select>
              </div>

              <div className="col-md-4 col-lg-2">
                <label className="form-label fw-semibold">
                  {t("internshipFinder.type")}
                </label>

                <select
                  className="form-select"
                  value={type}
                  onChange={function (event) {
                    setType(event.target.value);
                  }}
                >
                  <option value="All">
                    {getTypeText("All")}
                  </option>
                  <option value="Full-time">
                    {getTypeText("Full-time")}
                  </option>
                  <option value="Part-time">
                    {getTypeText("Part-time")}
                  </option>
                </select>
              </div>

              <div className="col-md-12 col-lg-2 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  onClick={clearFilters}
                >
                  <i className="bi bi-arrow-counterclockwise me-2"></i>
                  {t("internshipFinder.reset")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="d-grid gap-3">
              {filteredInternships.length === 0 ? (
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body text-center py-5">
                    <i className="bi bi-search display-4 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("internshipFinder.noResultsTitle")}
                    </h5>

                    <p className="text-secondary mb-3">
                      {t("internshipFinder.noResultsDescription")}
                    </p>

                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={clearFilters}
                    >
                      {t("internshipFinder.resetFilters")}
                    </button>
                  </div>
                </div>
              ) : (
                filteredInternships.map(function (internship) {
                  const isSelected =
                    selectedInternship?.id === internship.id;

                  return (
                    <div
                      className={`card border-0 shadow-sm rounded-4 ${
                        isSelected
                          ? "border border-warning"
                          : ""
                      }`}
                      key={internship.id}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start gap-3">
                          <div>
                            <span className="badge bg-warning-subtle text-dark mb-2">
                              {getFieldText(internship.field)}
                            </span>

                            <h4 className="fw-bold mb-1">
                              {getInternshipText(
                                internship,
                                "titleKey"
                              )}
                            </h4>

                            <p className="text-secondary mb-2">
                              <i className="bi bi-building me-2"></i>
                              {internship.company}
                            </p>
                          </div>

                          <span className="badge bg-light text-dark">
                            {getLevelText(internship.level)}
                          </span>
                        </div>

                        <div className="d-flex flex-wrap gap-3 text-secondary small mb-3">
                          <span>
                            <i className="bi bi-geo-alt me-1"></i>
                            {internship.location}
                          </span>

                          <span>
                            <i className="bi bi-clock me-1"></i>
                            {getTypeText(internship.type)}
                          </span>

                          <span>
                            <i className="bi bi-calendar3 me-1"></i>
                            {internship.duration}
                          </span>
                        </div>

                        <p className="text-secondary">
                          {getInternshipText(
                            internship,
                            "descriptionKey"
                          )}
                        </p>

                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {internship.skills.map(function (skill) {
                            return (
                              <span
                                className="badge bg-secondary-subtle text-secondary"
                                key={skill}
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>

                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={function () {
                            viewDetails(internship);
                          }}
                        >
                          {t("internshipFinder.viewDetails")}
                          <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                {!selectedInternship ? (
                  <div className="text-center py-5">
                    <i className="bi bi-briefcase display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("internshipFinder.selectTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("internshipFinder.selectDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div>
                        <span className="badge bg-warning text-dark mb-2">
                          {getFieldText(
                            selectedInternship.field
                          )}
                        </span>

                        <h4 className="fw-bold mb-1">
                          {getInternshipText(
                            selectedInternship,
                            "titleKey"
                          )}
                        </h4>

                        <p className="text-secondary mb-0">
                          {selectedInternship.company}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={function () {
                          setSelectedInternship(null);
                        }}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>

                    <div className="bg-warning-subtle rounded-4 p-3 mb-4">
                      <div className="row g-3">
                        <div className="col-6">
                          <small className="text-secondary d-block">
                            {t("internshipFinder.location")}
                          </small>

                          <strong>
                            {selectedInternship.location}
                          </strong>
                        </div>

                        <div className="col-6">
                          <small className="text-secondary d-block">
                            {t("internshipFinder.type")}
                          </small>

                          <strong>
                            {getTypeText(selectedInternship.type)}
                          </strong>
                        </div>

                        <div className="col-6">
                          <small className="text-secondary d-block">
                            {t("internshipFinder.level")}
                          </small>

                          <strong>
                            {getLevelText(
                              selectedInternship.level
                            )}
                          </strong>
                        </div>

                        <div className="col-6">
                          <small className="text-secondary d-block">
                            {t("internshipFinder.duration")}
                          </small>

                          <strong>
                            {selectedInternship.duration}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <h5 className="fw-bold">
                      {t("internshipFinder.aboutTitle")}
                    </h5>

                    <p className="text-secondary">
                      {getInternshipText(
                        selectedInternship,
                        "descriptionKey"
                      )}
                    </p>

                    <h5 className="fw-bold mt-4">
                      {t("internshipFinder.requirements")}
                    </h5>

                    <ul className="list-group list-group-flush mb-4">
                      {selectedInternship.requirementsKeys.map(
                        function (requirementKey, index) {
                          return (
                            <li
                              className="list-group-item px-0"
                              key={index}
                            >
                              <i className="bi bi-check-circle text-success me-2"></i>

                              {t(
                                `internshipFinder.requirementItems.${requirementKey}`
                              )}
                            </li>
                          );
                        }
                      )}
                    </ul>

                    <h5 className="fw-bold">
                      {t("internshipFinder.recommendedSkills")}
                    </h5>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {selectedInternship.skills.map(function (skill) {
                        return (
                          <span
                            className="badge bg-primary-subtle text-primary"
                            key={skill}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>

                    <div className="alert alert-info mb-0">
                      <i className="bi bi-info-circle me-2"></i>
                      {t("internshipFinder.officialPageNotice")}
                    </div>
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
                <i className="bi bi-file-earmark-person text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("internshipFinder.prepareCV.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t(
                    "internshipFinder.prepareCV.description"
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-code-square text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("internshipFinder.buildProjects.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t(
                    "internshipFinder.buildProjects.description"
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-chat-dots text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("internshipFinder.practice.title")}
                </h5>

                <p className="text-secondary mb-0">
                  {t(
                    "internshipFinder.practice.description"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InternshipFinder;