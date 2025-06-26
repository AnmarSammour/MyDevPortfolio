import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

import project1 from '../../assets/images/webFrontEnd.png';
import project2 from '../../assets/images/quranweb.png';
import project3 from '../../assets/images/iceCreamApp.png';
import project4 from '../../assets/images/learnapp.png';
import project5 from '../../assets/images/chatapp.png';
import project6 from '../../assets/images/bootstrap.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const projects = [
    {
      id: 1,
      title: "Digital wink",
      description: "Simple Design With HTML & CSS",
      image: project1,
      category: 'web'
    },
    {
      id: 2,
      title: "The Holy Quran website",
      description: "Online Store HTML & CSS3 Design",
      image: project2,
      category: 'web'
    },
    {
      id: 3,
      title: "ScoopMarket App",
      description: "Android app with Java",
      image: project3,
      category: 'app'
    },
    {
      id: 4,
      title: "Educational App",
      description: "Flutter app with Dart",
      image: project4,
      category: 'app'
    },
    {
      id: 5,
      title: "Chat App",
      description: "Android App with Kotlin",
      image: project5,
      category: 'app'
    },
    {
      id: 6,
      title: "Digital wink - Bootstrap",
      description: "Simple Design With Bootstrap",
      image: project6,
      category: 'web'
    }
  ];

  const Tab1 = () => (
    <div className={styles.projectsGrid}>
      {projects.map(project => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );

  const Tab2 = () => {
    const appProjects = projects.filter(p => p.category === 'app');
    return (
      <div className={styles.projectsGrid}>
        {appProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    );
  };

  const Tab3 = () => {
    const webProjects = projects.filter(p => p.category === 'web');
    return (
      <div className={styles.projectsGrid}>
        {webProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>
          My name is Abulrahman, I live in Gharbia, El Mahalla El Kubra Center, These are some of my projects.
        </p>
        
        <div className={styles.projectsTabs}>
          <ul className={styles.projectsNav}>
            <li 
              className={`${styles.navItem} ${activeTab === 'tab1' ? styles.active : ''}`}
              onClick={() => setActiveTab('tab1')}
            >
              <button>All Projects</button>
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === 'tab2' ? styles.active : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              <button>Mobile Apps</button>
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === 'tab3' ? styles.active : ''}`}
              onClick={() => setActiveTab('tab3')}
            >
              <button>Websites</button>
            </li>
          </ul>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'tab1' && <Tab1 />}
          {activeTab === 'tab2' && <Tab2 />}
          {activeTab === 'tab3' && <Tab3 />}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);