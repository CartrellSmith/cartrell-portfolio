import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <h2 className="section-title">About Me</h2>

      <p className="section-subtitle">
        “Let your light shine before others…” — Matthew 5:16
      </p>

      <div className="about-content">
        <div className="about-left">
          <img
            src="/assets/about_page.jpeg"
            alt="Cartrell Smith"
            loading="lazy"
            className="about-image"
          />
        </div>

        <div className="about-right">
          <h3 className="about-heading">Hi, I’m Cartrell.</h3>

          <p className="about-text">
            I’m a Frontend Developer from Natchez, Mississippi with a passion
            for building clean, accessible, and purposeful digital experiences.
            I love crafting interfaces that feel intuitive, intentional, and
            welcoming — especially for communities that benefit from clarity and
            accessibility.
          </p>

          <p className="about-text">
            I’m also a Youth Pastor at Antioch Baptist Church, where I teach,
            mentor, and help young people grow spiritually and personally. My
            faith guides my work, my leadership, and the way I approach
            technology: with excellence, humility, and service.
          </p>

          <p className="about-text">
            Whether I’m coding a React application, designing a UI, or helping a
            student understand their calling, my goal is always the same — to
            build things that uplift people and glorify God.
          </p>

          <Link to="/contact" className="about-btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;