// pages/Home.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';
import CatAvatar from '../components/catAvatar';

const homeHeader = "Hi there!";
const homeContentOne = "This is my GitHub page to show some of the stuff I've made.";
const homeContentTwo = "There isn't much content here at the moment but I'll keep it updated.";

const Home = () => {
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
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <CatAvatar />
          <div style={{ marginLeft: 10, marginTop: 2 }}>
            <h3>{homeHeader}</h3>
            <p>{homeContentOne}</p>
            <p>{homeContentTwo}</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Home;