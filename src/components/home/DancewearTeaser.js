import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import mwlatin from '../../assets/mwlatin.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    //   border: '1px solid green',
    ...theme.utils.container,
    marginTop: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem',
    },
  },
  flexContainer: {
    ...theme.flex.col,
  },
  header: {
    ...theme.typography.serif,
    margin: '3rem',
    fontSize: 36,
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: -100,
      height: 2,
      width: 65,
      backgroundColor: theme.palette.common.blue,
      [theme.breakpoints.down('md')]: {
        left: -70,
        height: 2,
        width: 50,
      },
      [theme.breakpoints.down('xs')]: {
        left: -50,
        height: 1,
        width: 35,
      },
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      right: -100,
      height: 2,
      width: 65,
      backgroundColor: theme.palette.common.blue,
      [theme.breakpoints.down('md')]: {
        right: -70,
        height: 2,
        width: 50,
      },
      [theme.breakpoints.down('xs')]: {
        right: -50,
        height: 1,
        width: 35,
      },
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  tabsContainer: {
    // border: '1px solid orange',
    marginTop: '4rem',
    ...theme.flex.row,
    flexWrap: 'wrap',
    color: 'white',
  },
  tab: {
    // border: '1px solid blue',
    width: 260,
    height: 260,
    margin: '2rem',
    background: 'steelblue',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
    },
  },
  frame: {
    ...theme.flex.col,
    margin: 10,
    border: '2px solid white',
    height: 240,
    width: 240,
  },
  tabContent: {
    ...theme.typography.serif,
    fontSize: '2rem',
    textAlign: 'center',
  },
}));

const DancewearTeaser = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <div className={classes.header}>Dance couture</div>
        <div className={classes.tabsContainer}>
          <div
            className={classes.tab}
            style={{ backgroundImage: `url(${mwlatin})` }}
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Ballroom
                <br />
                dresses
              </div>
            </div>
          </div>
          <div
            className={classes.tab}
            style={{ backgroundImage: `url(${mwlatin})` }}
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Latin
                <br />
                dresses
              </div>
            </div>
          </div>
          <div
            className={classes.tab}
            style={{ backgroundImage: `url(${mwlatin})` }}
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Menswear
                <br />
                latin
              </div>
            </div>
          </div>
          <div
            className={classes.tab}
            style={{ backgroundImage: `url(${mwlatin})` }}
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Practise
                <br />
                wear
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DancewearTeaser;
