import React, { useState } from 'react';
import '../styles/portfolio.css';
import Project from '../components/Project';

import DevLearn from '../assets/dev-learn.png';
import TextEditor from '../assets/jate.png';
import WorkScheduler from '../assets/work-scheduler.png';
import BidWise from '../assets/bid-wise.png';
import PasswordGenerator from '../assets/password-generator.png';
import NoteTaker from '../assets/note-taker.png';


export default function Portfolio() {

  const projects = [ 
    {
    projectTitle: 'DevLearn Hub',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'dev-learn-hub',
    image: DevLearn
    },
    {
    projectTitle: 'Just Another Text Editor',
    liveApp: 'https://another-text-editor-d3636211ee47.herokuapp.com/',
    repoName: 'another-text-editor',
    image: TextEditor
    },
    {
    projectTitle: 'Work Day Scheduler',
    liveApp: 'https://isabelkvaughan.github.io/work-day-scheduler/',
    repoName: 'work-day-scheduler',
    image: WorkScheduler
    },
     {
    projectTitle: 'BidWise',
    liveApp: 'https://dev-learn-app.herokuapp.com/',
    repoName: 'BidWise',
    image: BidWise
    },
    {
    projectTitle: 'Password Generator',
    liveApp: 'https://isabelkvaughan.github.io/password-generator-isabel/',
    repoName: 'password-generator-isabel',
    image: PasswordGenerator
    },
    {
    projectTitle: 'Note Taker',
    liveApp: 'https://express-note-taker-i.herokuapp.com/',
    repoName: 'express-note-taker',
    image: NoteTaker
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