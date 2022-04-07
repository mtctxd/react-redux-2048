import { useSelector } from "react-redux";
import { showGamefieldInfo } from "../feature/gamefieldMaker";
import { GameCell } from "./GameCell";

export const Gamefiled = () => {
    const { gamefield } = useSelector(store => store);

    console.log(gamefield);
    return (
        <div className="gamefield">
            {gamefield.flat().map(cell => (
                <GameCell key={cell.id} cell={ cell }/>
            ))}
        </div>
    );
};