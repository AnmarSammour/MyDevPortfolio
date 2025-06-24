import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './SkillCard.module.css';

const SkillCard = ({ title, percentage }) => {
  return (
    <div className={styles.skillDiv}>
      <div style={{ width: 190, height: 190 }}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            textColor: 'var(--text-color)',
            pathColor: `var(--primary-color)`,
            trailColor: 'transparent',
          })}
        />
      </div>
      <h4 className={styles.skillLabel}>{title}</h4>
    </div>
  );
};

export default React.memo(SkillCard);