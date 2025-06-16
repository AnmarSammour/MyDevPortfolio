// src/components/Header/Header.js
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>Portfolio</a>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuBtn}>
          ☰
        </button>
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;