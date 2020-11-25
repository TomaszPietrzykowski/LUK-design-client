import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Translate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logoLight from '../../assets/RGB/Logotyp_White.png';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// --------------------------------------------------- STYLES START

const useStyles = makeStyles((theme) => ({
  appBarWhite: {
    backgroundColor: 'white',
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
  },
  container: {
    width: '100%',
    maxWidth: 1400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logoContainer: {
    padding: 0,
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  logo: {
    height: '4.5rem',
    margin: '1rem .5rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0rem',
      height: '1.7rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.5rem',
    },
  },

  tabContainer: {
    marginLeft: '1rem',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
  },
  button: {
    ...theme.typography.tab,
    borderRadius: '6px',
    color: 'white',
    paddingBottom: '0.2rem',
    marginLeft: 'auto',
  },
  iconButtonContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '0.2rem',
    },
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  drawer: {
    backgroundColor: 'white',
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  drawerBackground: {
    paddingRight: '3rem',
    '&:hover': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
}));

// --------------------------------------------------- STYLES END

const routes = [
  { name: 'DANCE COUTURE', link: '/dancecouture' },
  { name: 'WEDDING DRESSES', link: '/wedding' },
  { name: 'CUSTOM TAILORING', link: '/custom' },
  { name: 'ABOUT US', link: '/about' },
  { name: 'CONTACT', link: '/contact' },
  { name: 'SHOP', link: '/webshop' },
];

const Header = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    routes.forEach((route, i) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== i) setValue(i);
          break;
        default:
          break;
      }
    });
    // eslint-disable-next-line
  }, [value, routes]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabs = (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        component={Link}
        to='/webshop'
      >
        WEBSHOP
      </Button>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='white'
      >
        {routes.map(
          (route, i) =>
            i < routes.length - 1 && (
              <Tab
                key={`${route.link}${i}`}
                className={classes.tab}
                label={route.name}
                component={Link}
                to={route.link}
              />
            )
        )}
        <IconButton>
          <LanguageIcon />
        </IconButton>
      </Tabs>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, i) => (
            <ListItem
              key={`${route.link}`}
              disableRipple
              onClick={() => {
                setOpenDrawer(false);
                setValue(i);
              }}
              divider
              button
              component={Link}
              to={route.link}
              className={
                i === routes.length - 1
                  ? classes.backgroundAPI
                  : classes.drawerBackground
              }
              selected={value === i && value < routes.length - 1 ? true : false}
            >
              <ListItemText
                disableTypography
                className={
                  i === routes.length - 1
                    ? classes.drawerItemAPI
                    : value === i
                    ? classes.selectedText
                    : classes.drawerItem
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // });

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBarWhite}>
          <div className={classes.container}>
            <Toolbar disableGutters={matches ? true : false}>
              <Button
                disableRipple
                className={classes.logoContainer}
                component={Link}
                to='/'
                onClick={() => setValue(6)}
              >
                <img
                  src={logoLight}
                  alt='luk design logo'
                  className={classes.logo}
                />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </div>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Header;
