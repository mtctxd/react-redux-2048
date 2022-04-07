import { useDispatch } from "react-redux";
import { gameControl, increment } from "../slices/gameSlice";
import { Gamefiled } from "./Gamefield";
import { GameInfo } from "./GameInfo";

export const Game = () => {
    const dispatch = useDispatch();

    const handleGameControl = (event) => dispatch(gameControl(event.keyCode))
    
    window.addEventListener('keydown', handleGameControl);

    return (
        <div
            onClick={() => dispatch(increment())}
        >
            <GameInfo />
            <Gamefiled />
        </div>
    );
};