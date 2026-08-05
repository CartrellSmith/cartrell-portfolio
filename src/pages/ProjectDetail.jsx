import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";

function ProjectDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://api.github.com/repositories/${id}`
  );

  if (isLoading) {
    return <p className="loading">Loading project details...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <section className="project-detail-page">
      <h2 className="section-title">{data.name}</h2>

      <p className="section-subtitle">
        “Whatever you do, do it all for the glory of God.” — 1 Corinthians 10:31
      </p>

      <div className="project-detail-card">
        <p className="project-detail-desc">
          {data.description || "This project was built with excellence and purpose."}
        </p>

        <div className="project-detail-info">
          <p><strong>Language:</strong> {data.language || "N/A"}</p>
          <p><strong>Stars:</strong> {data.stargazers_count}</p>
          <p><strong>Forks:</strong> {data.forks_count}</p>
          <p><strong>Open Issues:</strong> {data.open_issues_count}</p>
        </div>

        <div className="project-detail-actions">

          {/* Live Demo Button (only if homepage exists) */}
          {data.homepage && (
            <a
              href={data.homepage}
              target="_blank"
              rel="noreferrer"
              className="project-detail-btn live-demo-btn"
            >
              Live Demo
            </a>
          )}

          {/* GitHub Button */}
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-detail-btn github-btn"
          >
            View on GitHub
          </a>

          {/* Back Button */}
          <a
            href="/projects"
            className="project-detail-btn back-btn"
          >
            ← Back to Projects
          </a>

        </div>
      </div>

    </section>
  );
}

export default ProjectDetail;