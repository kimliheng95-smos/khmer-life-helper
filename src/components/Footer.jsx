import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold d-flex align-items-center gap-2 text-white">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="Khmer Life Helper"
                width="32"
                height="32"
                className="brand-logo"
              />
              <span>Khmer Life Helper</span>
            </h5>

            <p className="text-white-50 mt-3 mb-2 fw-medium">
              {t("footer.tagline")}
            </p>

            <p className="text-secondary small mb-4">
              {t("footer.description")}
            </p>

            {/* Author card */}
            <div
              className="d-inline-flex align-items-center gap-3 p-2 pe-3 rounded-4"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(148, 163, 184, 0.16)",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}author.jpg`}
                alt="Kim Liheng"
                width="44"
                height="44"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
              <div>
                <div className="fw-semibold small text-white">Kim Liheng</div>
                <div className="text-secondary" style={{ fontSize: "0.75rem" }}>
                  {t("ui.footer.creatorRole")}
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white">{t("footer.explore")}</h6>

            <ul className="footer-links">
              <li>
                <Link to="/">{t("footer.links.home")}</Link>
              </li>
              <li>
                <Link to="/student">{t("footer.links.student")}</Link>
              </li>
              <li>
                <Link to="/career">{t("footer.links.career")}</Link>
              </li>
              <li>
                <Link to="/life">{t("footer.links.life")}</Link>
              </li>
              <li>
                <Link to="/next-step">{t("footer.links.nextStep")}</Link>
              </li>
              <li>
                <Link to="/dashboard">{t("footer.links.dashboard")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white">{t("ui.footer.studentTools")}</h6>

            <ul className="footer-links">
              <li>
                <Link to="/student/scholarships">
                  {t("student.tools.scholarship.title")}
                </Link>
              </li>
              <li>
                <Link to="/student/majors">
                  {t("student.tools.major.title")}
                </Link>
              </li>
              <li>
                <Link to="/student/study-guide">
                  {t("student.tools.study.title")}
                </Link>
              </li>
              <li>
                <Link to="/student/learning-roadmap">
                  {t("student.tools.roadmap.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white">{t("ui.footer.careerTools")}</h6>

            <ul className="footer-links">
              <li>
                <Link to="/career/cv-builder">
                  {t("career.tools.cv.title")}
                </Link>
              </li>
              <li>
                <Link to="/career/interview">
                  {t("career.tools.interview.title")}
                </Link>
              </li>
              <li>
                <Link to="/career/internships">
                  {t("career.tools.internship.title")}
                </Link>
              </li>
              <li>
                <Link to="/life/budget">{t("footer.links.budgetPlanner")}</Link>
              </li>
              <li>
                <Link to="/life/goals">{t("life.tools.goal.title")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white">{t("footer.followUs")}</h6>

            <div className="d-flex gap-2 mt-3 mb-4">
              <a
                href="https://www.facebook.com/KimLiheng.77/?_rdc=6&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://t.me/HENG77777"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>

              <a
                href="https://www.tiktok.com/@hengg899?_r=1&_t=ZS-9A1HcAsdsLh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>

            <div className="d-inline-flex gap-1 p-1 rounded-3" style={{ background: "rgba(255,255,255,0.06)" }}>
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`btn btn-sm px-2 py-1 border-0 ${
                  language === "en" ? "btn-primary text-white" : "text-secondary"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("kh")}
                className={`btn btn-sm px-2 py-1 border-0 ${
                  language === "kh" ? "btn-primary text-white" : "text-secondary"
                }`}
              >
                ខ្មែរ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <small>{t("footer.copyright")}</small>
          <small className="text-secondary">
            🇰🇭 {t("ui.footer.madeWithPurpose")}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
