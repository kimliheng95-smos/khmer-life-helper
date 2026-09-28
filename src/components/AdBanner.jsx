import { useLanguage } from "../context/useLanguage";

function AdBanner() {
  const { t } = useLanguage();

  return (
    <div className="container py-4">
      <div className="ad-banner">
        <i className="bi bi-megaphone me-2"></i>
        {t("ad.advertisement")}
      </div>
    </div>
  );
}

export default AdBanner;

