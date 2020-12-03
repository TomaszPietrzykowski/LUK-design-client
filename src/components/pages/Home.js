import React, { Fragment } from 'react';
import DancewearTeaser from '../home/DancewearTeaser';
import Showcase from '../home/Showcase';
import Slogan from '../home/Slogan';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Slogan />
      <DancewearTeaser />
      <div
        style={{
          minHeight: '80vh',
        }}
      ></div>
    </Fragment>
  );
};

export default Home;
