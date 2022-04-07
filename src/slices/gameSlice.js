import { createSlice } from '@reduxjs/toolkit';
import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';
import { gamefieldMaker, showGamefieldInfo } from '../feature/gamefieldMaker';

const initialState = {
  value: 0,
  gamefield: gamefieldMaker(GAMEFIELD_COLUMNS, GAMEFIELD_ROWS),
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

          // gamefield.forEach((row, rowIndex) =>
          //   row.forEach((cell, columnIndex) => {
          //     // gamefield[vertical][hotizontal]
          //     // gamefield[rowIndex][columnIndex].value = `${rowIndex}${columnIndex}`

          //     if (rowIndex !== 0) {
          //       const upperCell = gamefield[rowIndex - 1][columnIndex];
          //       const mathCheck = (upperCell.value = cell.value);

          //       if (cell.value) {
          //         upperCell.value = 'R';
          //       }
          //     }

          //     return cell;
          //   })
          // );

          for (let rowIndex = 0; rowIndex < gamefield.length; rowIndex++) {
            const row = gamefield[rowIndex];
            for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
              const cell = gamefield[rowIndex][columnIndex];
              const { top, bottom, left, right} = cell.neighbours;
              console.log(top);
              
              if (typeof top !== 'null' && typeof left !== 'null') {
                const neighbour = cell[top.x][top.y];
                console.log(neighbour);
                cell.value = cell.position.x + '' + cell.position.y;
              }
            }
          }

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
