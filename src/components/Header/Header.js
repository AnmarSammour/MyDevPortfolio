import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleNavClick("home")}
        >
          Portfolio
        </a>

        <button
          className={styles.menuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a
                href="#home"
                className={`${styles.navLink} ${
                  activeTab === "home" ? styles.active : ""
                }`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#skills"
                className={`${styles.navLink} ${
                  activeTab === "skills" ? styles.active : ""
                }`}
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#projects"
                className={`${styles.navLink} ${
                  activeTab === "projects" ? styles.active : ""
                }`}
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </a>
            </li>
          </ul>

          <div className={styles.socialAndConnect}>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/anmarsammour"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/AnmarSammour"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.behance.net/anmarsammour"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://wa.me/+970595351929"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            <a
              href="#contact"
              className={styles.connectButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
