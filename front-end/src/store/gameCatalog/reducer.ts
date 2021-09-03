import * as types from './types';

export const initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_GAMES:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case types.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };
    case types.FETCH_GAMES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    case types.REGISTER_GAME:
      return {
        ...state,
        loading: true,
      };

    case types.REGISTER_GAME_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case types.REGISTER_GAME_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
