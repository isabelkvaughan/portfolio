import React from 'react';
import PageHeading from '../components/PageHeading';
import '../styles/resume.css';
import CV from '../assets/IsabelNoonan_CV.pdf';

export default function Resume() {
  return (
    <div className='resumeContainer'>
      <PageHeading pageHeading='Resume' />
      <div className='sectionContainer'>
        <div className='section'>
          <h5>Front-End Proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Flexbox</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className='section'>
          <h5>Back-End Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>Progressive Web Applications</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>

      <div>
      <a href={CV} className='downloadCV' download="IsabelNoonan_CV.pdf"> Download Isabel's CV here</a>
      </div>
    </div>
  );
}
