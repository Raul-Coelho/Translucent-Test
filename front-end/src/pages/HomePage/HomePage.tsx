import {
  Toolbar, Box, Grid,
} from '@material-ui/core';
import React, { useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import { Game } from '../../interfaces/GameInterface';

const HomePage = (): JSX.Element => {
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

  const [games, setGames] = useState<Game[]>(useGames);

  return (
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
  );
};

export default HomePage;
