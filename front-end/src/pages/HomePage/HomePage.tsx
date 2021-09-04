import {
  Toolbar, Grid, TextField, makeStyles, Theme,
} from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../../components/GameCard/GameCard';
import { Game } from '../../interfaces/GameInterface';
import { fetchGames } from '../../store/gameCatalog/action';
import { RootState } from '../../store/rootReducer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
}));

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { loaded } = useSelector((state: RootState) => state.game);
  const useGames = useSelector((state: RootState) => state.game.data);

  const [games, setGames] = useState<Game[]>([]);
  const [searchText, setSearchText] = useState<string>('');

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

  const requestSearch = (searchedVal: string | null) => {
    if (searchedVal) {
      const filteredRows = useGames.filter((game: any) => game.title.toLowerCase().includes(searchedVal.toLowerCase()));
      setGames(filteredRows);
    } else {
      setGames(useGames);
    }
  };

  return (
    <>
      <Toolbar />
      <Grid container className={classes.root} spacing={3}>
        <Toolbar />
        <Grid item xs={12}>
          <Autocomplete
            freeSolo
            fullWidth
            disableListWrap
            id="free-solo-demo"
            value={searchText}
            onChange={(event, newValue) => requestSearch(newValue)}
            options={games.map((option) => option.title)}
            size="small"
            renderInput={(params) => (
              <>
                <TextField {...params} label="Search in game catalog..." margin="normal" variant="outlined" />

              </>
            )}
          />
        </Grid>
        {games?.map((game) => (
          <Grid key={game.id} item lg={3} md={4} sm={6} xs={12}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>

  );
};

export default HomePage;
