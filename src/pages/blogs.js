// pages/blogs.js

import React from "react";

const BlogsHeader = "There will be some stuff about books, videos, online courses and et cetera.";
const BlogsContent = "Like this";
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
            <h1> {BlogsHeader} </h1>
            <br />
            <p> {BlogsContent} <a href="https://www.roadtoreact.com/" target="_blank">Road to React</a></p>
        </div>
    );
};
 
export default Blogs;