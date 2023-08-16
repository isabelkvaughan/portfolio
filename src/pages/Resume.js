import React from 'react';
import PageHeading from '../components/PageHeading';
import '../styles/resume.css';

export default function Resume() {
  return (
    <div className='resumeContainer'>
      <PageHeading pageHeading='Resume' />
      <div className='sectionContainer'>
        <div className='section'>
          <h4>Technical Skills</h4>

          <div className='skillsContainer'>
            <div>
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
          <br></br>
          <div>
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
        </div>

        <div className='section'>
          <h4>Professional Skills</h4>
          <ul>
            <li><b>Salesforce CRM - </b>Marketing Cloud, Exact Target</li>
            <li><b>Adobe Suite - </b>InDesign, Illustrator, Photoshop, Premiere, After Effects, Acrobat</li>
            <li><b>Content Management - </b>Contentful CMS, Wordpress, Squarespace</li>
            <li><b>Task Management - </b>Monday, Asana, Trello, Jira</li>
            <li><b>Office Suite and Google Suite, Google Analytics</b></li>
          </ul>
        </div>

        <div className='section'>
        <h4>Education</h4>
          <p><b>Full Stack Flex Web Development Certificate</b>
            <br></br>
            Monash University Boot Camps | 2023</p>

          <p><b>Bachelor of Design (Communication)</b>
            <br></br>
            Swinburne University of Technology | 2015 - 2018</p>
        </div>

        <div className='section'>
          <h4>Full CV Available Upon Request</h4>
        </div>
      </div>
    </div>
  );
}
