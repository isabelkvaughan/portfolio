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
          <p>Front-End Proficiencies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Flexbox</li>
          </ul>
        </div>

        <div className='section'>
          <p>Back-End Proficiencies</p>
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
      <a href={CV} download="IsabelNoonan_CV.pdf"> Download Isabel's CV here</a>
      </div>
    </div>
  );
}
