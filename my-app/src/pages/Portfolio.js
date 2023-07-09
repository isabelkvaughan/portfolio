import React from 'react';
import Project from '../components/Project';

const styles = {
  projectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh',
    backgroundColor: '#F5EFEC'
  },
  project: {
    width: 'calc(33.33% - 10px)',
    height: '300px',
  },
};

export default function Portfolio() {
  return (
      <div style={styles.projectContainer}>
        <div style={styles.project}>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
        <div style={styles.project}>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
        <div style={styles.project}>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
      </div>
  );
}
