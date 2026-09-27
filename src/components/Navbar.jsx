import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" to="/">
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
          className="navbar-toggler"
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
                <i className="bi bi-house me-1"></i>
                {t("navbar.home")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/student">
                <i className="bi bi-mortarboard me-1"></i>
                {t("navbar.student")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/career">
                <i className="bi bi-briefcase me-1"></i>
                {t("navbar.career")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/life">
                <i className="bi bi-heart me-1"></i>
                {t("navbar.life")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/next-step">
                <i className="bi bi-compass me-1"></i>
                {t("navbar.nextStep")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                <i className="bi bi-speedometer2 me-1"></i>
                {t("navbar.dashboard")}
              </NavLink>
            </li>

            {/* Language Switcher */}
            <li className="nav-item dropdown ms-lg-2">
              <button
                className="btn btn-light border dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-translate me-1"></i>

                {language === "en" ? "🇬🇧 English" : "🇰🇭 ខ្មែរ"}
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
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

            <li className="nav-item ms-lg-2">
              <Link to="/next-step" className="btn btn-primary btn-sm px-3">
                {t("navbar.getStarted")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
