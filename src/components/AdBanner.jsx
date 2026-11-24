import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function AdBanner() {
  const { t } = useLanguage();

  return (
    <div className="container py-4">
      <div className="ad-banner">
        <div className="d-flex align-items-center gap-3 text-start">
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-subtle text-primary flex-shrink-0"
            style={{ width: "44px", height: "44px", fontSize: "1.15rem" }}
          >
            <i className="bi bi-stars"></i>
          </span>
          <div>
            <span className="badge bg-primary-subtle text-primary me-2">
              <i className="bi bi-megaphone me-1"></i>
              {t("ad.advertisement")}
            </span>
            <p className="mb-0 mt-1 text-secondary small">{t("ui.ad.tip")}</p>
          </div>
        </div>

        <Link
          to="/next-step"
          className="btn btn-outline-primary btn-sm px-3 klh-arrow-hover flex-shrink-0"
        >
          {t("navbar.getStarted")}
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default AdBanner;
