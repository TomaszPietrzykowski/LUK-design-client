import React, { Fragment } from 'react';
import AboutTeaser from '../home/AboutTeaser';
import CustomTeaser from '../home/CustomTeaser';
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
      <CustomTeaser />
      <AboutTeaser />
    </Fragment>
  );
};

export default Home;
