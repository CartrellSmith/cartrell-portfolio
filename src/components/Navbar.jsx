import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span className="logo-text">Cartrell D. Smith</span>
                <span className="logo-cross">✝</span>
            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" end className="nav-item">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-item">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="nav-item">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className="nav-item">
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-item">
                        Contact
                    </NavLink>
                </li>
            </ul>

            <div className="nav-actions">
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default Navbar;