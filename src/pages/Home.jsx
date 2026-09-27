import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <span className="home-badge badge bg-primary-subtle text-primary px-3 py-2">
                🇰🇭 {t("home.badge")}
              </span>

              <h1 className="display-4 fw-bold mb-3">{t("home.heroTitle")}</h1>

              <p className="lead text-secondary mb-4">
                {t("home.heroDescription")}
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <Link to="/next-step" className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-compass me-2"></i>
                  {t("home.startJourney")}
                </Link>

                <a href="#explore" className="btn btn-outline-dark btn-lg px-4">
                  {t("home.exploreTools")}
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-card">
                <div className="hero-icon">
                  <i className="bi bi-compass"></i>
                </div>

                <h3 className="fw-bold mt-4">{t("home.nextStepQuestion")}</h3>

                <p className="text-secondary">
                  {t("home.nextStepDescription")}
                </p>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div className="progress-bar" style={{ width: "65%" }}></div>
                </div>

                <small className="text-secondary">
                  {t("home.journeyStart")}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-5 bg-light" id="explore">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">
              {t("home.exploreLabel")}
            </span>

            <h2 className="fw-bold mt-2">{t("home.exploreTitle")}</h2>

            <p className="text-secondary">{t("home.exploreDescription")}</p>
          </div>

          <div className="row g-4">
            {/* Student */}
            <div className="col-md-4">
              <div className="card category-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="category-icon bg-primary-subtle text-primary">
                    <i className="bi bi-mortarboard"></i>
                  </div>

                  <h4 className="fw-bold mt-4">{t("home.studentTitle")}</h4>

                  <p className="text-secondary">
                    {t("home.studentDescription")}
                  </p>

                  <Link
                    to="/student"
                    className="text-decoration-none fw-semibold"
                  >
                    {t("home.exploreStudent")}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Career */}
            <div className="col-md-4">
              <div className="card category-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="category-icon bg-success-subtle text-success">
                    <i className="bi bi-briefcase"></i>
                  </div>

                  <h4 className="fw-bold mt-4">{t("home.careerTitle")}</h4>

                  <p className="text-secondary">
                    {t("home.careerDescription")}
                  </p>

                  <Link
                    to="/career"
                    className="text-decoration-none fw-semibold"
                  >
                    {t("home.exploreCareer")}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Life */}
            <div className="col-md-4">
              <div className="card category-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="category-icon bg-danger-subtle text-danger">
                    <i className="bi bi-heart"></i>
                  </div>

                  <h4 className="fw-bold mt-4">{t("home.lifeTitle")}</h4>

                  <p className="text-secondary">{t("home.lifeDescription")}</p>

                  <Link to="/life" className="text-decoration-none fw-semibold">
                    {t("home.exploreLife")}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="next-step-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                🧭 {t("home.nextStepLabel")}
              </span>

              <h2 className="display-6 fw-bold mb-3">
                {t("home.notSureTitle")}
              </h2>

              <p className="text-secondary lead">
                {t("home.notSureDescription")}
              </p>

              <Link
                to="/next-step"
                className="btn btn-primary btn-lg px-4 mt-3"
              >
                <i className="bi bi-compass me-2"></i>
                {t("home.findNextStep")}
              </Link>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="next-step-card">
                <div className="step-item">
                  <div className="step-number">1</div>

                  <div>
                    <h6 className="fw-bold mb-1">{t("home.step1Title")}</h6>

                    <p className="text-secondary mb-0">
                      {t("home.step1Description")}
                    </p>
                  </div>
                </div>

                <div className="step-line"></div>

                <div className="step-item">
                  <div className="step-number">2</div>

                  <div>
                    <h6 className="fw-bold mb-1">{t("home.step2Title")}</h6>

                    <p className="text-secondary mb-0">
                      {t("home.step2Description")}
                    </p>
                  </div>
                </div>

                <div className="step-line"></div>

                <div className="step-item">
                  <div className="step-number">3</div>

                  <div>
                    <h6 className="fw-bold mb-1">{t("home.step3Title")}</h6>

                    <p className="text-secondary mb-0">
                      {t("home.step3Description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <i className="bi bi-compass display-4"></i>

          <h2 className="fw-bold mt-3">{t("home.readyTitle")}</h2>

          <p className="mb-4 opacity-75">{t("home.readyDescription")}</p>

          <Link to="/next-step" className="btn btn-light btn-lg px-4">
            {t("home.getStarted")}
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
