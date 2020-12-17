import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import custom from '../../assets/custom02.jpg';
import customM from '../../assets/custommobile.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '12rem',
    width: '100%',
    backgroundImage: `url(${custom})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    [theme.breakpoints.down('sm')]: {
      ...theme.flex.col,
    },
  },
  empty: {
    flex: 1,
    width: '50%',
    minHeight: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundImage: `url(${customM})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: 600,
      order: 2,
    },
  },
  content: {
    flex: 1,
    ...theme.flex.col,
    alignItems: 'flex-start',
    width: '50%',
    color: 'white',
    margin: '8rem 0rem',
    padding: '6rem 5rem 5rem 5rem ',
    paddingRight: '1rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '4rem 2rem',
      margin: 0,
      background: 'black',
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
  btnWhite: {
    fontFamily: 'Montserrat, sans-serif',
    border: '1px solid white',
    padding: '.5rem 1.5rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    marginTop: '3rem',
    borderRadius: 4,
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'black',
      border: '1px solid black',
      boxShadow: '0px 0px 3px rgba(255,255,255,.3)',
    },
  },
}));

const CustomTeaser = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.empty}></div>
        <div className={classes.content}>
          <div className={classes.header}>Custom tailoring</div>
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
            <div className={classes.btnWhite}>read more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomTeaser;
