import { useSelector } from "react-redux";
import { GameCell } from "./GameCell";

export const Gamefiled = () => {
    const { gamefield } = useSelector(store => store);

    // console.table(gamefield);
    return (
        <div className="gamefield">
            {gamefield.map((row, rowIndex) => row.map((cell, columnIndex) => {
                const gridInfo = rowIndex + '' + columnIndex

                return (
                    <GameCell key={gridInfo} value={cell} row={rowIndex} column={columnIndex} />
                )
            }))}
        </div>
    );
};