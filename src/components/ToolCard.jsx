import { Link } from "react-router-dom";

function ToolCard({
  icon,
  title,
  description,
  button,
  color = "primary",
  to = "/next-step",
}) {
  return (
    <div className="card tool-card h-100 border-0 shadow-sm">
      <div className="card-body p-4 d-flex flex-column">
        <div className={`tool-card-icon bg-${color}-subtle text-${color}`}>
          <i className={`bi ${icon}`}></i>
        </div>

        <h4 className="fw-bold mt-4">{title}</h4>

        <p className="text-secondary flex-grow-1">
          {description}
        </p>

        <Link
          to={to}
          className={`btn btn-outline-${color} mt-2 align-self-start`}
        >
          {button}
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default ToolCard;