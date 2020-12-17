import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import Button from '@material-ui/core/Button';
import showcase from '../../assets/custom04.jpg';
import logoTrans from '../../assets/logo-trans-white.png';
// import { Link } from 'react-router-dom';
// import BagIcon from '@material-ui/icons/LocalMallOutlined';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    minHeight: 'inherit',
    padding: '5rem',
    paddingTop: '8rem',
    [theme.breakpoints.down('md')]: {
      padding: '6rem 4rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 3rem 3rem 3rem',
    },
  },
  logo: {
    width: 600,
    [theme.breakpoints.down('md')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: 380,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  infoContainer: {
    ...theme.flex.row,
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      ...theme.flex.col,
    },
  },
  infoEl: {
    ...theme.typography.mont,
    fontSize: 22,
    padding: '1rem 1.5rem',
    color: 'white',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  sep: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sepV: {
    background: 'white',
    height: 1,
    width: 70,
    opacity: '.5',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
      <Parallax
        bgImage={showcase}
        bgImageStyle={{ opacity: '.75' }}
        bgImageAlt='luk design showcase'
        strength={300}
      >
        <div className={classes.container}>
          <img src={logoTrans} alt='logo' className={classes.logo} />
          <div className={classes.infoContainer}>
            <div className={classes.infoEl}>{'Dance couture'}</div>
            <div className={classes.sep}> | </div>
            <div className={classes.sepV} />
            <div className={classes.infoEl}>Wedding dresses</div>
            <div className={classes.sep}> | </div>
            <div className={classes.sepV} />
            <div className={classes.infoEl}>Custom tailoring</div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Showcase;
