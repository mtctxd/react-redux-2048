import { createSlice } from '@reduxjs/toolkit';
import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';

const initialState = {
  value: 0,
  gamefield: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2;
      console.log(state.gamefield);
    },
    gameControl: (state, action) => {
      switch (action.payload) {
        case 38: // UP 87
          const gamefield = state.gamefield;

          state.gamefield = gamefield;
          break;

        case 40: // DOWN 83
          state.value += 1;
          break;

        case 37: // LEFT 65
          state.value += 1;
          break;

        case 39: // RIGHT 68
          state.value += 1;
          break;

        default:
          break;
      }
    },
  },
});

export const { increment, gameControl } = gameSlice.actions;
