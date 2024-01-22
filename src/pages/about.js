// pages/About.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';

const aboutHeader = "I'm a relatively new Software Engineer B.S. graduate from National Technical University, Kharkiv Polytechnic Institute. Practiced in object-oriented programming principles and full-stack development with a passion for modern programming techniques.";
const aboutContentOne = "I recently discovered this web site for making fancy resumes, check it out if you wanna try something new;";
const aboutContentTwo = "And some more content here...";

const About = () => {
  return (
    <LayoutContainer>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>{aboutHeader}</h2>
        <p>{aboutContentOne}</p>
        <p>
          <a href="https://www.standardresume.co" target="_blank" rel="noopener noreferrer">
            Standard Resume
          </a>
        </p>
        <p>{aboutContentTwo}</p>
      </div>
    </LayoutContainer>
  );
};

export default About;