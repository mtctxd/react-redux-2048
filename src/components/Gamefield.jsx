import { useSelector } from 'react-redux';
import { GameCell } from './GameCell';

export const Gamefiled = () => {
  const { gamefield, isGameContinue, isGameWin } = useSelector((store) => store);

  console.table(`isGameContinue: ${isGameContinue}, isGameWin: ${isGameWin}`);
  return (
    <div className="gamefield">
      {gamefield.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <GameCell
            key={rowIndex + '' + columnIndex}
            value={cell}
            row={rowIndex}
            column={columnIndex}
          />
        ))
      )}
    </div>
  );
};
