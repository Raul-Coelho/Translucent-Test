import React from 'react';
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

export default function SideMenu({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const games = [
    {
      id: 1,
      title: 'Metal Gear Solid 2',
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
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 4,
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 5,
      title: 'Metal Gear Solid 2',
      year: '2001',
      console: 'PS2',
      completed: true,
      dateOfCompletion: '07/08/2017',
      personalNotes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 6,
      title: 'Metal Gear Solid 2',
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
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary="Home"
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon><AddBox /></ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary="Register Game"
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary="Settings"
            />
          </ListItem>
        </List>
      </Drawer>
      <Box p={4}>
        <Toolbar />
        <Grid container spacing={9}>
          {games.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <GameCard game={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
