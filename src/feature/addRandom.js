import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';
import { randomIntFromInterval } from './randomIntFromInterval';

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
