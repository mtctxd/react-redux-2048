import { createSlice } from '@reduxjs/toolkit';
import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';
import { mooveDown, mooveLeft, mooveRight, mooveUp } from '../feature/gameControls';

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
  const columnIndex = randomIntFromInterval(0, GAMEFIELD_COLUMNS - 1);
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

// const mooveUp = (state) => {
//   for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
//     let row = state.gamefield[rowIndex];
//     for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
//       // let cell = state.gamefield[rowIndex][columnIndex];
//       // const mathCheck = state.gamefield[rowIndex - 1][columnIndex] = state.gamefield[rowIndex][columnIndex];

//       const mooveProvider = (y, x) => {
//         if (y !== 0) {
//           if (state.gamefield[y - 1][x] === state.gamefield[y][x]) {
//             state.gamefield[y - 1][x] = state.gamefield[y - 1][x] * 2;
//             state.gamefield[y][x] = 0;
//             console.log('added');
//           }
//           if (!state.gamefield[y - 1][x]) {
//             state.gamefield[y - 1][x] = state.gamefield[y][x];
//             state.gamefield[y][x] = 0;
//             return mooveProvider(y - 1, x);
//           }
//         }

//         return;
//       }

//       mooveProvider(rowIndex, columnIndex);
//     }
//   }
// };

// const mooveLeft = (state) => {
//   for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
//     let row = state.gamefield[rowIndex];
//     for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
//       // let cell = state.gamefield[rowIndex][columnIndex];
//       // const mathCheck = state.gamefield[rowIndex - 1][columnIndex] = state.gamefield[rowIndex][columnIndex];

//       const mooveProvider = (y, x) => {
//         if (x !== 0) {
//           if (state.gamefield[y][x - 1] === state.gamefield[y][x]) {
//             state.gamefield[y][x - 1] = state.gamefield[y][x - 1] * 2;
//             state.gamefield[y][x] = 0;
//             console.log('added');
//           }
//           if (!state.gamefield[y][x - 1]) {
//             state.gamefield[y][x - 1] = state.gamefield[y][x];
//             state.gamefield[y][x] = 0;
//             return mooveProvider(y, x - 1);
//           }
//         }

//         return;
//       }

//       mooveProvider(rowIndex, columnIndex);
//     }
//   }
// };

// make function that add random amount from 1 to 2
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
          mooveUp(state);
          addRandom(state);
          return state;

        case 40: // DOWN 83
        mooveDown(state);
        addRandom(state);
          break;

        case 37: // LEFT 65
          mooveLeft(state);
          addRandom(state);
          break;

        case 39: // RIGHT 68
        mooveRight(state);
        addRandom(state);
          break;

        default:
          break;
      }
    },
  },
});

export const { increment, gameControl } = gameSlice.actions;
