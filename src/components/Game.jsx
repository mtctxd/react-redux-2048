import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/gameSlice";
import { GameCell } from "./GameCell";
import { Gamefiled } from "./Gamefield";
import { GameInfo } from "./GameInfo";

export const Game = () => {
    const { value } = useSelector(store => store);
    const dispatch = useDispatch();

    return (
        <div>
            <GameInfo />
            <Gamefiled children={<GameCell />}/>
            {value}
            <button
                onDoubleClick={() => dispatch(increment())}
            >
                ++++
            </button>
        </div>
    );
};