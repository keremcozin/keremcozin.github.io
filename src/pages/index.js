// pages/index.js

import React from 'react';

const HomeHeader = "Hi there!";
const HomeContent = "This is my GitHub page to show some of the stuff I've made.";
const Home = () => {
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
        <h1> {HomeHeader} </h1>
        <p> {HomeContent} </p>
    </div>
  );
};
 
export default Home;