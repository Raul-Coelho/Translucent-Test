import { Game } from '../../interfaces/GameInterface';
import * as types from './types';

export const fetchGames = () => ({
  type: types.FETCH_GAMES,
});

export const fetchGamesSuccess = (data: Game[]) => ({
  type: types.FETCH_GAMES_SUCCESS,
  payload: data,
});

export const fetchGamesFail = (error: any) => ({
  type: types.FETCH_GAMES_FAIL,
  payload: error,
});

export const registerGame = (data: any) => ({
  type: types.REGISTER_GAME,
  payload: data,
});

export const registerGameSuccess = (data: any) => ({
  type: types.REGISTER_GAME_SUCCESS,
  payload: data,
});

export const registerGameFail = (error: any) => ({
  type: types.REGISTER_GAME_FAIL,
  payload: error,
});
