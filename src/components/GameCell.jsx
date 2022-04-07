import { CELL_SIZE } from "../constants";

export const GameCell = ({ cell }) => {
    const { value } = cell;
    const { x, y } = cell.position;

    const cellPositionByStyle = {
         top: `${y * CELL_SIZE}px`,
         left: `${x * CELL_SIZE}px`,
         width: `${CELL_SIZE}px`,
         height: `${CELL_SIZE}px`,
    };

    return (
        <div className="gamecell" style={cellPositionByStyle}>
            {value !== 0 && (
                <div className="gamecell-info">
                    {value}
                </div>
            )}
        </div>
    );
};