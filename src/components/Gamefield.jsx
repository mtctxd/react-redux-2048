import { useSelector } from "react-redux";
import { GameCell } from "./GameCell";

export const Gamefiled = () => {
    const { gamefield } = useSelector(store => store);

    return (
        <div className="gamefield">
            {gamefield.flat().map(cell => (
                <GameCell key={cell.id} cell={ cell }/>
            ))}
        </div>
    );
};