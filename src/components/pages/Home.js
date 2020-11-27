import React, { Fragment } from 'react';
import Showcase from '../home/Showcase';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <div
        style={{
          minHeight: '80vh',
        }}
      ></div>
    </Fragment>
  );
};

export default Home;
