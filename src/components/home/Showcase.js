import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import showcase from '../../assets/showcase01.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  showcase: {
    width: '100%',
    minHeight: 700,
    backgroundColor: 'steelblue',
    backgroundImage: `url(${showcase})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '2.2rem',
  },
  container: {
    ...theme.utils.container,
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 700,
    padding: '0 10rem',
  },
  slogan: {
    fontFamily: 'Bree serif',
    fontWeight: 400,
    fontSize: 56,
    letterSpacing: 2,
    color: 'white',
    lineHeight: 1.1,
    paddingTop: '2rem',
  },
  para: {
    color: 'white',
    fontFamily: 'Open sans',
    fontSize: '1rem',
    letterSpacing: 2,
    lineHeight: 1.7,
    marginTop: '2.5rem',
    opacity: 0.8,
  },
  btnContainer: {
    display: 'flex',
    marginTop: '2.5rem',
  },
  btnPrimary: {
    ...theme.typography.tab,
    marginLeft: 0,
    borderRadius: 6,
    background: theme.palette.common.gradient1,
    color: 'white',
    padding: '.5rem 3rem .3rem 3rem',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    border: '2px solid white',
  },
  btnSecondary: {
    ...theme.typography.tab,
    borderRadius: 6,
    border: '2px solid white',
    background: 'none',
    color: 'white',
    marginLeft: '4rem',
    padding: '.7rem 3rem .7rem 3rem',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    '&:hover': {
      background: 'none',
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <div className={classes.showcase}>
      <div className={classes.container}>
        <h1 className={classes.slogan}>
          Dancewear tailored
          <br /> to your talent
        </h1>
        <p className={classes.para}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque.
        </p>
        <div className={classes.btnContainer}>
          <Button
            variant='contained'
            color='primary'
            className={classes.btnPrimary}
            onClick={() => {
              window.open('https://www.shopify.com');
            }}
          >
            online shop
          </Button>
          <Button
            variant='contained'
            color='primary'
            className={classes.btnSecondary}
            component={Link}
            to='/contact'
          >
            FREE ESTIMATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
