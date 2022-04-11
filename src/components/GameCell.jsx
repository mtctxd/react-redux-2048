import { CELL_SIZE } from '../constants';
import { cellBackgroundColorPicker } from '../feature/cellBackgroundColorPicker';

export const GameCell = ({ value, row, column }) => {
  const cellPositionByStyle = {
    top: `${row * CELL_SIZE}px`,
    left: `${column * CELL_SIZE}px`,
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    backgroundColor: cellBackgroundColorPicker(value),
  };

  if (value > 0) {
    return (
      <div className="gamecell" style={cellPositionByStyle}>
        <div className='gamecell-info'>{value}</div>
      </div>
    ); 
  };

  return;
};
