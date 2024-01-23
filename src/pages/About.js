// pages/About.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';
import { loremIpsumOne, loremIpsumTwo, loremIpsumThree, loremIpsumFour, loremIpsumFive } from './Home';

const aboutHeader = "I'm a relatively new Software Engineer B.S. graduate from National Technical University, Kharkiv Polytechnic Institute. Practiced in object-oriented programming principles and full-stack development with a passion for modern programming techniques.";
const aboutContentOne = "You can contact me via discord:"
const aboutContentTwo = "I recently discovered this web site for making fancy resumes, check it out if you wanna try something new;";

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
          <a href="discordapp.com/users/1014177977132654592" target="_blank" rel="noopener noreferrer">
            My Discord
          </a>
        </p>
        <p>{aboutContentTwo}</p>
        <p>
          <a href="https://www.standardresume.co" target="_blank" rel="noopener noreferrer">
            Standard Resume
          </a>
        </p>
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

export default About;
