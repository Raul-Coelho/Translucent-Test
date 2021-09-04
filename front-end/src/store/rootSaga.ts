import { all } from 'redux-saga/effects';
import { rootGameSaga } from './gameCatalog/gameSaga';

export default function* rootSaga() {
  yield all([
    ...rootGameSaga,
  ]);
}
