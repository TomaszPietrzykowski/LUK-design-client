import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logoBlack from '../../assets/RGB/Logotyp_Black.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    minHeight: '8rem',
    backgroundColor: 'black',
    color: 'white',
  },
  container: {
    border: '1px solid green',
    minHeight: 'inherit',
    ...theme.utils.container,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    border: '1px solid indigo',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columns: {
    border: '1px solid blue',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  c1: {
    flex: 1,
    border: '1px solid orange',
  },
  c2: {
    flex: 1,
    border: '1px solid orange',
  },
  c3: {
    flex: 1,
    border: '1px solid orange',
  },
  socialHeader: {
    ...theme.typography.serif,
    fontSize: '2rem',
    padding: '1rem',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  facebook: {
    fontSize: '2rem',
  },
  instagram: {
    fontSize: '2rem',
  },
  separator: {
    width: '1px',
    background: 'white',
    height: '60px',
    margin: '1rem 3rem',
  },
  logoBlack: {
    height: '9rem',
  },
  contact: {
    padding: '.4rem 1rem',
    fontFamily: 'Source Sans Pro, sans',
    letterSpacing: 1,
    fontSize: 14,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.columns}>
          <div className={classes.c1}>
            <img
              src={logoBlack}
              alt='logo-black'
              className={classes.logoBlack}
            />
            <div className={classes.contact}>
              <div className={classes.contact}>mail@lukdesignatelier.com</div>
              <div className={classes.contact}>
                workshop@lukdesignatelier.com
              </div>
              <div className={classes.contact}>Nameofthestraat 123</div>
              <div className={classes.contact}>123 XY Amsterdam</div>
              <div className={classes.contact}>020-123 12 123</div>
            </div>
          </div>
          <div className={classes.c2}>
            <ul>
              <li>Home</li>
            </ul>
          </div>
          <div className={classes.c3}>col3</div>
          <div className={classes.social}>
            <div className={classes.socialHeader}>Follow us</div>
            <div className={classes.socialIcons}>
              <div className={classes.facebook}>FB</div>
              <div className={classes.separator} />
              <div className={classes.instagram}>IN</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
