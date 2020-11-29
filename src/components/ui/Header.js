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
import ArrowIcon from '@material-ui/icons/KeyboardArrowDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import logoLight from '../../assets/RGB/Logotyp_White.png';
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';

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
    // zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
  },
  container: {
    width: '100%',
    // maxWidth: 1400,
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
    margin: '.8rem .5rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0rem',
      height: '1.7rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.5rem',
    },
  },

  tabContainer: {
    marginLeft: '.3rem',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
  },
  button: {
    ...theme.typography.tab,
    borderRadius: '4px',
    background: theme.palette.common.gradient1,
    color: 'white',
    paddingBottom: '0.2rem',
    paddingLeft: '1.2rem',
    paddingRight: '1.2rem',
    marginLeft: 'auto',
  },
  iconButtonContainer: {
    marginLeft: '1rem',
    marginRight: '1rem',
    color: theme.palette.text.primary,
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
  dropdown: {
    boxShadow: '0px 1px 1px rgba(0,0,0,.2)',
  },
  dropdownItem: {
    ...theme.typography.tab,
    marginLeft: 0,
    padding: '.9rem 2rem .9rem 2rem',
  },
  dropdownItem2: {
    ...theme.typography.tab,
    marginLeft: 0,
    padding: '.3rem 1rem .3rem 1rem',
  },
  drawerIcon: {
    height: '32px',
    width: '32px',
  },
  langIconContainer: {
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  langIcon: {
    height: '16px',
    width: '16px',
    marginLeft: '1rem',
    paddingBottom: '.15rem',
  },
  arrowIconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  arrowIcon: {
    width: 13,
    paddingBottom: 4,
    paddingLeft: 2,
    color: theme.palette.text.primary,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const [openLang, setOpenLang] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // dropdown menu handlers
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
    setValue(0);
  };
  const handleClickLang = (e) => {
    setAnchorElLang(e.currentTarget);
    setOpenLang(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleClose2 = (e) => {
    setAnchorElLang(null);
    setOpenLang(false);
  };

  const openShop = () => {
    window.open('https://www.shopify.com');
  };

  // const menuOptions = [
  //   { name: "DANCE COUTURE", link: "/dancecouture" },
  //   { name: "BALLROOM DRESSES", link: "/dancecouture" },
  //   { name: "LATIN DRESSES", link: "/dancecouture" },
  //   { name: "MENSWEAR LATIN", link: "/dancecouture" },
  //   { name: "PRACTISE WEAR", link: "/dancecouture" },
  // ]

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

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const tabs = (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={openShop}
      >
        SHOP
      </Button>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='secondary'
      >
        <div
          style={{ display: 'flex' }}
          onMouseOver={(e) => handleClick(e)}
          onMouseLeave={handleClose}
        >
          <Tab
            aria-owns={anchorEl ? 'dropdown-menu' : undefined}
            aria-haspopup={anchorEl ? true : undefined}
            onMouseOver={(e) => handleClick(e)}
            onMouseLeave={handleClose}
            key='dance couture'
            className={classes.tab}
            style={{ paddingRight: 0 }}
            label='dance couture'
            component={Link}
            to='/dancecouture'
            disableRipple
          />
          <div className={classes.arrowIconContainer}>
            <ArrowIcon className={classes.arrowIcon} />
          </div>
        </div>
        <Tab
          key='wedding dresses'
          className={classes.tab}
          label='wedding dresses'
          component={Link}
          to='/wedding'
          disableRipple
        />
        <Tab
          key='custom tailoring'
          className={classes.tab}
          label='custom tailoring'
          component={Link}
          to='/custom'
          disableRipple
        />
        <Tab
          key='about us'
          className={classes.tab}
          label='about us'
          component={Link}
          to='/about'
          disableRipple
        />
        <Tab
          key='CONTACT'
          className={classes.tab}
          label='CONTACT'
          component={Link}
          to='/contact'
          disableRipple
        />
        <IconButton
          className={classes.langIconContainer}
          aria-owns={anchorElLang ? 'dropdown-lang' : undefined}
          aria-haspopup={anchorElLang ? true : undefined}
          onMouseOver={(e) => handleClickLang(e)}
          onMouseLeave={handleClose2}
        >
          <LanguageIcon className={classes.langIcon} />
        </IconButton>
      </Tabs>
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement='bottom-start'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top left',
            }}
          >
            <Paper className={classes.dropdown} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={false}
                  id='dropdown-menu'
                  onKeyDown={handleListKeyDown}
                  disableAutoFocusItem
                  onMouseLeave={handleClose}
                  onMouseOver={() => setOpen(true)}
                  disablePadding
                >
                  <MenuItem
                    classes={{ root: classes.dropdownItem }}
                    onClick={handleClose}
                    component={Link}
                    to='/ballroomdresses'
                  >
                    BALLROOM DRESSES
                  </MenuItem>
                  <MenuItem
                    classes={{ root: classes.dropdownItem }}
                    onClick={handleClose}
                    component={Link}
                    to='/latindresses'
                  >
                    LATIN DRESSES
                  </MenuItem>
                  <MenuItem
                    classes={{ root: classes.dropdownItem }}
                    onClick={handleClose}
                    component={Link}
                    to='/menswearlatin'
                  >
                    MENSWEAR LATIN
                  </MenuItem>
                  <MenuItem
                    classes={{ root: classes.dropdownItem }}
                    onClick={() => {
                      handleClose();
                      openShop();
                    }}
                  >
                    PRACTISE WEAR
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Popper
        open={openLang}
        anchorEl={anchorElLang}
        role={undefined}
        transition
        disablePortal
        placement='bottom-start'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top left',
            }}
          >
            <Paper className={classes.dropdown} elevation={0}>
              <ClickAwayListener onClickAway={handleClose2}>
                <MenuList
                  autoFocusItem={false}
                  id='dropdown-lang'
                  onKeyDown={handleListKeyDown}
                  disableAutoFocusItem
                  onMouseLeave={handleClose2}
                  onMouseOver={() => setOpenLang(true)}
                  disablePadding
                >
                  <MenuItem
                    classes={{ root: classes.dropdownItem2 }}
                    onClick={handleClose2}
                    component={Link}
                    to='/ballroomdresses'
                  >
                    EN
                  </MenuItem>
                  <MenuItem
                    classes={{ root: classes.dropdownItem2 }}
                    onClick={handleClose2}
                    component={Link}
                    to='/latindresses'
                  >
                    NL
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
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
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={openShop}
      >
        SHOP
      </Button>
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
