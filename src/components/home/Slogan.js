import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import draft from '../../assets/draft1.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: '8rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  picture: {
    flex: 1,
    minHeight: '65vh',
    backgroundImage: `url(${draft})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      minHeight: '30vh',
      width: '90%',
      margin: 'auto',
      marginTop: '3rem',
      order: 2,
    },
  },
  content: {
    flex: 1,
    padding: '3rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0rem 2rem 0rem 2.6rem',
      order: 1,
    },
  },
  header: {
    ...theme.typography.serif,
    fontSize: 36,
    marginBottom: '2rem',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: -12,
      left: 0,
      height: 2,
      width: 75,
      backgroundColor: theme.palette.common.blue,
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
      fontSize: 26,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  para: {
    ...theme.typography.sans,
    maxWidth: '90%',
    opacity: 0.8,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

const Slogan = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <div className={classes.picture}></div>
        <div className={classes.content}>
          <div className={classes.header}>
            We design and craft your memories
          </div>
          <div className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
