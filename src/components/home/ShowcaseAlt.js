import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import showcase from '../../assets/custom02.jpg';
import logoTrans from '../../assets/logo-trans-white.png';
import { Link } from 'react-router-dom';
import BagIcon from '@material-ui/icons/LocalMallOutlined';
import { Parallax, Background } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    minHeight: 'inherit',
    padding: '5rem',
    paddingTop: '8rem',
    // paddingTop: '14rem',
    [theme.breakpoints.down('md')]: {
      padding: '6rem 4rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 3rem 3rem 3rem',
    },
  },
  logo: {
    width: '40vw',
  },
  infoContainer: {
    ...theme.flex.row,
    marginTop: '2rem',
  },
  infoEl: {
    ...theme.typography.mont,
    fontSize: 24,
    padding: '1rem 2rem',
    color: 'white',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  sep: {
    color: 'white',
  },
  para: {
    ...theme.typography.sans,
    fontSize: '1rem',
    color: 'white',
    maxWidth: '50%',
    marginTop: '1rem',
    opacity: 0.7,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      maxWidth: '65%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
  btnPrimary: {
    ...theme.typography.tab,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 0,
    borderRadius: 4,
    background: theme.palette.common.gradient1,
    color: 'white',
    padding: '.6rem 3rem .5rem 3rem',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    transition: 'opacity .15s ease-out',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.2rem',
      marginRight: 'auto',
      padding: '.5rem 2rem .4rem 2rem',
      fontSize: 10,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.2rem',
      marginRight: 'auto',
      padding: '.5rem 1rem .4rem 1rem',
      fontSize: 9,
    },
  },
  bagIcon: {
    fontSize: '1.2rem',
    marginBottom: 5,
    marginRight: '.6rem',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      marginBottom: 2,
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    // <div className={classes.showcase}>
    <Parallax
      bgImage={showcase}
      bgImageAlt='luk design showcase'
      strength={300}
    >
      <div className={classes.container}>
        <img src={logoTrans} alt='logo' className={classes.logo} />
        <div className={classes.infoContainer}>
          <div className={classes.infoEl}>Dance couture</div>
          <div className={classes.sep}> | </div>
          <div className={classes.infoEl}>Wedding dresses</div>
          <div className={classes.sep}> | </div>
          <div className={classes.infoEl}>Custom tailoring</div>
        </div>

        {/* <div className={classes.btnContainer}>
          <div
            className={classes.btnPrimary}
            onClick={() => {
              window.open('https://www.shopify.com');
            }}
          >
            <BagIcon className={classes.bagIcon} />
            <span>shop online</span>
          </div>
        </div> */}
      </div>
    </Parallax>
  );
};

export default Showcase;
