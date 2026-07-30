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
    </footer>
  );
}

export default Footer;