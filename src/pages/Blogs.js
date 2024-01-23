// pages/Blogs.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';
import Home, { loremIpsumOne, loremIpsumTwo, loremIpsumThree, loremIpsumFour, loremIpsumFive } from './Home';

const blogsHeader = "There will be some stuff about books, videos, online courses and et cetera.";
const blogsContent = "Like this";

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

export default Blogs;
