import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

/**
 * Modern SaaS hero banner for internal category and tool pages,
 * featuring breadcrumbs, ambient gradient mesh, and optional right-side content.
 */
function PageHero({
  badge,
  badgeIcon,
  title,
  subtitle,
  color = "primary",
  breadcrumbs = [],
  aside = null,
  align = "left",
}) {
  const { t } = useLanguage();

  const isCentered = align === "center" && !aside;

  return (
    <section className={`klh-page-hero klh-page-hero-${color}`}>
      <div className="klh-hero-grid" aria-hidden="true"></div>
      <div className="klh-orb klh-orb-1" aria-hidden="true"></div>
      <div className="klh-orb klh-orb-2" aria-hidden="true"></div>

      <div className="container position-relative">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className={`mb-3 ${isCentered ? "d-flex justify-content-center" : ""}`}
          >
            <ol className="breadcrumb klh-breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="bi bi-house-door me-1"></i>
                  {t("navbar.home")}
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li
                    key={crumb.label + index}
                    className={`breadcrumb-item ${isLast ? "active" : ""}`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    ) : (
                      crumb.label
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div
          className={`row align-items-center g-4 ${
            isCentered ? "justify-content-center text-center" : ""
          }`}
        >
          <div className={aside ? "col-lg-7" : isCentered ? "col-lg-9" : "col-lg-10"}>
            {badge && (
              <span
                className={`klh-pill-badge klh-pill-${color} mb-3 klh-anim-fade-up`}
              >
                {badgeIcon && <i className={`bi ${badgeIcon}`}></i>}
                <span>{badge}</span>
              </span>
            )}

            <h1 className="klh-page-title fw-bold mb-3 klh-anim-fade-up klh-delay-1">
              {title}
            </h1>

            {subtitle && (
              <p
                className={`lead text-secondary mb-0 klh-anim-fade-up klh-delay-2 ${
                  isCentered ? "mx-auto" : ""
                }`}
                style={isCentered ? { maxWidth: "700px" } : { maxWidth: "640px" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {aside && (
            <div className="col-lg-5 klh-anim-fade-up klh-delay-2">
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
