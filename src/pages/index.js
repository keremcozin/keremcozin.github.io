// pages/index.js

import React from 'react';

const homeHeader = "Hi there!";
const homeContent = "This is my GitHub page to show some of the stuff I've made.";
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
        <h1> {homeHeader} </h1>
        <p> {homeContent} </p>
    </div>
  );
};
 
export default Home;