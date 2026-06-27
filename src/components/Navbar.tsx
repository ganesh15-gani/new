import { useEffect, useState } from "react";
import "../styles/Navbar.css";

import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiLogIn,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.setAttribute(
        "data-theme",
        "light"
      );
    } else {
      setDarkMode(true);
      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;

    setDarkMode(next);

    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light"
    );

    localStorage.setItem(
      "theme",
      next ? "dark" : "light"
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="nav-container">

          {/* LOGO */}

          <a
            href="#home"
            className="logo"
          >
            <div className="logo-wrapper">

              <div className="logo-glow"></div>

              <div className="logo-circle">

                <svg
                  className="circle-text"
                  viewBox="0 0 220 220"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M110,110
                        m-82,0
                        a82,82 0 1,1 164,0
                        a82,82 0 1,1 -164,0
                      "
                    />
                  </defs>

                  <text>
                    <textPath
                      href="#circlePath"
                      startOffset="0%"
                    >
                      STAYZEN •
                      VENDORS •
                      PREMIUM •
                      STAYZEN •
                    </textPath>
                  </text>

                </svg>

                <div className="logo-center">
                  SZ
                </div>

              </div>

            </div>

            <h2 className="logo-name">
              StayZen
            </h2>

          </a>

          {/* DESKTOP MENU */}

          <nav className="nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#properties">
              Properties
            </a>

            <a href="#faq">
              FAQ
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

          {/* RIGHT SIDE */}

          <div className="nav-actions">

            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <FiSun />
              ) : (
                <FiMoon />
              )}
            </button>

            <button className="login-btn">
              <FiLogIn />
              Login
            </button>

            <button className="enroll-btn">
              Enroll Now
            </button>

            <button
              className="menu-btn"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? (
                <FiX />
              ) : (
                <FiMenu />
              )}
            </button>

          </div>

        </div>
                  {/* MOBILE MENU */}

          <div
            className={`mobile-menu ${
              menuOpen ? "active" : ""
            }`}
          >

            <button
              className="mobile-close"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <FiX />
            </button>

            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#properties"
              onClick={closeMenu}
            >
              Properties
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>

            <button
              className="mobile-theme-btn"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <>
                  <FiSun />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              className="mobile-login"
              onClick={closeMenu}
            >
              <FiLogIn />
              Login
            </button>

            <button
              className="mobile-enroll"
              onClick={closeMenu}
            >
              Enroll Now
            </button>

          </div>

          {/* BACKDROP */}

          {menuOpen && (
            <div
              className="menu-overlay"
              onClick={closeMenu}
            />
          )}

      </header>
    </>
  );
};

export default Navbar;