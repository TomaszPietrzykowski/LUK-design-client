import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import draft from '../../assets/draft1.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: '8rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  },
  flexContainer: {
    ...theme.flex.row,
    [theme.breakpoints.down('sm')]: {
      ...theme.flex.col,
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
      padding: '1.5rem',
      order: 1,
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
    opacity: 0.8,
    lineHeight: 1.5,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      maxWidth: '100%',
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
