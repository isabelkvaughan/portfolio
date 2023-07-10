import React, { useState } from 'react';
import '../styles/portfolio.css';
import Project from '../components/Project';
import grapes from '../assets/grapes.jpeg';


export default function Portfolio() {

  const projects = [ 
    {
    projectTitle: 'DevLearn Hub',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'Just Another Text Editor',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'Work Day Scheduler',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
     {
    projectTitle: 'BidWise',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'Just Another Text Editor',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'e-Commerce Back End',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
     {
    projectTitle: 'Social Network API',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'Note Taker',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    },
    {
    projectTitle: 'Weather Dashboard',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: grapes
    }
  ]

  return (
      <div className='projectContainer'>
      {projects.map(({projectTitle, liveApp, repoName, image}) => (
        <Project 
        projectTitle = {projectTitle}
        liveApp = {liveApp}
        repoName = {repoName}
        image = {image}
        />
      ))}
      </div>
  );
}