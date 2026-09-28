import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function MajorGuide() {
  const { t } = useLanguage();

  const majors = [
    {
      id: 1,
      title: t("majorGuide.majors.mis.title"),
      shortName: "MIS",
      icon: "bi-diagram-3",
      color: "primary",
      category: "Technology & Business",
      description: t("majorGuide.majors.mis.description"),
      skills: [
        t("majorGuide.majors.mis.skills.0"),
        t("majorGuide.majors.mis.skills.1"),
        t("majorGuide.majors.mis.skills.2"),
        t("majorGuide.majors.mis.skills.3"),
        t("majorGuide.majors.mis.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.mis.careers.0"),
        t("majorGuide.majors.mis.careers.1"),
        t("majorGuide.majors.mis.careers.2"),
        t("majorGuide.majors.mis.careers.3"),
        t("majorGuide.majors.mis.careers.4"),
      ],
    },
    {
      id: 2,
      title: t("majorGuide.majors.cs.title"),
      shortName: "CS",
      icon: "bi-cpu",
      color: "success",
      category: "Technology",
      description: t("majorGuide.majors.cs.description"),
      skills: [
        t("majorGuide.majors.cs.skills.0"),
        t("majorGuide.majors.cs.skills.1"),
        t("majorGuide.majors.cs.skills.2"),
        t("majorGuide.majors.cs.skills.3"),
        t("majorGuide.majors.cs.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.cs.careers.0"),
        t("majorGuide.majors.cs.careers.1"),
        t("majorGuide.majors.cs.careers.2"),
        t("majorGuide.majors.cs.careers.3"),
        t("majorGuide.majors.cs.careers.4"),
      ],
    },
    {
      id: 3,
      title: t("majorGuide.majors.it.title"),
      shortName: "IT",
      icon: "bi-pc-display",
      color: "info",
      category: "Technology",
      description: t("majorGuide.majors.it.description"),
      skills: [
        t("majorGuide.majors.it.skills.0"),
        t("majorGuide.majors.it.skills.1"),
        t("majorGuide.majors.it.skills.2"),
        t("majorGuide.majors.it.skills.3"),
        t("majorGuide.majors.it.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.it.careers.0"),
        t("majorGuide.majors.it.careers.1"),
        t("majorGuide.majors.it.careers.2"),
        t("majorGuide.majors.it.careers.3"),
        t("majorGuide.majors.it.careers.4"),
      ],
    },
    {
      id: 4,
      title: t("majorGuide.majors.business.title"),
      shortName: "BA",
      icon: "bi-briefcase",
      color: "warning",
      category: "Business",
      description: t("majorGuide.majors.business.description"),
      skills: [
        t("majorGuide.majors.business.skills.0"),
        t("majorGuide.majors.business.skills.1"),
        t("majorGuide.majors.business.skills.2"),
        t("majorGuide.majors.business.skills.3"),
        t("majorGuide.majors.business.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.business.careers.0"),
        t("majorGuide.majors.business.careers.1"),
        t("majorGuide.majors.business.careers.2"),
        t("majorGuide.majors.business.careers.3"),
        t("majorGuide.majors.business.careers.4"),
      ],
    },
    {
      id: 5,
      title: t("majorGuide.majors.accounting.title"),
      shortName: "Accounting",
      icon: "bi-calculator",
      color: "danger",
      category: "Business",
      description: t("majorGuide.majors.accounting.description"),
      skills: [
        t("majorGuide.majors.accounting.skills.0"),
        t("majorGuide.majors.accounting.skills.1"),
        t("majorGuide.majors.accounting.skills.2"),
        t("majorGuide.majors.accounting.skills.3"),
        t("majorGuide.majors.accounting.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.accounting.careers.0"),
        t("majorGuide.majors.accounting.careers.1"),
        t("majorGuide.majors.accounting.careers.2"),
        t("majorGuide.majors.accounting.careers.3"),
        t("majorGuide.majors.accounting.careers.4"),
      ],
    },
    {
      id: 6,
      title: t("majorGuide.majors.design.title"),
      shortName: "Design",
      icon: "bi-palette",
      color: "secondary",
      category: "Creative",
      description: t("majorGuide.majors.design.description"),
      skills: [
        t("majorGuide.majors.design.skills.0"),
        t("majorGuide.majors.design.skills.1"),
        t("majorGuide.majors.design.skills.2"),
        t("majorGuide.majors.design.skills.3"),
        t("majorGuide.majors.design.skills.4"),
      ],
      careers: [
        t("majorGuide.majors.design.careers.0"),
        t("majorGuide.majors.design.careers.1"),
        t("majorGuide.majors.design.careers.2"),
        t("majorGuide.majors.design.careers.3"),
        t("majorGuide.majors.design.careers.4"),
      ],
    },
  ];

  const [category, setCategory] = useState("All");
  const [selectedMajor, setSelectedMajor] = useState(null);

  const filteredMajors = majors.filter(function (major) {
    if (category === "All") {
      return true;
    }

    return major.category === category;
  });

  function clearFilter() {
    setCategory("All");
    setSelectedMajor(null);
  }

  function handleExploreMajor(major) {
    setSelectedMajor(major);

    setTimeout(function () {
      const details = document.getElementById("major-details");

      if (details) {
        details.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  }

  function closeDetails() {
    setSelectedMajor(null);
  }

  function getCategoryLabel(value) {
    const labels = {
      All: t("majorGuide.filters.all"),
      "Technology & Business": t("majorGuide.filters.technologyBusiness"),
      Technology: t("majorGuide.filters.technology"),
      Business: t("majorGuide.filters.business"),
      Creative: t("majorGuide.filters.creative"),
    };

    return labels[value] || value;
  }

  return (
    <main className="major-guide-page py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
            🧭 {t("majorGuide.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("majorGuide.heroTitleLine1")}
            <br />
            {t("majorGuide.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("majorGuide.heroDescription")}
          </p>
        </div>

        {/* Filter */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="row align-items-center g-3">
              <div className="col-md-8">
                <h5 className="fw-bold mb-1">{t("majorGuide.exploreTitle")}</h5>

                <p className="text-secondary mb-0">
                  {t("majorGuide.exploreDescription")}
                </p>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={category}
                  onChange={function (event) {
                    setCategory(event.target.value);
                    setSelectedMajor(null);
                  }}
                >
                  <option value="All">{t("majorGuide.filters.all")}</option>

                  <option value="Technology & Business">
                    {t("majorGuide.filters.technologyBusiness")}
                  </option>

                  <option value="Technology">
                    {t("majorGuide.filters.technology")}
                  </option>

                  <option value="Business">
                    {t("majorGuide.filters.business")}
                  </option>

                  <option value="Creative">
                    {t("majorGuide.filters.creative")}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h4 className="fw-bold mb-1">{t("majorGuide.availableTitle")}</h4>

            <p className="text-secondary mb-0">
              {filteredMajors.length} {t("majorGuide.majorsFound")}
            </p>
          </div>

          {category !== "All" && (
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={clearFilter}
            >
              <i className="bi bi-x-lg me-2"></i>
              {t("majorGuide.clearFilter")}
            </button>
          )}
        </div>

        {/* Major Cards */}
        <div className="row g-4">
          {filteredMajors.map(function (major) {
            return (
              <div className="col-md-6 col-lg-4" key={major.id}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div
                        className={`bg-${major.color}-subtle text-${major.color} rounded-3 p-3`}
                      >
                        <i className={`bi ${major.icon} fs-4`}></i>
                      </div>

                      <span className="badge bg-light text-dark border">
                        {major.shortName}
                      </span>
                    </div>

                    <h4 className="fw-bold">{major.title}</h4>

                    <span
                      className={`badge bg-${major.color}-subtle text-${major.color} mb-3 align-self-start`}
                    >
                      {getCategoryLabel(major.category)}
                    </span>

                    <p className="text-secondary flex-grow-1">
                      {major.description}
                    </p>

                    <button
                      type="button"
                      className={`btn btn-${major.color} mt-2`}
                      onClick={function () {
                        handleExploreMajor(major);
                      }}
                    >
                      {t("majorGuide.exploreMajor")}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMajors.length === 0 && (
          <div className="card border-0 shadow-sm rounded-4 mt-4">
            <div className="card-body text-center py-5">
              <i className="bi bi-search display-3 text-secondary opacity-50"></i>

              <h4 className="fw-bold mt-4">{t("majorGuide.noResultsTitle")}</h4>

              <p className="text-secondary">
                {t("majorGuide.noResultsDescription")}
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={clearFilter}
              >
                {t("majorGuide.resetFilter")}
              </button>
            </div>
          </div>
        )}

        {/* Major Details */}
        {selectedMajor && (
          <div
            id="major-details"
            className="card border-0 shadow-sm rounded-4 mt-5"
          >
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <span
                    className={`badge bg-${selectedMajor.color}-subtle text-${selectedMajor.color} mb-2`}
                  >
                    {getCategoryLabel(selectedMajor.category)}
                  </span>

                  <h2 className="fw-bold mb-1">{selectedMajor.title}</h2>

                  <p className="text-secondary mb-0">
                    {selectedMajor.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={closeDetails}
                  aria-label={t("majorGuide.closeDetails")}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="row g-4">
                {/* Skills */}
                <div className="col-lg-6">
                  <div className="bg-primary-subtle rounded-4 p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-lightning-charge text-primary fs-3 me-3"></i>

                      <h4 className="fw-bold mb-0">
                        {t("majorGuide.skillsTitle")}
                      </h4>
                    </div>

                    <div className="d-grid gap-2">
                      {selectedMajor.skills.map(function (skill, index) {
                        return (
                          <div key={index} className="bg-white rounded-3 p-3">
                            <i className="bi bi-check-circle text-success me-2"></i>
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Careers */}
                <div className="col-lg-6">
                  <div className="bg-success-subtle rounded-4 p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-briefcase text-success fs-3 me-3"></i>

                      <h4 className="fw-bold mb-0">
                        {t("majorGuide.careersTitle")}
                      </h4>
                    </div>

                    <div className="d-grid gap-2">
                      {selectedMajor.careers.map(function (career, index) {
                        return (
                          <div key={index} className="bg-white rounded-3 p-3">
                            <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                            {career}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="alert alert-info mt-4 mb-0">
                <i className="bi bi-info-circle me-2"></i>
                {t("majorGuide.careerDisclaimer")}
              </div>
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
                  {t("majorGuide.bottom.exploreTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("majorGuide.bottom.exploreDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-lightbulb text-success fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("majorGuide.bottom.understandTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("majorGuide.bottom.understandDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle rounded-4 h-100">
              <div className="card-body p-4">
                <i className="bi bi-signpost text-warning fs-2"></i>

                <h5 className="fw-bold mt-3">
                  {t("majorGuide.bottom.planTitle")}
                </h5>

                <p className="text-secondary mb-0">
                  {t("majorGuide.bottom.planDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reset */}
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={clearFilter}
          >
            <i className="bi bi-arrow-counterclockwise me-2"></i>
            {t("majorGuide.reset")}
          </button>
        </div>
      </div>
    </main>
  );
}

export default MajorGuide;

