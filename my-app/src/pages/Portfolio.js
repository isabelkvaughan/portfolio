import React from 'react';
import '../styles/portfolio.css';
import Project from '../components/Project';

export default function Portfolio() {
  return (
      <div>
        <div>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
        <div>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
        <div>
          <Project 
          projectTitle= 'DevLearn Hub'
          liveApp= 'https://dev-learn-app.herokuapp.com/'
          repoName= 'dev-learn-hub'/>
        </div>
      </div>
  );
}
