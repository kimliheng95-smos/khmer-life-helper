import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <h5 className="fw-bold d-flex align-items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="Khmer Life Helper"
                width="28"
                height="28"
                className="brand-logo"
              />
              Khmer Life Helper
            </h5>

            <p className="text-secondary mt-3 mb-2">{t("footer.tagline")}</p>

            <p className="text-secondary small mb-3">
              {t("footer.description")}
            </p>

            {/* Author photo */}
            <div className="d-flex align-items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}author.jpg`}
                alt="Kim Liheng"
                width="48"
                height="48"
                className="rounded-circle border"
                style={{ objectFit: "cover" }}
              />
              <div>
                <div className="fw-semibold small">Kim Liheng</div>
                <div className="text-secondary small">Creator</div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold">{t("footer.explore")}</h6>

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
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold">{t("footer.tools")}</h6>

            <ul className="footer-links">
              <li>
                <Link to="/next-step">{t("footer.links.nextStep")}</Link>
              </li>
              <li>
                <Link to="/dashboard">{t("footer.links.dashboard")}</Link>
              </li>
              <li>
                <Link to="/career/cv-builder">
                  {t("footer.links.cvBuilder")}
                </Link>
              </li>
              <li>
                <Link to="/life/budget">{t("footer.links.budgetPlanner")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="fw-bold">{t("footer.followUs")}</h6>

            <div className="d-flex gap-3 mt-3">
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
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <small>{t("footer.copyright")}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

