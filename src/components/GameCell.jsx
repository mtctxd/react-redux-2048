import { CELL_SIZE } from '../constants';

export const GameCell = ({ value, row, column, gridInfo }) => {
  const cellPositionByStyle = {
    top: `${row * CELL_SIZE}px`,
    left: `${column * CELL_SIZE}px`,
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
  };

  return (
    <div className="gamecell" style={cellPositionByStyle}>
      <div className='gamecell-info'>{value}</div>
    </div>
  );
};
