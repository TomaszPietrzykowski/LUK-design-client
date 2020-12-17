import React, { Fragment } from 'react';
import DancewearTeaser from '../home/DancewearTeaser';
import Showcase from '../home/ShowcaseAlt';
import Slogan from '../home/Slogan';
import WeddingTeaser from '../home/WeddingTeaser';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Slogan />
      <DancewearTeaser />
      <WeddingTeaser />
      <div
        style={{
          minHeight: '80vh',
        }}
      ></div>
    </Fragment>
  );
};

export default Home;
