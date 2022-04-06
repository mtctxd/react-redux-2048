import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/gameSlice";
import { Gamefiled } from "./Gamefield";
import { GameInfo } from "./GameInfo";

export const Game = () => {
    const { value } = useSelector(store => store);
    const dispatch = useDispatch();

    return (
        <div>
            <GameInfo />
            <Gamefiled />
            {value}
            <button
                onDoubleClick={() => dispatch(increment())}
            >
                ++++
            </button>
        </div>
    );
};