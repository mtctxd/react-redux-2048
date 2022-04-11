import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../slices/gameSlice';

export const GameInfo = () => {
  const { score, highScore } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="game-info">
      <div className="game-header">
        <div className="game-header-top">
          <div className="game-header-logo">2048</div>
          <div className="game-header-scores">
            <div className="game-header-scorebox">
              <div className="game-header-scorebox-title">Score</div>
              <div className="game-header-scorebox-value">{score}</div>
            </div>
            <div className="game-header-scorebox">
              <div className="game-header-scorebox-title">High score</div>
              <div className="game-header-scorebox-value">{highScore}</div>
            </div>
          </div>
        </div>
        <div className="game-header-bottom">
          <button
            className="game-header-button"
            onClick={() => dispatch(restartGame())}
          >
            RESTART
          </button>
          <div className="game-header-button">OPTIONS</div>
        </div>
      </div>
    </div>
  );
};
