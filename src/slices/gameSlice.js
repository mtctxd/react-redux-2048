import { createSlice } from '@reduxjs/toolkit';
import { addCellIfChanged } from '../feature/addCellIfChanged';
// import { addRandom } from '../feature/addRandom';
import {
  mooveDown,
  mooveHandler,
  mooveLeft,
  mooveRight,
  mooveUp,
} from '../feature/gameControls';

const initialState = {
  value: 0,
  gamefield: [
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    [4, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
  ],
};

// make function that add random amount from 1 to 2
// addRandom(initialState);
// addRandom(initialState);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2;
    },
    gameControl: (state, action) => {
      switch (action.payload) {
        case 38: // UP 87
        case 87:
          mooveHandler(state, mooveUp);
          break;

        case 40: // DOWN 83
        case 83:
          mooveHandler(state, mooveDown);
          break;

        case 37: // LEFT 65
        case 65:
          mooveHandler(state, mooveLeft);
          break;

        case 39: // RIGHT 68
        case 68:
          mooveHandler(state, mooveRight);
          break;

        default:
          break;
      }
    },
  },
});

export const { increment, gameControl } = gameSlice.actions;
