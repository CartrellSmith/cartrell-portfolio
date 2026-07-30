function Home() {
  return (
    <section className="home-hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Frontend Engineer & Christian Leader
        </h1>

        <p className="hero-subtitle">
          Building clean, purposeful, and accessible digital experiences.
        </p>

        <p className="hero-scripture">
          “Let your light shine before others…” — Matthew 5:16
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="hero-btn-primary">
            View My Work
          </a>
          <a href="/contact" className="hero-btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img
            src="src/assets/home_page.jpeg"
            alt="Cartrell Smith"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;