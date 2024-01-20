// pages/annual.js

import React from "react";

const projectsHeader = 'There will be links to my GitHub repositories here.';
const projectsContent = 'Check my GitHub repository:';

const Projects = () => {
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
            <h1> {projectsHeader} </h1>
            <br />
            <p> {projectsContent} </p>
            <a href="https://github.com/keremcozin" target="_blank">https://github.com/keremcozin</a>
        </div>
    );
};
 
export default Projects;