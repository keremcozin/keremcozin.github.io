// pages/Projects.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';

const projectsHeader = "There will be links to my GitHub repositories here.";
const projectsContentOne = "I'm currently working on this API for fun and curiosity. The original project doesn't belong to me; I'm merely playing with it.";
const projectsContentTwo = "Check my GitHub repository:";

const Projects = () => {
  return (
    <LayoutContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          margin: '0 auto',
          padding: '0 20px',
          maxWidth: '600px'
        }}
      >
        <h3>{projectsHeader}</h3>
        <br />
        <p>{projectsContentOne}</p>
        <a href="https://spacetraders.io/" target="_blank" rel="noopener noreferrer">Space Traders API</a>
        <p>{projectsContentTwo}</p>
        <a href="https://github.com/keremcozin" target="_blank" rel="noopener noreferrer">https://github.com/keremcozin</a>
      </div>
    </LayoutContainer>
  );
};

export default Projects;
