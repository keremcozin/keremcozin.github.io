// pages/blogs.js

import React from "react";

const blogsHeader = "There will be some stuff about books, videos, online courses and et cetera.";
const blogsContent = "Like this";
const Blogs = () => {
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
            <h1> {blogsHeader} </h1>
            <br />
            <p> {blogsContent} <a href="https://www.roadtoreact.com/" target="_blank">Road to React</a></p>
        </div>
    );
};
 
export default Blogs;