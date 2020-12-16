import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ballroom from '../../assets/ballroom.jpg';
import latin from '../../assets/latin.jpg';
import mwlatin from '../../assets/mwlatin.jpg';
import practice from '../../assets/practice.jpg';
import { Link } from 'react-router-dom';

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
    ...theme.typography.mont,
    margin: '3rem',
    fontSize: 42,
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: -100,
      height: 2,
      width: 65,
      backgroundColor: theme.palette.common.blue,
      opacity: 0.3,
      [theme.breakpoints.down('md')]: {
        left: -70,
        height: 2,
        width: 50,
      },
      [theme.breakpoints.down('sm')]: {
        left: -50,
        height: 1,
        width: 30,
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
      opacity: 0.3,
      [theme.breakpoints.down('md')]: {
        right: -70,
        height: 2,
        width: 50,
      },
      [theme.breakpoints.down('sm')]: {
        right: -50,
        height: 1,
        width: 30,
      },
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  tabsContainer: {
    marginTop: '3rem',
    ...theme.flex.row,
    flexWrap: 'wrap',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  tab: {
    width: 300,
    height: 300,
    margin: '1.5rem',
    background: 'steelblue',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      backgroundColor: 'rgba(0,0,0,.5)',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
    },
    '&:hover': {
      '&::before': {
        backgroundColor: 'rgba(0,0,0,.1)',
      },
    },
    '&:hover $tabContent': {
      backgroundColor: 'rgba(0,0,0,.7)',
      border: '1px solid white',
    },
    '&:hover $tabContent::after': {
      borderBottom: '1px solid transparent',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
      '&::before': {
        backgroundColor: 'rgba(0,0,0,.2)',
      },
    },
  },
  frame: {
    position: 'relative',
    ...theme.flex.col,
    margin: 6,
    border: '1px solid white',
    height: 288,
    width: 288,
  },
  tabContent: {
    ...theme.typography.mont,
    textTransform: 'uppercase',
    fontSize: '1.4rem',
    letterSpacing: 3,
    textAlign: 'center',
    padding: '.6rem 1.8rem',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '20%',
      bottom: 0,
      height: '1px',
      width: '60%',
      borderBottom: '1px solid rgba(255,255,255,.6)',
      [theme.breakpoints.down('sm')]: {
        opacity: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(0,0,0,.7)',
      border: '1px solid white',
    },
  },
}));

const DancewearTeaser = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <div className={classes.header}>Dance couture</div>
        {/* <div className={classes.para}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div> */}
        <div className={classes.tabsContainer}>
          <Link
            className={classes.tab}
            style={{ backgroundImage: `url(${ballroom})` }}
            to='/ballroomdresses'
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Ballroom
                <br />
                dresses
              </div>
            </div>
          </Link>
          <Link
            to='/latindresses'
            className={classes.tab}
            style={{ backgroundImage: `url(${latin})` }}
          >
            <div className={classes.frame}>
              <div className={classes.tabContent}>
                Latin
                <br />
                dresses
              </div>
            </div>
          </Link>
          <Link
            to='/menswearlatin'
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
          </Link>
          <div
            className={classes.tab}
            style={{ backgroundImage: `url(${practice})` }}
            onClick={() => window.open('https://shopify.com')}
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
