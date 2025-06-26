import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.cardOverlay}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);