import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from "../constants";

const randomNumberAdder = () => {
  let number = Math.random() * 100;

  switch (true) {
    case number >= 60 && number < 85:
      return 2;

    case number >= 85 && number < 100:
      return 4;

    default:
      return 0;
  }
};

const cellMaker = (x, y) => {
  return {
    id: x + '' + y,
    value: randomNumberAdder(),
    position: {
      x,
      y,
    },
  };
};

export const gamefieldMaker = (x, y) => {
  const gamefield = [];

  for (let columnId = 0; columnId < x; columnId++) {
    const row = [];

    for (let rowId = 0; rowId < y; rowId++) {
      row.push(cellMaker(rowId, columnId));
    }

    gamefield.push(row);
  }

  return gamefield;
};

export const showGamefieldInfo = () =>
  console.table(
    gamefieldMaker(GAMEFIELD_COLUMNS, GAMEFIELD_ROWS).map((row) =>
      row.map((cell) => {
        const { x, y } = cell.position;
        const { value } = cell;

        return `x:${x}, y:${y}, value:${value}`;
      })
    )
  );
