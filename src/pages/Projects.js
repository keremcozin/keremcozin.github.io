// pages/Projects.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';
import { loremIpsumOne, loremIpsumTwo, loremIpsumThree, loremIpsumFour, loremIpsumFive } from './Home';

const projectsHeader = "There will be links to my GitHub repositories here.";
const projectsContentOne = "I'm currently working on this API for fun and curiosity. The original project doesn't belong to me; I'm merely playing with it.";
const projectsContentTwo = "Check my GitHub repository:";
const projectContentThree = "You can access this web site's source code from here:";

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
        <p>{projectContentThree}</p>
        <a href="https://github.com/keremcozin/keremcozin.github.io/releases/tag/keremcozin.github.io-source" target="_blank" rel="noopener noreferrer">Source code of keremcozin.github.io</a>
        <div>
          <p>{loremIpsumOne}</p>
          <p>{loremIpsumTwo}</p>
          <p>{loremIpsumThree}</p>
          <p>{loremIpsumFour}</p>
          <p>{loremIpsumFive}</p>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Projects;
