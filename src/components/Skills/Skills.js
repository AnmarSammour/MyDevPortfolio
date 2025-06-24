import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SkillCard from '../SkillCard/SkillCard';
import styles from './Skills.module.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1250, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 830, min: 0 },
      items: 1,
    },
  };

  const skillsList = [
    { id: 1, title: "Frontend Development", percentage: 90 },
    { id: 2, title: "Dart (Flutter)", percentage: 97 },
    { id: 3, title: "JavaScript", percentage: 90 },
    { id: 4, title: "HTML", percentage: 95 },
    { id: 5, title: "React Js", percentage: 85 },
    { id: 6, title: "Responsive Design", percentage: 97 },
    { id: 7, title: "Bootstrap", percentage: 90 },
    { id: 8, title: "Kotlin (Android)", percentage: 95 },
    { id: 9, title: "Java (Android)", percentage: 90 },
    { id: 10, title: "Version Control (Git/GitHub)", percentage: 90 }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <h5 className={styles.sectionSubtitle}>You Can See My Skills Here</h5>
        
        <Carousel 
          className={styles.customCarousel}
          responsive={responsive} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {skillsList.map(skill => (
            <SkillCard key={skill.id} title={skill.title} percentage={skill.percentage} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default React.memo(Skills);