import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logoBlack from '../../assets/RGB/Logotyp_Black.png';
import fb from '../../assets/facebook1.svg';
import insta from '../../assets/instagram1.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    minHeight: '8rem',
    backgroundColor: 'black',
    color: 'white',
    padding: '2rem',
  },
  container: {
    // border: '1px solid green',
    minHeight: 'inherit',
    ...theme.utils.container,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  columns: {
    // border: '1px solid blue',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  c1: {
    flex: 1,
    // border: '1px solid orange',
  },
  c2: {
    flex: 1,
    // border: '1px solid orange',
  },
  c3: {
    flex: 1,
    // border: '1px solid orange',
  },
  social: {
    // border: '1px solid indigo',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  socialHeader: {
    ...theme.typography.serif,
    fontSize: '2rem',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    fontSize: '2rem',
  },
  instagram: {
    fontSize: '2rem',
  },
  logoBlack: {
    height: '9rem',
  },
  contact: {
    padding: '.4rem 1rem',
    fontFamily: 'Source Sans Pro, sans',
    letterSpacing: 2,
    fontSize: 12,
  },
  ul: {
    margin: '2rem',
    listStyle: 'none',
    // borderLeft: `1px solid rgba(255,255,255,.6)`,
  },
  li: {
    ...theme.typography.tab,
    fontSize: 11,
    padding: '.8rem 1rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  icon: {
    height: '3.5rem',
    margin: ' .5rem 1.5rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
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
              <div className={classes.contact}>Nameofthestraat 123</div>
              <div className={classes.contact}>123 XY Amsterdam</div>
              <div className={classes.contact}>020-123 12 123</div>
            </div>
          </div>
          <div className={classes.c2}>
            <ul className={classes.ul}>
              <li className={classes.li}>Home</li>
              <li className={classes.li}>Dance couture</li>
              <li className={classes.li}>Ballroom dresses</li>
              <li className={classes.li}>Latin dresses</li>
              <li className={classes.li}>Menswear latin</li>
              <li className={classes.li}>Practise wear</li>
            </ul>
          </div>
          <div className={classes.c3}>
            <ul className={classes.ul}>
              <li className={classes.li}>Wedding dresses</li>
              <li className={classes.li}>Custom tailoring</li>
              <li className={classes.li}>About us</li>
              <li className={classes.li}>Contact</li>
              <li className={classes.li}>Webshop</li>
              <li className={classes.li}>Language</li>
            </ul>
          </div>
          <div className={classes.social}>
            <div className={classes.socialHeader}>Follow us</div>
            <div className={classes.socialIcons}>
              <div
                className={classes.facebook}
                onClick={() =>
                  window.open('https://www.facebook.com/designluk')
                }
              >
                <img src={fb} alt='facebook link' className={classes.icon} />
              </div>
              <div
                className={classes.instagram}
                onClick={() =>
                  window.open('https://www.instagram.com/design.luk/')
                }
              >
                <img src={insta} alt='facebook link' className={classes.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
