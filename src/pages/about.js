// pages/About.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';

const aboutHeader = "I'm a relatively new Software Engineer B.S. graduate from National Technical University, Kharkiv Polytechnic Institute. Practiced in object-oriented programming principles and full-stack development with a passion for modern programming techniques.";
const aboutContentOne = "I recently discovered this web site for making fancy resumes, check it out if you wanna try something new;";
const aboutContentTwo = "And some more content here...";

<<<<<<< HEAD
const About = () => {
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
        <h3>{aboutHeader}</h3>
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
=======
const aboutHeader = "This section is about introductions.";
const aboutContent = "And so on...";
const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '100vh'
            }}
        >
            <h1> {aboutHeader} </h1>
            <br />
            <p> {aboutContent} </p>
        </div>
    );
>>>>>>> 25d454bba3c804e85c5c0ce0696f7fbbc3f22280
};

export default About;