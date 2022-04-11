import { useDispatch } from "react-redux";
import { GAMEFIELD_WIDTH } from "../constants";
import { gameControl } from "../slices/gameSlice";
import { Gamefiled } from "./Gamefield";
import { GameInfo } from "./GameInfo";

export const Game = () => {
    const dispatch = useDispatch();

    const handleGameControl = (event) => dispatch(gameControl(event.keyCode))
    
    window.addEventListener('keydown', handleGameControl);

    return (
        <div className="game" style={{width: GAMEFIELD_WIDTH}}>
            <GameInfo />
            <Gamefiled />
        </div>
    );
};