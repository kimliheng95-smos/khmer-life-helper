import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function CVBuilder() {
  const { t } = useLanguage();

  const initialCV = {
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    location: "",
    website: "",
    photo: "",
    summary: "",

    education: [
      {
        school: "",
        degree: "",
        year: "",
        description: "",
      },
    ],

    skills: [""],

    projects: [
      {
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],

    experience: [
      {
        company: "",
        position: "",
        duration: "",
        description: "",
      },
    ],

    languages: [""],
  };

  const [cv, setCv] = useState(initialCV);

  // =========================
  // PERSONAL INFORMATION
  // =========================

  function handleChange(event) {
    const { name, value } = event.target;

    setCv((previousCv) => ({
      ...previousCv,
      [name]: value,
    }));
  }

  // =========================
  // PHOTO
  // =========================

  function handlePhotoChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      setCv((previousCv) => ({
        ...previousCv,
        photo: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  }

  function removePhoto() {
    setCv((previousCv) => ({
      ...previousCv,
      photo: "",
    }));
  }

  // =========================
  // EDUCATION
  // =========================

  function handleEducationChange(index, event) {
    const { name, value } = event.target;

    setCv((previousCv) => {
      const education = [...previousCv.education];

      education[index] = {
        ...education[index],
        [name]: value,
      };

      return {
        ...previousCv,
        education,
      };
    });
  }

  function addEducation() {
    setCv((previousCv) => ({
      ...previousCv,
      education: [
        ...previousCv.education,
        {
          school: "",
          degree: "",
          year: "",
          description: "",
        },
      ],
    }));
  }

  function removeEducation(index) {
    setCv((previousCv) => ({
      ...previousCv,
      education: previousCv.education.filter((_, i) => i !== index),
    }));
  }

  // =========================
  // SKILLS
  // =========================

  function handleSkillChange(index, event) {
    const value = event.target.value;

    setCv((previousCv) => {
      const skills = [...previousCv.skills];

      skills[index] = value;

      return {
        ...previousCv,
        skills,
      };
    });
  }

  function addSkill() {
    setCv((previousCv) => ({
      ...previousCv,
      skills: [...previousCv.skills, ""],
    }));
  }

  function removeSkill(index) {
    setCv((previousCv) => ({
      ...previousCv,
      skills: previousCv.skills.filter((_, i) => i !== index),
    }));
  }

  // =========================
  // PROJECTS
  // =========================

  function handleProjectChange(index, event) {
    const { name, value } = event.target;

    setCv((previousCv) => {
      const projects = [...previousCv.projects];

      projects[index] = {
        ...projects[index],
        [name]: value,
      };

      return {
        ...previousCv,
        projects,
      };
    });
  }

  function addProject() {
    setCv((previousCv) => ({
      ...previousCv,
      projects: [
        ...previousCv.projects,
        {
          name: "",
          description: "",
          technologies: "",
          link: "",
        },
      ],
    }));
  }

  function removeProject(index) {
    setCv((previousCv) => ({
      ...previousCv,
      projects: previousCv.projects.filter((_, i) => i !== index),
    }));
  }

  // =========================
  // EXPERIENCE
  // =========================

  function handleExperienceChange(index, event) {
    const { name, value } = event.target;

    setCv((previousCv) => {
      const experience = [...previousCv.experience];

      experience[index] = {
        ...experience[index],
        [name]: value,
      };

      return {
        ...previousCv,
        experience,
      };
    });
  }

  function addExperience() {
    setCv((previousCv) => ({
      ...previousCv,
      experience: [
        ...previousCv.experience,
        {
          company: "",
          position: "",
          duration: "",
          description: "",
        },
      ],
    }));
  }

  function removeExperience(index) {
    setCv((previousCv) => ({
      ...previousCv,
      experience: previousCv.experience.filter((_, i) => i !== index),
    }));
  }

  // =========================
  // LANGUAGES
  // =========================

  function handleLanguageChange(index, event) {
    const value = event.target.value;

    setCv((previousCv) => {
      const languages = [...previousCv.languages];

      languages[index] = value;

      return {
        ...previousCv,
        languages,
      };
    });
  }

  function addLanguage() {
    setCv((previousCv) => ({
      ...previousCv,
      languages: [...previousCv.languages, ""],
    }));
  }

  function removeLanguage(index) {
    setCv((previousCv) => ({
      ...previousCv,
      languages: previousCv.languages.filter((_, i) => i !== index),
    }));
  }

  // =========================
  // CLEAR CV
  // =========================

  function clearCV() {
    const confirmClear = window.confirm(t("cvBuilder.messages.clearConfirm"));

    if (!confirmClear) {
      return;
    }

    setCv({
      fullName: "",
      jobTitle: "",
      phone: "",
      email: "",
      location: "",
      website: "",
      photo: "",
      summary: "",

      education: [
        {
          school: "",
          degree: "",
          year: "",
          description: "",
        },
      ],

      skills: [""],

      projects: [
        {
          name: "",
          description: "",
          technologies: "",
          link: "",
        },
      ],

      experience: [
        {
          company: "",
          position: "",
          duration: "",
          description: "",
        },
      ],

      languages: [""],
    });
  }

  // =========================
  // PRINT CV
  // =========================

  function printCV() {
    window.print();
  }

  // =========================
  // RETURN
  // =========================

  return (
    <main className="cv-builder-page py-5">
      <div className="container">
        {/* HERO */}
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            <i className="bi bi-file-earmark-person me-2"></i>
            {t("cvBuilder.badge")}
          </span>

          <h1 className="display-5 fw-bold">{t("cvBuilder.heroTitle")}</h1>

          <p className="lead text-secondary">
            {t("cvBuilder.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          {/* =========================
              LEFT - FORM
          ========================= */}

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                {/* FORM HEADER */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("cvBuilder.form.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("cvBuilder.form.description")}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={clearCV}
                    title={t("cvBuilder.buttons.clear")}
                  >
                    <i className="bi bi-trash me-1"></i>
                    {t("cvBuilder.buttons.clear")}
                  </button>
                </div>

                {/* PERSONAL INFORMATION */}
                <h5 className="fw-bold border-bottom pb-2">
                  {t("cvBuilder.sections.personal")}
                </h5>

                {/* FULL NAME */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    {t("cvBuilder.fields.fullName")}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={cv.fullName}
                    placeholder={t("cvBuilder.placeholders.fullName")}
                    onChange={handleChange}
                  />
                </div>

                {/* JOB TITLE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    {t("cvBuilder.fields.jobTitle")}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="jobTitle"
                    value={cv.jobTitle}
                    placeholder={t("cvBuilder.placeholders.jobTitle")}
                    onChange={handleChange}
                  />
                </div>

                {/* PHOTO */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    {t("cvBuilder.fields.photo")}
                  </label>

                  <div className="d-flex align-items-center gap-3">
                    {cv.photo && (
                      <img
                        src={cv.photo}
                        alt={t("cvBuilder.fields.photo")}
                        className="cv-photo-preview"
                      />
                    )}

                    <div className="flex-grow-1">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handlePhotoChange}
                      />

                      {cv.photo && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm mt-2"
                          onClick={removePhoto}
                        >
                          <i className="bi bi-trash me-1"></i>
                          {t("cvBuilder.buttons.removePhoto")}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* PHONE + EMAIL */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      {t("cvBuilder.fields.phone")}
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={cv.phone}
                      placeholder={t("cvBuilder.placeholders.phone")}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      {t("cvBuilder.fields.email")}
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={cv.email}
                      placeholder={t("cvBuilder.placeholders.email")}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mb-3 mt-3">
                  <label className="form-label fw-semibold">
                    {t("cvBuilder.fields.location")}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={cv.location}
                    placeholder={t("cvBuilder.placeholders.location")}
                    onChange={handleChange}
                  />
                </div>

                {/* WEBSITE */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    {t("cvBuilder.fields.website")}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    value={cv.website}
                    placeholder={t("cvBuilder.placeholders.website")}
                    onChange={handleChange}
                  />
                </div>

                {/* SUMMARY */}
                <h5 className="fw-bold border-bottom pb-2">
                  {t("cvBuilder.sections.summary")}
                </h5>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="summary"
                    value={cv.summary}
                    placeholder={t("cvBuilder.placeholders.summary")}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* =========================
                    EDUCATION
                ========================= */}

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0">
                    {t("cvBuilder.sections.education")}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addEducation}
                    title={t("cvBuilder.buttons.add")}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                {cv.education.map((education, index) => (
                  <div className="border rounded p-3 mb-3" key={index}>
                    <div className="d-flex justify-content-between mb-3">
                      <strong>
                        {t("cvBuilder.labels.education")} {index + 1}
                      </strong>

                      {cv.education.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeEducation(index)}
                          title={t("cvBuilder.buttons.remove")}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="school"
                      value={education.school}
                      placeholder={t("cvBuilder.placeholders.school")}
                      onChange={(event) => handleEducationChange(index, event)}
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="degree"
                      value={education.degree}
                      placeholder={t("cvBuilder.placeholders.degree")}
                      onChange={(event) => handleEducationChange(index, event)}
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="year"
                      value={education.year}
                      placeholder={t("cvBuilder.placeholders.year")}
                      onChange={(event) => handleEducationChange(index, event)}
                    />

                    <textarea
                      className="form-control"
                      rows="2"
                      name="description"
                      value={education.description}
                      placeholder={t("cvBuilder.placeholders.description")}
                      onChange={(event) => handleEducationChange(index, event)}
                    ></textarea>
                  </div>
                ))}

                {/* =========================
                    SKILLS
                ========================= */}

                <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                  <h5 className="fw-bold mb-0">
                    {t("cvBuilder.sections.skills")}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addSkill}
                    title={t("cvBuilder.buttons.add")}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                {cv.skills.map((skill, index) => (
                  <div className="input-group mb-2" key={index}>
                    <input
                      type="text"
                      className="form-control"
                      value={skill}
                      placeholder={t("cvBuilder.placeholders.skill")}
                      onChange={(event) => handleSkillChange(index, event)}
                    />

                    {cv.skills.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => removeSkill(index)}
                        title={t("cvBuilder.buttons.remove")}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    )}
                  </div>
                ))}

                {/* =========================
                    PROJECTS
                ========================= */}

                <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                  <h5 className="fw-bold mb-0">
                    {t("cvBuilder.sections.projects")}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addProject}
                    title={t("cvBuilder.buttons.add")}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                {cv.projects.map((project, index) => (
                  <div className="border rounded p-3 mb-3" key={index}>
                    <div className="d-flex justify-content-between mb-3">
                      <strong>
                        {t("cvBuilder.labels.project")} {index + 1}
                      </strong>

                      {cv.projects.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeProject(index)}
                          title={t("cvBuilder.buttons.remove")}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="name"
                      value={project.name}
                      placeholder={t("cvBuilder.placeholders.projectName")}
                      onChange={(event) => handleProjectChange(index, event)}
                    />

                    <textarea
                      className="form-control mb-2"
                      rows="3"
                      name="description"
                      value={project.description}
                      placeholder={t(
                        "cvBuilder.placeholders.projectDescription",
                      )}
                      onChange={(event) => handleProjectChange(index, event)}
                    ></textarea>

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="technologies"
                      value={project.technologies}
                      placeholder={t("cvBuilder.placeholders.technologies")}
                      onChange={(event) => handleProjectChange(index, event)}
                    />

                    <input
                      type="text"
                      className="form-control"
                      name="link"
                      value={project.link}
                      placeholder={t("cvBuilder.placeholders.projectLink")}
                      onChange={(event) => handleProjectChange(index, event)}
                    />
                  </div>
                ))}

                {/* =========================
                    EXPERIENCE
                ========================= */}

                <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                  <h5 className="fw-bold mb-0">
                    {t("cvBuilder.sections.experience")}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addExperience}
                    title={t("cvBuilder.buttons.add")}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                {cv.experience.map((experience, index) => (
                  <div className="border rounded p-3 mb-3" key={index}>
                    <div className="d-flex justify-content-between mb-3">
                      <strong>
                        {t("cvBuilder.labels.experience")} {index + 1}
                      </strong>

                      {cv.experience.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeExperience(index)}
                          title={t("cvBuilder.buttons.remove")}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="company"
                      value={experience.company}
                      placeholder={t("cvBuilder.placeholders.company")}
                      onChange={(event) => handleExperienceChange(index, event)}
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="position"
                      value={experience.position}
                      placeholder={t("cvBuilder.placeholders.position")}
                      onChange={(event) => handleExperienceChange(index, event)}
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="duration"
                      value={experience.duration}
                      placeholder={t("cvBuilder.placeholders.duration")}
                      onChange={(event) => handleExperienceChange(index, event)}
                    />

                    <textarea
                      className="form-control"
                      rows="3"
                      name="description"
                      value={experience.description}
                      placeholder={t("cvBuilder.placeholders.responsibilities")}
                      onChange={(event) => handleExperienceChange(index, event)}
                    ></textarea>
                  </div>
                ))}

                {/* =========================
                    LANGUAGES
                ========================= */}

                <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                  <h5 className="fw-bold mb-0">
                    {t("cvBuilder.sections.languages")}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addLanguage}
                    title={t("cvBuilder.buttons.add")}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                {cv.languages.map((language, index) => (
                  <div className="input-group mb-2" key={index}>
                    <input
                      type="text"
                      className="form-control"
                      value={language}
                      placeholder={t("cvBuilder.placeholders.language")}
                      onChange={(event) => handleLanguageChange(index, event)}
                    />

                    {cv.languages.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => removeLanguage(index)}
                        title={t("cvBuilder.buttons.remove")}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT - PREVIEW
          ========================= */}

          <div className="col-lg-7">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="fw-bold mb-1">{t("cvBuilder.preview.title")}</h4>

                <small className="text-secondary">
                  {t("cvBuilder.preview.live")}
                </small>
              </div>

              <button type="button" className="btn btn-dark" onClick={printCV}>
                <i className="bi bi-printer me-2"></i>
                {t("cvBuilder.preview.print")}
              </button>
            </div>

            {/* CV PAPER */}

            <div className="cv-paper">
              {/* HEADER */}

              <div className="cv-header">
                {cv.photo && (
                  <img
                    src={cv.photo}
                    alt={t("cvBuilder.fields.photo")}
                    className="cv-profile-photo"
                  />
                )}

                <h1>{cv.fullName || t("cvBuilder.preview.yourName")}</h1>

                <h4>
                  {cv.jobTitle || t("cvBuilder.preview.professionalTitle")}
                </h4>

                <div className="cv-contact">
                  {cv.phone && (
                    <span>
                      <i className="bi bi-telephone me-1"></i>
                      {cv.phone}
                    </span>
                  )}

                  {cv.email && (
                    <span>
                      <i className="bi bi-envelope me-1"></i>
                      {cv.email}
                    </span>
                  )}

                  {cv.location && (
                    <span>
                      <i className="bi bi-geo-alt me-1"></i>
                      {cv.location}
                    </span>
                  )}

                  {cv.website && (
                    <span>
                      <i className="bi bi-link-45deg me-1"></i>
                      {cv.website}
                    </span>
                  )}
                </div>
              </div>

              {/* SUMMARY */}

              {cv.summary && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.profile")}</h3>

                  <p>{cv.summary}</p>
                </section>
              )}

              {/* EDUCATION */}

              {cv.education.some((item) => item.school || item.degree) && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.education")}</h3>

                  {cv.education.map((item, index) => {
                    if (!item.school && !item.degree) {
                      return null;
                    }

                    return (
                      <div className="cv-item" key={index}>
                        <div className="cv-item-top">
                          <div>
                            <h4>
                              {item.degree ||
                                t("cvBuilder.preview.placeholders.degree")}
                            </h4>

                            <strong>
                              {item.school ||
                                t("cvBuilder.preview.placeholders.school")}
                            </strong>
                          </div>

                          <span>{item.year}</span>
                        </div>

                        {item.description && <p>{item.description}</p>}
                      </div>
                    );
                  })}
                </section>
              )}

              {/* SKILLS */}

              {cv.skills.some((skill) => skill.trim() !== "") && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.skills")}</h3>

                  <div className="cv-skills">
                    {cv.skills.map((skill, index) => {
                      if (!skill.trim()) {
                        return null;
                      }

                      return <span key={index}>{skill}</span>;
                    })}
                  </div>
                </section>
              )}

              {/* PROJECTS */}

              {cv.projects.some(
                (project) => project.name || project.description,
              ) && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.projects")}</h3>

                  {cv.projects.map((project, index) => {
                    if (!project.name && !project.description) {
                      return null;
                    }

                    return (
                      <div className="cv-item" key={index}>
                        <h4>
                          {project.name ||
                            t("cvBuilder.preview.placeholders.project")}
                        </h4>

                        {project.description && <p>{project.description}</p>}

                        {project.technologies && (
                          <p className="cv-tech">
                            <strong>
                              {t("cvBuilder.preview.technologies")}:
                            </strong>{" "}
                            {project.technologies}
                          </p>
                        )}

                        {project.link && (
                          <p className="cv-link">{project.link}</p>
                        )}
                      </div>
                    );
                  })}
                </section>
              )}

              {/* EXPERIENCE */}

              {cv.experience.some((item) => item.company || item.position) && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.experience")}</h3>

                  {cv.experience.map((item, index) => {
                    if (!item.company && !item.position) {
                      return null;
                    }

                    return (
                      <div className="cv-item" key={index}>
                        <div className="cv-item-top">
                          <div>
                            <h4>
                              {item.position ||
                                t("cvBuilder.preview.placeholders.position")}
                            </h4>

                            <strong>
                              {item.company ||
                                t("cvBuilder.preview.placeholders.company")}
                            </strong>
                          </div>

                          <span>{item.duration}</span>
                        </div>

                        {item.description && <p>{item.description}</p>}
                      </div>
                    );
                  })}
                </section>
              )}

              {/* LANGUAGES */}

              {cv.languages.some((language) => language.trim() !== "") && (
                <section className="cv-section">
                  <h3>{t("cvBuilder.preview.sections.languages")}</h3>

                  <div className="cv-languages">
                    {cv.languages.map((language, index) => {
                      if (!language.trim()) {
                        return null;
                      }

                      return <span key={index}>{language}</span>;
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CVBuilder;
