// pages/Blogs.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';

const blogsHeader = "There will be some stuff about books, videos, online courses and et cetera.";
const blogsContent = "Like this";
<<<<<<< HEAD

<<<<<<< HEAD
const Blogs = () => {
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
        <h3>{blogsHeader}</h3>
        <br />
        <p>
          {blogsContent}{' '}
          <a href="https://www.roadtoreact.com/" target="_blank" rel="noopener noreferrer">
            Road to React
          </a>
        </p>
      </div>
    </LayoutContainer>
  );
=======
const blogsHeader = "There will be some stuff about books, videos, online courses and et cetera.";
const blogsContent = "Like this";
=======
>>>>>>> 25d454bba3c804e85c5c0ce0696f7fbbc3f22280
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
>>>>>>> 25d454bba3c804e85c5c0ce0696f7fbbc3f22280
};

export default Blogs;