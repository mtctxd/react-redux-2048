import { CELL_SIZE } from "../constants";

export const GameCell = ({ cell }) => {
    const { id } = cell;
    const { x, y } = cell.position;

    const cellPositionByStyle = {
         top: `${x * CELL_SIZE}`,
         left: `${y * CELL_SIZE}`
    };

    return (
        <div className="gamecell" style={cellPositionByStyle}>
            {/* {id} */}
            {`${cellPositionByStyle.top}`}
            {'  '}
            {`${cellPositionByStyle.left}`}
        </div>
    );
};