import { GAMEFIELD_COLUMNS, GAMEFIELD_ROWS } from "../constants";

const randomNumberAdder = () => {
  let number = Math.random() * 100;

  switch (true) {
    case number >= 60 && number < 85:
      return 2;

    case number >= 90 && number < 100:
      return 4;

    default:
      return 0;
  }
};

const cellMaker = (x, y) => {
  const position = {
    x,
    y,
  };

  const findNeighbour = (position) => {
    if (position === 'top') {
      if (y === 0) {
        return null;
      }
  
      return {
        y: y - 1,
        x,
      }
    }

    if (position === 'bottom') {
      if (y === GAMEFIELD_ROWS) {
        return null;
      }

      return {
        y: y + 1,
        x,
      }
    }

    if (position === 'left') {
      if (x === 0) {
        return null;
      }

      return {
        y,
        x: x - 1,
      }
    }

    if (position === 'right') {
      if (x === GAMEFIELD_COLUMNS) {
        return null;
      }

      return {
        y,
        x: x + 1,
      }
    }
  };

  return {
    id: x + '' + y,
    value: randomNumberAdder(),
    position,
    neighbours: {
      top: findNeighbour('top'),
      bottom: findNeighbour('bottom'),
      left: findNeighbour('left'),
      right: findNeighbour('right'),
    }
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
