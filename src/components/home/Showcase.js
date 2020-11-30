import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import showcase from '../../assets/showcase02.jpg';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import BagIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
  showcase: {
    width: '100%',
    minHeight: '20vh',
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
    paddingBottom: '8rem',
  },
  slogan: {
    ...theme.typography.serif,
    fontSize: 60,
    color: 'white',
    paddingTop: '8rem',
  },
  para: {
    color: 'white',
    fontFamily: 'Source Sans Pro, serif',
    fontSize: '1rem',
    letterSpacing: 1,
    lineHeight: 1.4,
    marginTop: '1rem',
    opacity: 0.7,
  },
  btnContainer: {
    display: 'flex',
    marginTop: '2.2rem',
  },
  btnPrimary: {
    ...theme.typography.tab,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 0,
    borderRadius: 4,
    background: theme.palette.common.gradient1,
    color: 'white',
    padding: '.25rem 3rem .2rem 2.5rem',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    // border: '1px solid white',
    transition: 'opacity .15s ease-out',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  },
  bagIcon: {
    fontSize: '1.2rem',
    marginBottom: 5,
    marginRight: '.6rem',
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
            accusantium doloremque laudantium, totam rem aperiam, eaque. <br />{' '}
            Perspiciatis unde omnis iste natus.
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
              FREE ESTIMATE
            </Button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Showcase;
