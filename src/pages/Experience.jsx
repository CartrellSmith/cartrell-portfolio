import ExperienceTimeline from "../components/ExperienceTimeline.jsx";

function Experience() {
  return (
    <section className="experience-page">
      <h2 className="section-title">Experience & Skills</h2>

      <p className="section-subtitle">
        “Commit to the Lord whatever you do…” — Proverbs 16:3
      </p>

      <ExperienceTimeline />

      <div className="skills-grid">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML & CSS</span>
        <span>Accessibility</span>
        <span>Git & GitHub</span>
        <span>UI/UX Principles</span>
      </div>
    </section>
  );
}

export default Experience;
