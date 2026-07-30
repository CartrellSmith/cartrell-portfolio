import { Link } from "react-router-dom";

function ProjectCard({ repo }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{repo.name}</h3>

      <p className="project-desc">
        {repo.description || "A clean and purposeful project."}
      </p>

      <p className="project-language">
        <strong>Language:</strong> {repo.language || "N/A"}
      </p>

      <Link to={`/projects/${repo.id}`} className="project-btn">
        View Details
      </Link>
    </article>
  );
}

export default ProjectCard;