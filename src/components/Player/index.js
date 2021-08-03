import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Player.styles";
const Player = ({
  playerNumber,
  score,
  currentScore,
  isCurrentPlayer,
  isWinner,
}) => {
  return (
    <Content currentPlayer={isCurrentPlayer} winner={isWinner}>
      <h2 className="name" id="name--0">
        Player {playerNumber}
      </h2>
      <p className="score" id="score--0">
        {score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {currentScore}
        </p>
      </div>
    </Content>
  );
};

Player.propTypes = {
  playerNumber: PropTypes.number,
  score: PropTypes.number,
  currentScore: PropTypes.number,
  currentPlayer: PropTypes.number,
  isWinner: PropTypes.bool,
};

export default Player;
