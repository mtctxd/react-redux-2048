import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';
import { addCellIfChanged } from './addCellIfChanged';

export const mooveUp = (state) => {
  for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
    let row = state.gamefield[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const mooveProvider = (y, x) => {
        if (y !== 0) {
          if (state.gamefield[y - 1][x] === state.gamefield[y][x]) {
            const value = state.gamefield[y - 1][x] * 2;
            state.score += value;
            state.highScore +=value;
            state.gamefield[y - 1][x] = value;
            state.gamefield[y][x] = 0;
          }
          if (!state.gamefield[y - 1][x]) {
            state.gamefield[y - 1][x] = state.gamefield[y][x];
            state.gamefield[y][x] = 0;
            mooveProvider(y - 1, x);
          }
        }

        return;
      };

      mooveProvider(rowIndex, columnIndex);
    }
  }

  return;
};

export const mooveDown = (state) => {
  for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
    let row = state.gamefield[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const mooveProvider = (y, x) => {
        if (y !== GAMEFIELD_ROWS - 1) {
          if (state.gamefield[y + 1][x] === state.gamefield[y][x]) {
            const value = state.gamefield[y + 1][x] * 2;
            state.score += value;
            state.highScore +=value;
            state.gamefield[y + 1][x] = value;
            state.gamefield[y][x] = 0;
          }
          if (!state.gamefield[y + 1][x]) {
            state.gamefield[y + 1][x] = state.gamefield[y][x];
            state.gamefield[y][x] = 0;
            mooveProvider(y + 1, x);
          }
        }

        return;
      };

      mooveProvider(rowIndex, columnIndex);
    }
  }
};

export const mooveLeft = (state) => {
  for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
    let row = state.gamefield[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const mooveProvider = (y, x) => {
        if (x !== 0) {
          if (state.gamefield[y][x - 1] === state.gamefield[y][x]) {
            const value = state.gamefield[y][x - 1] * 2;
            state.score += value;
            state.highScore +=value;
            state.gamefield[y][x - 1] = value;
            state.gamefield[y][x] = 0;
          }
          if (!state.gamefield[y][x - 1]) {
            state.gamefield[y][x - 1] = state.gamefield[y][x];
            state.gamefield[y][x] = 0;
            mooveProvider(y, x - 1);
          }
        }

        return;
      };

      mooveProvider(rowIndex, columnIndex);
    }
  }
};

export const mooveRight = (state) => {
  for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
    let row = state.gamefield[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const mooveProvider = (y, x) => {
        if (x !== GAMEFIELD_COLUMNS - 1) {
          if (state.gamefield[y][x + 1] === state.gamefield[y][x]) {
            const value = state.gamefield[y][x + 1] * 2;
            state.score += value;
            state.highScore +=value;
            state.gamefield[y][x + 1] = value;
            state.gamefield[y][x] = 0;
          }
          if (!state.gamefield[y][x + 1]) {
            state.gamefield[y][x + 1] = state.gamefield[y][x];
            state.gamefield[y][x] = 0;
            mooveProvider(y, x + 1);
          }
        }

        return;
      };

      mooveProvider(rowIndex, columnIndex);
    }
  }
};

// code below describes what game will be doing between actions

export const mooveHandler = (state, action) => {
  //saving initial game field
  const initilaGamefield = [...state.gamefield.flat()];
  action(state);
  //saving changed game field
  const changedGamefield = [...state.gamefield.flat()];
  
  //check win conditions
  if (state.score >= state.scoreWinCondition) {
    state.isGameWin = true;
    state.isGameContinue = false;
  }
  
  //if field did not changed do not add new cell
  addCellIfChanged(state, initilaGamefield, changedGamefield);

  // saving items to local storage
  localStorage.setItem('GAME', JSON.stringify(state));
};
