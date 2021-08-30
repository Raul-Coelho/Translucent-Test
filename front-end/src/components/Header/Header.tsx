import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Box,
  Drawer, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import AddBox from '@material-ui/icons/AddBox';
import { useStyles } from './Style';

export default function Header({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const classes = useStyles();

  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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
            DarkTheme
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
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
            </div>
          </Drawer>
        </Hidden>
        <Box p={4}>
          <Toolbar />
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
