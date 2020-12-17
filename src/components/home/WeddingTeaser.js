import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import wedding from '../../assets/wedding01.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '12rem',
    ...theme.flex.row,
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      ...theme.flex.col,
      marginTop: '3rem',
    },
  },
  picture: {
    flex: 1,
    minHeight: 800,
    backgroundImage: `url(${wedding})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      minHeight: 700,
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
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      order: 2,
    },
  },
  content: {
    color: 'white',
    background: 'rgb(68, 152, 213)',
    padding: '6rem 5rem 5rem 5rem',
    maxWidth: 700,
    ...theme.flex.col,
    alignItems: 'flex-start',
    margin: '4rem -3rem 4rem auto',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      padding: '4rem',
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
      backgroundColor: 'white',
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
  btnWhite: {
    fontFamily: 'Montserrat, sans-serif',
    border: '1px solid white',
    padding: '.7rem 1.8rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    marginTop: '3rem',
    borderRadius: 4,
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'black',
      border: '1px solid black',
      boxShadow: '0px 0px 4px rgba(255,255,255,.8)',
    },
  },
}));

const WeddingTeaser = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <div className={classes.header}>Wedding dresses</div>
          <div className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Eget nunc lobortis mattis aliquam
            faucibus purus.
          </div>
          <Link
            to='/wedding'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div className={classes.btnWhite}>read&nbsp;more</div>
          </Link>
        </div>
      </div>
      <div className={classes.picture}></div>
    </div>
  );
};

export default WeddingTeaser;
