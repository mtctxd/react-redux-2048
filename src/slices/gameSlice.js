import { createSlice } from '@reduxjs/toolkit';
import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const initialState = {
  value: 0,
  gamefield: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const addRandom = (state) => {
  const rowIndex = randomIntFromInterval(0, GAMEFIELD_ROWS - 1);
  const columnIndex = randomIntFromInterval(0, GAMEFIELD_ROWS - 1);
  const cell = state.gamefield[rowIndex][columnIndex];

  let numberToAdd = 2;
  const randomGenerator = Math.trunc(Math.random() * 10);

  if (randomGenerator >= 0 && randomGenerator < 5) {
    numberToAdd = 2;
  } else {
    numberToAdd = 4;
  }

  if (cell === 0) {
    state.gamefield[rowIndex][columnIndex] = numberToAdd;

    return;
  }

  return addRandom(state);
};

addRandom(initialState);
addRandom(initialState);

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
          addRandom(state);
          break;

        case 40: // DOWN 83
          // state.value += 1;
          break;

        case 37: // LEFT 65
          // state.value += 1;
          break;

        case 39: // RIGHT 68
          // state.value += 1;
          break;

        default:
          break;
      }
    },
  },
});

export const { increment, gameControl } = gameSlice.actions;
