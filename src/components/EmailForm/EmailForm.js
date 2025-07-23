import React from 'react';
import styles from './EmailForm.module.css';

const EmailForm = () => {
  return (
    <section className={styles.emailSection}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <h3 className={styles.title}>
            See My Projects At Once & leave Here Your E-mail Address
          </h3>
        </div>
        <div className={styles.formCol}>
          <form className={styles.emailForm}>
            <div className={styles.emailBox}>
              <input type="email" placeholder="Email Address" required autoComplete="off" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EmailForm);