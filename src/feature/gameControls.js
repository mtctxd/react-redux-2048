import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const addRandom = (state) => {
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

export const mooveUp = (state) => {
  for (let rowIndex = 0; rowIndex < state.gamefield.length; rowIndex++) {
    let row = state.gamefield[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {

      const mooveProvider = (y, x) => {
        if (y !== 0) {
          if (state.gamefield[y - 1][x] === state.gamefield[y][x]) {
            const value = state.gamefield[y - 1][x] * 2;
            state.score += value;
            state.gamefield[y - 1][x] = value;
            state.gamefield[y][x] = 0;
            console.log('added');
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
            state.gamefield[y + 1][x] = value;
            state.gamefield[y][x] = 0;
            console.log('added');
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
            state.gamefield[y][x - 1] = value;
            state.gamefield[y][x] = 0;
            console.log('added');
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
            state.gamefield[y][x + 1] = value;
            state.gamefield[y][x] = 0;
            console.log('added');
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


