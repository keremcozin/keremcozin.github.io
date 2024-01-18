// pages/annual.js

import React from "react";

const ProjectsHeader = 'There will be links to my GitHub repositories here.';
const ProjectsContent = 'Check my GitHub repository:';

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
            <h1> {ProjectsHeader} </h1>
            <br />
            <p> {ProjectsContent} </p>
            <a href="https://github.com/keremcozin" target="_blank">https://github.com/keremcozin</a>
        </div>
    );
};
 
export default Projects;