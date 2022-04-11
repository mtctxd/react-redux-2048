import { createSlice } from '@reduxjs/toolkit';
import { addRandom } from '../feature/addRandom';
import {
  mooveDown,
  mooveHandler,
  mooveLeft,
  mooveRight,
  mooveUp,
} from '../feature/gameControls';

let initialState = {
  highScore: 0,
  scoreWinCondition: 2048,
  score: 0,
  isGameWin: false,
  isGameLost: true,
  isGameContinue: true,
  gamefield: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

addRandom(initialState);
addRandom(initialState);

if (localStorage.getItem('GAME')) {
  initialState = JSON.parse(localStorage.getItem('GAME'));
}

// make function that add random amount from 1 to 2
// addRandom(initialState);
// addRandom(initialState);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 2;
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
    // unused
    continueGame: (state) => {
      state.isGameWin = true;
    },
    restartGame: (state) => {
      const stateWhenRestart = {
        scoreWinCondition: 2048,
        score: 0,
        isGameWin: false,
        isGameContinue: true,
        gamefield: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      };

      Object.assign(state, stateWhenRestart);
      addRandom(state);
      addRandom(state);
    },
  },
});

export const { increment, gameControl, continueGame, restartGame } =
  gameSlice.actions;
