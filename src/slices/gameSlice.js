import { createSlice } from '@reduxjs/toolkit';

const rowFactory = () => {
  let row = -1;

  const cellFactory = () => {
      const randomNumber = Math.random() * 10;
      let value = 0;
      let column = -1;
      row += 1;
      
    switch (true) {
      case randomNumber >= 0 && randomNumber < 3:
        value = 0;
        break;

      case randomNumber >= 5 && randomNumber < 8:
        value = 2;
        break;

      case randomNumber >= 8 && randomNumber < 10:
        value = 4;
        break;

      default:
        break;
    }

    return () => {
      column += 1;

      return {
        value,
        position: {
          row,
          column,
        },
      };
    };
  };
  
  return () => {

      return cellFactory();
  };
};

const f1 = rowFactory();
const f2 = rowFactory();

const row1 = f1();
const row2 = f2();
// const row3 = rowFactory();
// const row4 = rowFactory();

const initialState = {
  value: 0,
  gamefield: [
    [row1(), row1(), row1(), row1()],
    [row2(), row2(), row2(), row2()],
    // [row3(), row3(), row3(), row3()],
    // [row4(), row4(), row4(), row4()],
  ],
};

export const showCellInfo = console.table(
  initialState.gamefield.map((row) =>
    row.map((cell) => {
      const { row, column } = cell.position;
      const { value } = cell;

      return `val: ${value} row: ${row} column: ${column}`;
    })
  )
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2;
    },
  },
});

export const { increment } = gameSlice.actions;
