import { Link } from "react-router-dom";
import { SpotlightCard } from "./Motion";

function ToolCard({
  icon,
  title,
  description,
  button,
  color = "primary",
  to = "/next-step",
  badge = null,
}) {
  return (
    <SpotlightCard className="card tool-card h-100">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex align-items-start justify-content-between gap-2">
          <div className={`tool-card-icon bg-${color}-subtle text-${color}`}>
            <i className={`bi ${icon}`}></i>
          </div>

          {badge && (
            <span
              className={`badge bg-${color}-subtle text-${color} rounded-pill px-3 py-2`}
            >
              {badge}
            </span>
          )}
        </div>

        <h4 className="fw-bold mt-4 mb-2">{title}</h4>

        <p className="text-secondary flex-grow-1 mb-4">{description}</p>

        <Link
          to={to}
          className={`btn btn-outline-${color} mt-auto align-self-start klh-arrow-hover`}
        >
          <span>{button}</span>
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </SpotlightCard>
  );
}

export default ToolCard;
