import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { TOOLS_CATALOG } from "../data/toolsCatalog";

function Navbar({ onOpenSearch }) {
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 14);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const menuEl = document.getElementById("navbarMenu");
    if (menuEl && menuEl.classList.contains("show")) {
      const toggler = document.querySelector('[data-bs-target="#navbarMenu"]');
      toggler?.click();
    }
  }, [location.pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top klh-navbar ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Khmer Life Helper"
            width="36"
            height="36"
            className="brand-logo"
          />
          <span className="brand-text">Khmer Life Helper</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                <i className="bi bi-house"></i>
                <span>{t("navbar.home")}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/student">
                <i className="bi bi-mortarboard"></i>
                <span>{t("navbar.student")}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/career">
                <i className="bi bi-briefcase"></i>
                <span>{t("navbar.career")}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/life">
                <i className="bi bi-heart"></i>
                <span>{t("navbar.life")}</span>
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-grid"></i>
                <span>{t("ui.nav.tools")}</span>
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ minWidth: "270px", maxHeight: "72vh", overflowY: "auto" }}
              >
                {TOOLS_CATALOG.map((tool) => (
                  <li key={tool.id}>
                    <Link className="dropdown-item" to={tool.to}>
                      <span
                        className={`d-inline-flex align-items-center justify-content-center rounded-2 bg-${tool.color}-subtle text-${tool.color}`}
                        style={{ width: "28px", height: "28px", flexShrink: 0 }}
                      >
                        <i className={`bi ${tool.icon}`}></i>
                      </span>
                      <span className="small">{t(tool.titleKey)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/next-step">
                <i className="bi bi-compass"></i>
                <span>{t("navbar.nextStep")}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                <i className="bi bi-speedometer2"></i>
                <span>{t("navbar.dashboard")}</span>
              </NavLink>
            </li>

            {onOpenSearch && (
              <li className="nav-item ms-lg-1">
                <button
                  type="button"
                  className="klh-search-trigger"
                  onClick={onOpenSearch}
                  aria-label={t("ui.search.title")}
                >
                  <i className="bi bi-search"></i>
                  <span className="d-lg-none">{t("ui.nav.search")}</span>
                  <kbd className="d-none d-xl-inline">Ctrl K</kbd>
                </button>
              </li>
            )}

            {/* Language Switcher */}
            <li className="nav-item dropdown ms-lg-1">
              <button
                className="btn klh-lang-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-translate me-1 text-primary"></i>
                {language === "en" ? "EN" : "ខ្មែរ"}
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    type="button"
                    className={`dropdown-item ${
                      language === "en" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("en")}
                  >
                    🇬🇧 English
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className={`dropdown-item ${
                      language === "kh" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("kh")}
                  >
                    🇰🇭 ខ្មែរ
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item ms-lg-1">
              <Link to="/next-step" className="btn klh-nav-cta">
                {t("navbar.getStarted")}
                <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
