import { put, call, takeLatest } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import GameService from '../../services/GameService/GameService';
import {
  fetchGamesFail, fetchGamesSuccess, registerGameFail, registerGameSuccess,
} from './action';
import { FETCH_GAMES, REGISTER_GAME } from './types';

function* fetchGames(): any {
  try {
    const games = yield call(GameService.fetchGameCatalog);

    yield put(fetchGamesSuccess(games));
  } catch (error) {
    console.warn('TC - error on fetch games reducer');
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error error on fetch games!',
    });
    yield put(fetchGamesFail(error));
  }
}

function* registerGame(action: any): any {
  try {
    const game = action.payload;
    const response = yield GameService.createNewRegister(game);
    Swal.fire(
      'Good job!',
      'You have registered a new game in the catalog!',
      'success',
    );
    yield put(registerGameSuccess(response));
  } catch (error) {
    console.error('TC - error on register game reducer');
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error on register game!',
    });
    yield put(registerGameFail(error));
  }
}

export const rootGameSaga = [
  takeLatest(FETCH_GAMES, fetchGames),
  takeLatest(REGISTER_GAME, registerGame),
];
