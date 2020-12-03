import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import showcase from '../../assets/showcase02.jpg';
import { Link } from 'react-router-dom';
import BagIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
  showcase: {
    width: '100%',
    minHeight: '20vh',
    backgroundImage: `url(${showcase})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  container: {
    ...theme.utils.container,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 'inherit',
    padding: '10rem',
    [theme.breakpoints.down('md')]: {
      padding: '6rem 4rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 3rem 3rem 3rem',
    },
  },
  slogan: {
    ...theme.typography.serif,
    maxWidth: '70%',
    fontSize: 48,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
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
  btnContainer: {
    display: 'flex',
    marginTop: '2.2rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginTop: '1.2rem',
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
  btnSecondary: {
    ...theme.typography.tab,
    borderRadius: 4,
    border: '1px solid white',
    background: 'none',
    color: 'white',
    marginLeft: '3rem',
    padding: '.6rem 3rem .5rem 3rem',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    transition: 'opacity .15s ease-out',
    '&:hover': {
      background: 'none',
      opacity: 0.85,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 'auto',
      padding: '.5rem 1.6rem .4rem 1.6rem',
      fontSize: 9,
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    // <Parallax bgImage={showcase} strength={300}>
    <div className={classes.showcase}>
      <div className={classes.container}>
        <h1 className={classes.slogan}>
          Dancewear tailored
          <br /> to your talent
        </h1>
        <p className={classes.para}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque.
        </p>
        <div className={classes.btnContainer}>
          <div
            className={classes.btnPrimary}
            onClick={() => {
              window.open('https://www.shopify.com');
            }}
          >
            <BagIcon className={classes.bagIcon} />
            <span>shop online</span>
          </div>
          <Button
            variant='contained'
            color='primary'
            className={classes.btnSecondary}
            component={Link}
            to='/contact'
          >
            get in touch
          </Button>
        </div>
      </div>
    </div>
    // </Parallax>
  );
};

export default Showcase;
