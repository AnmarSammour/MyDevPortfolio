import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

// React Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faBehance, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to apply scrolled styles
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
    console.log(`Navigating to ${tab} section`);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          Portfolio
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a
                href="#"
                className={`${styles.navLink} ${
                  activeTab === "home" ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#"
                className={`${styles.navLink} ${
                  activeTab === "skills" ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#"
                className={`${styles.navLink} ${
                  activeTab === "projects" ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("projects");
                }}
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Social Icons & Connect Button */}
          <div className={styles.socialAndConnect}>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/anmarsammour" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/AnmarSammour" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.behance.net/anmarsammour" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon icon={faBehance} />
              </a>
              <a
                href="https://wa.me/+970595351929" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>

            <a
              href="#"
              className={styles.connectButton}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
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