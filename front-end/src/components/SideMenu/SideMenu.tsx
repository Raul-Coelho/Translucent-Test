import React, { useState } from 'react';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Box, Grid, Switch,
} from '@material-ui/core';
import Settings from '@material-ui/icons/Settings';
import AddBox from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from './Style';
import GameCard from '../GameCard/GameCard';
import { Game } from '../../interfaces/GameInterface';
import Routes from '../../router/Routes';

export default function SideMenu({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const classes = useStyles();

  const useGames = [
    {
      id: 1,
      title: 'Metal Gear Solid 1',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 2,
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 3,
      title: 'Metal Gear Solid 3',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 4,
      title: 'Metal Gear Solid 4',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 5,
      title: 'Metal Gear Solid 5',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 6,
      title: 'Metal Gear Solid 6',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 7,
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 8,
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
  ];

  const [open, setOpen] = useState(false);
  const [games, setGames] = useState<Game[]>(useGames);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Game Catalog
          </Typography>
          <div className={classes.grow} />
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
            name="checked"
            color="secondary"
          />
          <Typography
            variant="body1"
            color="textSecondary"
          >
            Dark Mode
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <Toolbar />
          <List>
            <ListItem component={Link} to="/" button classes={{ root: classes.listItem }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Home"
              />
            </ListItem>
            <ListItem component={Link} to="/register" button classes={{ root: classes.listItem }}>
              <ListItemIcon><AddBox /></ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Register Game"
              />
            </ListItem>
          </List>
        </Drawer>
        {/* ROUTES INSIDE CONTAINER AT SIDEMENU  */}
        <Routes />
      </Router>
    </div>
  );
}
