import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logoBlack from '../../assets/RGB/Logotyp_Black.png';
import fb from '../../assets/facebook1.svg';
import insta from '../../assets/instagram1.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    minHeight: '8rem',
    backgroundColor: 'black',
    color: 'white',
    padding: '2rem',
  },
  container: {
    minHeight: 'inherit',
    ...theme.utils.container,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  columns: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  c1: {
    flex: 1,
    minWidth: 270,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      order: 4,
      marginLeft: '1rem',
      marginTop: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  c2: {
    flex: 1,
    minWidth: 270,
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
  c3: {
    flex: 1,
    minWidth: 270,
    // border: '1px solid orange',
    [theme.breakpoints.down('md')]: {
      order: 2,
    },
  },
  social: {
    // border: '1px solid indigo',
    flex: 1,
    minWidth: 270,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      order: 3,
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
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
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      marginRight: 'auto',
      order: 2,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
  contact: {
    padding: '.4rem 1rem',
    fontFamily: 'Source Sans Pro, sans',
    letterSpacing: 2,
    fontSize: 12,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      order: 1,
    },
  },
  contactItem: {
    padding: '.4rem 1rem',
  },
  ul: {
    margin: '2rem',
    listStyle: 'none',
    // borderLeft: `1px solid rgba(255,255,255,.6)`,
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
  link: {
    textDecoration: 'none',
  },
  li: {
    ...theme.typography.tab,
    fontSize: 11,
    padding: '.8rem 1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
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
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: '2rem',
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
              <div className={classes.contactItem}>
                mail@lukdesignatelier.com
              </div>
              <div className={classes.contactItem}>Nameofthestraat 123</div>
              <div className={classes.contactItem}>123 XY Amsterdam</div>
              <div className={classes.contactItem}>020-123 12 123</div>
            </div>
          </div>
          <div className={classes.c2}>
            <ul className={classes.ul}>
              <Link className={classes.link} to='/'>
                <li className={classes.li}>Home</li>
              </Link>
              <Link className={classes.link} to='/dancecouture'>
                <li className={classes.li}>Dance couture</li>
              </Link>
              <Link className={classes.link} to='/ballroomdresses'>
                <li className={classes.li}>Ballroom dresses</li>
              </Link>
              <Link className={classes.link} to='/latindresses'>
                <li className={classes.li}>Latin dresses</li>
              </Link>
              <Link className={classes.link} to='/menswearlatin'>
                <li className={classes.li}>Menswear latin</li>
              </Link>
              <div
                className={classes.li}
                onClick={() => window.open('https://shopify.com')}
              >
                Practise wear
              </div>
            </ul>
          </div>
          <div className={classes.c3}>
            <ul className={classes.ul}>
              <Link className={classes.link} to='/wedding'>
                <li className={classes.li}>Wedding dresses</li>
              </Link>
              <Link className={classes.link} to='/custom'>
                <li className={classes.li}>Custom tailoring</li>
              </Link>
              <Link className={classes.link} to='/about'>
                <li className={classes.li}>About us</li>
              </Link>
              <Link className={classes.link} to='/contact'>
                <li className={classes.li}>Contact</li>
              </Link>
              <li
                className={classes.li}
                onClick={() => window.open('https://shopify.com')}
              >
                Webshop
              </li>
              <li className={classes.li}>Site Language</li>
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
