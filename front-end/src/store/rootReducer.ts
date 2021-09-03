import { combineReducers } from 'redux';
import reducer from './gameCatalog/reducer';

const rootReducer = combineReducers({
  game: reducer,

});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
