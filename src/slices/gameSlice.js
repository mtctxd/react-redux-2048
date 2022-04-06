import { createSlice } from '@reduxjs/toolkit';
import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from '../constants';
import { gamefieldMaker } from '../feature/gamefieldMaker';

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
    },
  },
});

export const { increment } = gameSlice.actions;
