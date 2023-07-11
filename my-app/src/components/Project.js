import React from 'react';
import '../styles/portfolio.css';
const Project = ({ projectTitle, liveApp, repoName, image }) => {
  return (
    <div className="project">
      <div className="overlay"></div>
      <img className="projectImage" src={image} alt={projectTitle} />
      {/* <h2>
        <a href={liveApp}>{projectTitle}</a>
      </h2>
      <p>
        <a href={`https://github.com/isabelkvaughan/${repoName}`}>
          github
        </a>
      </p> */}
    </div>
  );
};

export default Project;
