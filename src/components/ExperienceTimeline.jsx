function ExperienceTimeline() {
  const items = [
    {
      year: "2026",
      title: "Mississippi Coding Academy",
      details: "Frontend Capstone • React SPA • Community Projects",
    },
    {
      year: "2026",
      title: "JavaScript Arcade Projects",
      details: "Whack‑a‑Mole • Memory Match • Snake • React mini‑games",
    },
    {
      year: "2018",
      title: "Community Leader — Natchez, MS",
      details: "Building resources for families and youth",
    },
    {
      year: "2015",
      title: "Youth Pastor — Antioch Baptist Church",
      details: "Teaching, mentoring, digital ministry tools",
    },
  ];

  return (
    <div className="timeline">
      <div className="timeline-line"></div>

      {items.map((item) => (
        <div key={item.year} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;