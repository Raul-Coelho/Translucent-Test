import {
  Toolbar, Box, Grid,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../../components/GameCard/GameCard';
import { Game } from '../../interfaces/GameInterface';
import GameService from '../../services/GameService/GameService';
import { fetchGames } from '../../store/gameCatalog/action';
import { RootState } from '../../store/rootReducer';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { loaded, loading } = useSelector((state: RootState) => state.game);
  const useGames = useSelector((state: RootState) => state.game.data);

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchGames());
    }
  }, [dispatch, loaded]);

  useEffect(() => {
    if (useGames) {
      useGames.sort((gameA: any, gameB: any) => {
        const formatedFirstProp = new Date(gameA.year);
        const formatedSecondProp = new Date(gameB.year);

        if (Number(formatedFirstProp.getFullYear()) < Number(formatedSecondProp.getFullYear())) return -1;
        if (Number(formatedFirstProp.getFullYear()) > Number(formatedSecondProp.getFullYear())) return 1;
        return 0;
      });
      setGames(useGames);
    }
  }, [useGames]);

  return (
    <Box p={4}>
      <Toolbar />
      <Grid container spacing={9}>
        {games?.map((game) => (
          <Grid key={game.id} item lg={3} md={4} sm={6} xs={12}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
