import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import showcase from '../../assets/showcase02.jpg';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
  showcase: {
    width: '100%',
    minHeight: '42vw',
    // backgroundColor: 'steelblue',
    // backgroundImage: `url(${showcase})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    marginTop: '2.2rem',
  },
  container: {
    ...theme.utils.container,
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 'inherit',
    padding: '10rem',
  },
  slogan: {
    fontFamily: 'Bree serif',
    fontWeight: 400,
    fontSize: 50,
    letterSpacing: 2,
    color: 'white',
    lineHeight: 1,
    paddingTop: '8rem',
  },
  para: {
    color: 'white',
    fontFamily: 'Open sans',
    fontSize: '.9rem',
    letterSpacing: 2,
    lineHeight: 1.7,
    marginTop: '1rem',
    opacity: 0.8,
  },
  btnContainer: {
    display: 'flex',
    marginTop: '4rem',
  },
  btnPrimary: {
    ...theme.typography.tab,
    marginLeft: 0,
    borderRadius: 4,
    background: theme.palette.common.gradient1,
    color: 'white',
    padding: '.6rem 3rem .5rem 3rem',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    border: '1px solid white',
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
    '&:hover': {
      background: 'none',
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <Parallax bgImage={showcase} strength={300}>
      <div className={classes.showcase}>
        <div className={classes.container}>
          <h1 className={classes.slogan}>
            Dancewear tailored
            <br /> to your talent
          </h1>
          <p className={classes.para}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{' '}
            <br />
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
              shop online
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
    </Parallax>
  );
};

export default Showcase;
