import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function ScholarshipFinder() {
  const { t } = useLanguage();

  const scholarships = [
    {
      id: 1,
      title: t("scholarshipFinder.scholarships.university.title"),
      provider: t("scholarshipFinder.scholarships.university.provider"),
      level: "Undergraduate",
      field: "All Fields",
      type: "Merit",
      description: t("scholarshipFinder.scholarships.university.description"),
      deadline: t("scholarshipFinder.scholarships.university.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.university.requirements.0"),
        t("scholarshipFinder.scholarships.university.requirements.1"),
        t("scholarshipFinder.scholarships.university.requirements.2"),
        t("scholarshipFinder.scholarships.university.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.university.steps.0"),
        t("scholarshipFinder.scholarships.university.steps.1"),
        t("scholarshipFinder.scholarships.university.steps.2"),
        t("scholarshipFinder.scholarships.university.steps.3"),
      ],
    },
    {
      id: 2,
      title: t("scholarshipFinder.scholarships.stem.title"),
      provider: t("scholarshipFinder.scholarships.stem.provider"),
      level: "Undergraduate",
      field: "Technology",
      type: "Merit",
      description: t("scholarshipFinder.scholarships.stem.description"),
      deadline: t("scholarshipFinder.scholarships.stem.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.stem.requirements.0"),
        t("scholarshipFinder.scholarships.stem.requirements.1"),
        t("scholarshipFinder.scholarships.stem.requirements.2"),
        t("scholarshipFinder.scholarships.stem.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.stem.steps.0"),
        t("scholarshipFinder.scholarships.stem.steps.1"),
        t("scholarshipFinder.scholarships.stem.steps.2"),
        t("scholarshipFinder.scholarships.stem.steps.3"),
      ],
    },
    {
      id: 3,
      title: t("scholarshipFinder.scholarships.international.title"),
      provider: t("scholarshipFinder.scholarships.international.provider"),
      level: "Undergraduate",
      field: "All Fields",
      type: "International",
      description: t(
        "scholarshipFinder.scholarships.international.description",
      ),
      deadline: t("scholarshipFinder.scholarships.international.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.international.requirements.0"),
        t("scholarshipFinder.scholarships.international.requirements.1"),
        t("scholarshipFinder.scholarships.international.requirements.2"),
        t("scholarshipFinder.scholarships.international.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.international.steps.0"),
        t("scholarshipFinder.scholarships.international.steps.1"),
        t("scholarshipFinder.scholarships.international.steps.2"),
        t("scholarshipFinder.scholarships.international.steps.3"),
      ],
    },
    {
      id: 4,
      title: t("scholarshipFinder.scholarships.technology.title"),
      provider: t("scholarshipFinder.scholarships.technology.provider"),
      level: "Undergraduate",
      field: "Technology",
      type: "Need Based",
      description: t("scholarshipFinder.scholarships.technology.description"),
      deadline: t("scholarshipFinder.scholarships.technology.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.technology.requirements.0"),
        t("scholarshipFinder.scholarships.technology.requirements.1"),
        t("scholarshipFinder.scholarships.technology.requirements.2"),
        t("scholarshipFinder.scholarships.technology.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.technology.steps.0"),
        t("scholarshipFinder.scholarships.technology.steps.1"),
        t("scholarshipFinder.scholarships.technology.steps.2"),
        t("scholarshipFinder.scholarships.technology.steps.3"),
      ],
    },
    {
      id: 5,
      title: t("scholarshipFinder.scholarships.graduate.title"),
      provider: t("scholarshipFinder.scholarships.graduate.provider"),
      level: "Graduate",
      field: "All Fields",
      type: "Merit",
      description: t("scholarshipFinder.scholarships.graduate.description"),
      deadline: t("scholarshipFinder.scholarships.graduate.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.graduate.requirements.0"),
        t("scholarshipFinder.scholarships.graduate.requirements.1"),
        t("scholarshipFinder.scholarships.graduate.requirements.2"),
        t("scholarshipFinder.scholarships.graduate.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.graduate.steps.0"),
        t("scholarshipFinder.scholarships.graduate.steps.1"),
        t("scholarshipFinder.scholarships.graduate.steps.2"),
        t("scholarshipFinder.scholarships.graduate.steps.3"),
      ],
    },
    {
      id: 6,
      title: t("scholarshipFinder.scholarships.community.title"),
      provider: t("scholarshipFinder.scholarships.community.provider"),
      level: "Undergraduate",
      field: "All Fields",
      type: "Leadership",
      description: t("scholarshipFinder.scholarships.community.description"),
      deadline: t("scholarshipFinder.scholarships.community.deadline"),
      requirements: [
        t("scholarshipFinder.scholarships.community.requirements.0"),
        t("scholarshipFinder.scholarships.community.requirements.1"),
        t("scholarshipFinder.scholarships.community.requirements.2"),
        t("scholarshipFinder.scholarships.community.requirements.3"),
      ],
      applicationSteps: [
        t("scholarshipFinder.scholarships.community.steps.0"),
        t("scholarshipFinder.scholarships.community.steps.1"),
        t("scholarshipFinder.scholarships.community.steps.2"),
        t("scholarshipFinder.scholarships.community.steps.3"),
      ],
    },
  ];

  const [level, setLevel] = useState("All");
  const [field, setField] = useState("All");
  const [type, setType] = useState("All");
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const filteredScholarships = scholarships.filter(function (scholarship) {
    const levelMatch = level === "All" || scholarship.level === level;

    const fieldMatch =
      field === "All" ||
      scholarship.field === field ||
      scholarship.field === "All Fields";

    const typeMatch = type === "All" || scholarship.type === type;

    return levelMatch && fieldMatch && typeMatch;
  });

  function clearFilters() {
    setLevel("All");
    setField("All");
    setType("All");
  }

  function openRequirements(scholarship) {
    setSelectedScholarship(scholarship);
  }

  function closeRequirements() {
    setSelectedScholarship(null);
  }

  function getLevelLabel(value) {
    const labels = {
      All: t("scholarshipFinder.filters.allLevels"),
      Undergraduate: t("scholarshipFinder.filters.undergraduate"),
      Graduate: t("scholarshipFinder.filters.graduate"),
    };

    return labels[value] || value;
  }

  function getFieldLabel(value) {
    const labels = {
      All: t("scholarshipFinder.filters.allFields"),
      Technology: t("scholarshipFinder.filters.technology"),
      Business: t("scholarshipFinder.filters.business"),
      Arts: t("scholarshipFinder.filters.arts"),
      "All Fields": t("scholarshipFinder.filters.allFields"),
    };

    return labels[value] || value;
  }

  function getTypeLabel(value) {
    const labels = {
      All: t("scholarshipFinder.filters.allTypes"),
      Merit: t("scholarshipFinder.filters.merit"),
      "Need Based": t("scholarshipFinder.filters.needBased"),
      Leadership: t("scholarshipFinder.filters.leadership"),
      International: t("scholarshipFinder.filters.international"),
    };

    return labels[value] || value;
  }

  return (
    <main className="scholarship-finder-page py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            🎓 {t("scholarshipFinder.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("scholarshipFinder.heroTitleLine1")}
            <br />
            {t("scholarshipFinder.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("scholarshipFinder.heroDescription")}
          </p>
        </div>

        {/* Filters */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                <i className="bi bi-funnel fs-4"></i>
              </div>

              <div>
                <h4 className="fw-bold mb-1">
                  {t("scholarshipFinder.filterTitle")}
                </h4>

                <p className="text-secondary mb-0">
                  {t("scholarshipFinder.filterDescription")}
                </p>
              </div>
            </div>

            <div className="row g-3">
              {/* Level */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  {t("scholarshipFinder.educationLevel")}
                </label>

                <select
                  className="form-select"
                  value={level}
                  onChange={function (event) {
                    setLevel(event.target.value);
                  }}
                >
                  <option value="All">
                    {t("scholarshipFinder.filters.allLevels")}
                  </option>

                  <option value="Undergraduate">
                    {t("scholarshipFinder.filters.undergraduate")}
                  </option>

                  <option value="Graduate">
                    {t("scholarshipFinder.filters.graduate")}
                  </option>
                </select>
              </div>

              {/* Field */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  {t("scholarshipFinder.field")}
                </label>

                <select
                  className="form-select"
                  value={field}
                  onChange={function (event) {
                    setField(event.target.value);
                  }}
                >
                  <option value="All">
                    {t("scholarshipFinder.filters.allFields")}
                  </option>

                  <option value="Technology">
                    {t("scholarshipFinder.filters.technology")}
                  </option>

                  <option value="Business">
                    {t("scholarshipFinder.filters.business")}
                  </option>

                  <option value="Arts">
                    {t("scholarshipFinder.filters.arts")}
                  </option>
                </select>
              </div>

              {/* Type */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  {t("scholarshipFinder.scholarshipType")}
                </label>

                <select
                  className="form-select"
                  value={type}
                  onChange={function (event) {
                    setType(event.target.value);
                  }}
                >
                  <option value="All">
                    {t("scholarshipFinder.filters.allTypes")}
                  </option>

                  <option value="Merit">
                    {t("scholarshipFinder.filters.merit")}
                  </option>

                  <option value="Need Based">
                    {t("scholarshipFinder.filters.needBased")}
                  </option>

                  <option value="Leadership">
                    {t("scholarshipFinder.filters.leadership")}
                  </option>

                  <option value="International">
                    {t("scholarshipFinder.filters.international")}
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={clearFilters}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i>
                {t("scholarshipFinder.clearFilters")}
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h4 className="fw-bold mb-1">
              {t("scholarshipFinder.resultsTitle")}
            </h4>

            <p className="text-secondary mb-0">
              {filteredScholarships.length}{" "}
              {t("scholarshipFinder.opportunitiesFound")}
            </p>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="row g-4">
          {filteredScholarships.map(function (scholarship) {
            return (
              <div className="col-md-6" key={scholarship.id}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bg-primary-subtle text-primary rounded-3 p-3">
                        <i className="bi bi-mortarboard fs-4"></i>
                      </div>

                      <span className="badge bg-success-subtle text-success">
                        {getTypeLabel(scholarship.type)}
                      </span>
                    </div>

                    <h4 className="fw-bold">{scholarship.title}</h4>

                    <p className="text-secondary mb-2">
                      <i className="bi bi-building me-2"></i>
                      {scholarship.provider}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge bg-light text-dark border">
                        {getLevelLabel(scholarship.level)}
                      </span>

                      <span className="badge bg-light text-dark border">
                        {getFieldLabel(scholarship.field)}
                      </span>
                    </div>

                    <p className="text-secondary flex-grow-1">
                      {scholarship.description}
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary align-self-start"
                      onClick={function () {
                        openRequirements(scholarship);
                      }}
                    >
                      {t("scholarshipFinder.viewRequirements")}

                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body text-center py-5">
              <i className="bi bi-search display-3 text-secondary opacity-50"></i>

              <h4 className="fw-bold mt-4">
                {t("scholarshipFinder.noResultsTitle")}
              </h4>

              <p className="text-secondary mb-3">
                {t("scholarshipFinder.noResultsDescription")}
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={clearFilters}
              >
                {t("scholarshipFinder.resetFilters")}
              </button>
            </div>
          </div>
        )}

        {/* Bottom Information */}
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="card border-0 bg-primary-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-search text-primary fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("scholarshipFinder.bottom.exploreTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("scholarshipFinder.bottom.exploreDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-file-earmark-check text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("scholarshipFinder.bottom.prepareTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("scholarshipFinder.bottom.prepareDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-send text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("scholarshipFinder.bottom.applyTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("scholarshipFinder.bottom.applyDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Modal */}
      {selectedScholarship && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.6)",
          }}
          onClick={function (event) {
            if (event.target === event.currentTarget) {
              closeRequirements();
            }
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              {/* Modal Header */}
              <div className="modal-header border-0 p-4 pb-2">
                <div>
                  <span className="badge bg-primary mb-2">
                    {t("scholarshipFinder.modal.badge")}
                  </span>

                  <h3 className="fw-bold mb-1">{selectedScholarship.title}</h3>

                  <p className="text-secondary mb-0">
                    <i className="bi bi-building me-2"></i>
                    {selectedScholarship.provider}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-close"
                  aria-label={t("scholarshipFinder.modal.close")}
                  onClick={closeRequirements}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4">
                {/* Basic Information */}
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <div className="bg-light rounded-3 p-3 h-100">
                      <small className="text-secondary d-block mb-1">
                        {t("scholarshipFinder.modal.educationLevel")}
                      </small>

                      <strong>
                        {getLevelLabel(selectedScholarship.level)}
                      </strong>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="bg-light rounded-3 p-3 h-100">
                      <small className="text-secondary d-block mb-1">
                        {t("scholarshipFinder.modal.field")}
                      </small>

                      <strong>
                        {getFieldLabel(selectedScholarship.field)}
                      </strong>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="bg-light rounded-3 p-3 h-100">
                      <small className="text-secondary d-block mb-1">
                        {t("scholarshipFinder.modal.type")}
                      </small>

                      <strong>{getTypeLabel(selectedScholarship.type)}</strong>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <h5 className="fw-bold mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  {t("scholarshipFinder.modal.commonRequirements")}
                </h5>

                <div className="row g-3 mb-4">
                  {selectedScholarship.requirements.map(
                    function (requirement, index) {
                      return (
                        <div className="col-md-6" key={index}>
                          <div className="border rounded-3 p-3 h-100">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {requirement}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>

                {/* Application Steps */}
                <h5 className="fw-bold mb-3">
                  <i className="bi bi-list-check text-primary me-2"></i>
                  {t("scholarshipFinder.modal.applicationSteps")}
                </h5>

                <div className="mb-4">
                  {selectedScholarship.applicationSteps.map(
                    function (step, index) {
                      return (
                        <div
                          className="d-flex align-items-start gap-3 mb-3"
                          key={index}
                        >
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: "32px",
                              height: "32px",
                            }}
                          >
                            {index + 1}
                          </div>

                          <p className="mb-0 pt-1">{step}</p>
                        </div>
                      );
                    },
                  )}
                </div>

                {/* Deadline */}
                <div className="alert alert-warning mb-0">
                  <i className="bi bi-calendar-event me-2"></i>
                  <strong>{t("scholarshipFinder.modal.deadline")}:</strong>{" "}
                  {selectedScholarship.deadline}
                </div>

                {/* Disclaimer */}
                <div className="alert alert-info mt-3 mb-0">
                  <i className="bi bi-info-circle me-2"></i>

                  {t("scholarshipFinder.modal.disclaimer")}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-0 p-4 pt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={closeRequirements}
                >
                  {t("scholarshipFinder.modal.close")}
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={closeRequirements}
                >
                  <i className="bi bi-check2 me-2"></i>
                  {t("scholarshipFinder.modal.gotIt")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ScholarshipFinder;
