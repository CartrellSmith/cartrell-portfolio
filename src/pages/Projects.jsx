import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";
import ProjectCard from "../components/ProjectCard.jsx";

const GITHUB_URL = "https://api.github.com/users/CartrellSmith/repos";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useFetch(GITHUB_URL);

  const filtered =
    data
      ?.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(repo => repo.name.toLowerCase() !== "gittest") // NEW
    ?? [];

  return (
    <section className="projects-page">
      <h2 className="section-title">My Projects</h2>

      <p className="section-subtitle">
        “Whatever you do, work at it with all your heart…” — Colossians 3:23
      </p>

      <input
        type="text"
        className="projects-search"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading && <p>Loading projects...</p>}
      {error && <p className="error">{error}</p>}

      <div className="projects-grid">
        {filtered.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Projects;