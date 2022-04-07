import { useSelector } from "react-redux";

export const GameInfo = () => {
    const { value } = useSelector(state => state);

    return (
        <div>
            {`GameInfo: ${value}`}
        </div>
    );
};