// pages/about.js

import React from 'react';

const AboutHeader = "This section is about introductions.";
const AboutContent = "And so on...";
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
            <h1> {AboutHeader} </h1>
            <br />
            <p> {AboutContent} </p>
        </div>
    );
};
 
export default About;