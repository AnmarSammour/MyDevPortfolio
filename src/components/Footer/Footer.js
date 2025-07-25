import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.topSection}>
          <a href="#home" className={styles.logo}>Portfolio</a>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/anmarsammour" className={styles.iconLink}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AnmarSammour" className={styles.iconLink}>
              <i className="fab fa-github"></i>
            </a>
            <a href="anmarsammour2000@gmail.com" className={styles.iconLink}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/+970595351929" className={styles.iconLink}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          --&copy; Copyrights {new Date().getFullYear()}-- All Rights Reserved Here By Anmar Sammour
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);