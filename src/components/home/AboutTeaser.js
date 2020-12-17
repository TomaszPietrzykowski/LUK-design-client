import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import personal from '../../assets/personal.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '12rem 0rem',
    ...theme.flex.row,
    [theme.breakpoints.down('sm')]: {
      ...theme.flex.col,
      margin: '0rem',
    },
  },
  picture: {
    flex: 1,
    minHeight: 700,
    backgroundImage: `url(${personal})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: 400,
      margin: 0,
      order: 1,
    },
  },
  contentContainer: {
    flex: 1,
    ...theme.flex.row,
  },
  content: {
    padding: '6rem 1rem 6rem 10rem',
    maxWidth: 700,
    ...theme.flex.col,
    alignItems: 'flex-start',
    margin: '4rem auto 4rem 0rem',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      padding: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '4rem 2rem',
      margin: 0,
    },
  },
  header: {
    ...theme.typography.mont,
    fontSize: 42,
    marginBottom: '2rem',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: -12,
      left: 0,
      height: 2,
      width: 75,
      backgroundColor: theme.palette.common.lightBlue,
      opacity: 1,
      [theme.breakpoints.down('md')]: {
        width: 60,
      },
      [theme.breakpoints.down('sm')]: {
        top: -8,
        height: 1,
        width: 50,
      },
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 26,
    },
  },
  para: {
    ...theme.typography.mont,
    maxWidth: '90%',
    lineHeight: 1.5,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      maxWidth: '100%',
    },
  },
  btnBlack: {
    fontFamily: 'Montserrat, sans-serif',
    border: '1px solid black',
    padding: '.7rem 1.8rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    marginTop: '3rem',
    borderRadius: 4,
    fontSize: 14,
    '&:hover': {
      color: 'white',
      backgroundColor: 'black',
      border: '1px solid black',
      boxShadow: '0px 0px 4px rgba(0,0,0,.4)',
    },
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      backgroundColor: 'black',
      border: '1px solid black',
      boxShadow: '0px 0px 4px rgba(0,0,0,.4)',
    },
  },
}));

const AboutTeaser = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.picture}></div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <div className={classes.header}>Personal touch</div>
          <div className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Eget nunc lobortis mattis aliquam
            faucibus purus.
          </div>
          <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classes.btnBlack}>about&nbsp;us</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutTeaser;
