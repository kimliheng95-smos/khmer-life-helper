import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <h5 className="fw-bold">🇰🇭 Khmer Life Helper</h5>

            <p className="text-secondary mt-3 mb-2">{t("footer.tagline")}</p>

            <p className="text-secondary small mb-0">
              {t("footer.description")}
            </p>
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>

              <a
                href="https://tiktok.com"
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
