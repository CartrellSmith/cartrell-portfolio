function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3 className="footer-logo">Cartrell D. Smith ✝</h3>

        <p className="footer-scripture">
          “To God be the glory.” — 1 Corinthians 10:31
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Cartrell Smith — Built with React & Vite
        </p>
      </div>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/cartrellsmith/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>

        <button
          className="footer-link back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top ↑
        </button>
      </div>
      <div className="footer-content">
        ...
      </div>
    </footer>
  );
}

export default Footer;