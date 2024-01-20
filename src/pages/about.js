// pages/about.js

import React from 'react';

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
};
 
export default About;