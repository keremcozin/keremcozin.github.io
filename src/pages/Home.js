// pages/Home.js

import React from 'react';
import { Container as LayoutContainer } from '../components/Layout/layoutElements';
import CatAvatar from '../components/catAvatar';

const homeHeader = "Hi there!";
const homeContentOne = "This is my GitHub page to show some of the stuff I've made.";
const homeContentTwo = "There isn't much content here at the moment but I'll keep it updated.";

export const loremIpsumOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt placerat neque vel dapibus. Quisque ac lacinia erat, et consectetur arcu. Etiam non tempus erat. Fusce rutrum lobortis velit, a scelerisque odio gravida eget. Aliquam imperdiet sem id ultrices vulputate. Aliquam at augue mattis, viverra arcu et, aliquam purus. Praesent rhoncus sapien sit amet lorem placerat tincidunt. Duis est mi, sagittis eu diam vitae, pulvinar posuere nisl. Duis eget orci eget orci facilisis congue. Proin quis aliquam nisi. Aliquam posuere orci turpis, quis viverra leo lacinia eu. Vivamus suscipit dui vel arcu ultrices bibendum.";
export const loremIpsumTwo = "Morbi ornare ex ipsum, sit amet scelerisque sapien sagittis sed. Praesent turpis mi, viverra eu porttitor nec, suscipit sed quam. Integer dapibus enim diam, ut volutpat leo tincidunt sed. Nulla pellentesque semper urna non rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper quis mauris nec porttitor. Donec nec justo eu turpis egestas faucibus. In gravida tempus ultricies. Phasellus consectetur congue lorem, tincidunt pretium tellus dignissim non. Morbi non egestas arcu, a tincidunt justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sodales justo eget diam vestibulum, at faucibus mauris sodales. Sed ullamcorper ligula elit, ac bibendum eros vulputate in.";
export const loremIpsumThree = "Pellentesque vel sollicitudin ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu eros quis quam pulvinar ornare in gravida nibh. Mauris in placerat magna. Nunc semper, dolor quis fermentum semper, dolor mauris commodo lorem, id auctor libero nibh ac eros. Phasellus faucibus, felis nec hendrerit sollicitudin, ipsum leo eleifend nulla, in lacinia purus odio id tellus. Nullam consectetur id lacus in aliquam. Nunc gravida vehicula scelerisque. Proin id enim a libero hendrerit tempus. Proin ut tellus massa. Pellentesque ullamcorper blandit tortor sit amet luctus. Fusce ut tincidunt neque, in aliquam orci.";
export const loremIpsumFour = "Aenean nec convallis purus. Curabitur a est nec ligula tristique semper vel vel orci. Morbi ac quam quam. Vestibulum vitae nibh rhoncus, consequat leo vitae, tristique justo. Nam felis nisi, tempus nec arcu ut, dapibus aliquam nunc. Suspendisse bibendum sem at justo gravida tincidunt. Duis consequat erat vitae felis vulputate sollicitudin sit amet vitae libero. Donec dolor ligula, mattis eu urna ac, gravida auctor orci. Sed et mi et ipsum ornare consectetur sed non nunc.";
export const loremIpsumFive = "Curabitur placerat tincidunt sem, eleifend luctus libero feugiat quis. Maecenas mollis nunc a risus aliquet, et bibendum tellus vulputate. Donec sit amet auctor massa, id sollicitudin justo. Donec consequat bibendum dignissim. Aliquam pretium sem eget dictum elementum. Pellentesque pretium varius tortor non convallis. Aenean quis pellentesque nisl. Vestibulum ut placerat ligula. Proin in vehicula nisi, vitae ornare massa. Integer et felis a ex fringilla congue sit amet vitae nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis efficitur luctus. Etiam quis nunc vel ligula porta interdum. In ultrices maximus porttitor. Nunc et sollicitudin erat. Proin dictum vel lorem eu pulvinar.";

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

export default Home;