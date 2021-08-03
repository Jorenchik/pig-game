import { useState } from "react";

// Styles
import { GlobalStyles } from "./GlobalStyles";

// Components
import Player from "./components/Player";
import Dice from "./components/Dice";
import ActionButton from "./components/ActionButton";

// Helpers
import { generateDice } from "./helpers";

const App = () => {
  // Initial values
  const initialDice = 0;
  const pointsToWin = 100;

  // State
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState(initialDice);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneCurrentScore, setPlayerOneCurrentScore] = useState(0);
  const [playerTwoCurrentScore, setPlayerTwoCurrentScore] = useState(0);
  const [winner, setWinner] = useState();

  const handleNewGameClick = () => {
    setCurrentPlayer(1);
    setWinner();
    setDice(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayerOneCurrentScore(0);
    setPlayerTwoCurrentScore(0);
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleRollDiceClick = () => {
    if (winner) return;
    let currentPlayerCurrentScoreSetter;
    let currentPlayerCurrentScore;
    if (currentPlayer === 1) {
      currentPlayerCurrentScoreSetter = setPlayerOneCurrentScore;
      currentPlayerCurrentScore = playerOneCurrentScore;
    }
    if (currentPlayer === 2) {
      currentPlayerCurrentScoreSetter = setPlayerTwoCurrentScore;
      currentPlayerCurrentScore = playerTwoCurrentScore;
    }
    const dice = generateDice();
    setDice(dice);
    if (dice === 6) {
      currentPlayerCurrentScoreSetter(0);
      switchPlayer();
      return;
    }
    currentPlayerCurrentScoreSetter(currentPlayerCurrentScore + dice);
  };

  const handleHoldClick = () => {
    if (winner) return;
    let currentPlayerScoreSetter;
    let currentPlayerCurrentScoreSetter;
    let currentPlayerCurrentScore;
    let currentPlayerScore;
    if (currentPlayer === 1) {
      currentPlayerScoreSetter = setPlayerOneScore;
      currentPlayerCurrentScoreSetter = setPlayerOneCurrentScore;
      currentPlayerCurrentScore = playerOneCurrentScore;
      currentPlayerScore = playerOneScore;
    }
    if (currentPlayer === 2) {
      currentPlayerScoreSetter = setPlayerTwoScore;
      currentPlayerCurrentScoreSetter = setPlayerTwoCurrentScore;
      currentPlayerCurrentScore = playerTwoCurrentScore;
      currentPlayerScore = playerTwoScore;
    }
    if (currentPlayerCurrentScore === 0) return;
    currentPlayerCurrentScoreSetter(0);
    const newScore = currentPlayerScore + currentPlayerCurrentScore;
    currentPlayerScoreSetter(newScore);
    if (newScore < pointsToWin) {
      switchPlayer();
      return;
    }
    setWinner(currentPlayer);
  };

  const clickHandlers = {
    handleNewGameClick,
    handleRollDiceClick,
    handleHoldClick,
  };

  return (
    <div className="App">
      <Player
        playerNumber={1}
        score={playerOneScore}
        currentScore={playerOneCurrentScore}
        isCurrentPlayer={currentPlayer === 1 ? true : false}
        isWinner={winner === 1 ? true : false}
      />
      <Player
        playerNumber={2}
        score={playerTwoScore}
        currentScore={playerTwoCurrentScore}
        isCurrentPlayer={currentPlayer === 2 ? true : false}
        isWinner={winner === 2 ? true : false}
      />
      <Dice dice={dice} />
      <ActionButton type="new" text="🔄 New game" handlers={clickHandlers} />
      <ActionButton type="roll" text="🎲 Roll dice" handlers={clickHandlers} />
      <ActionButton type="hold" text="📥 Hold" handlers={clickHandlers} />
      <GlobalStyles />
    </div>
  );
};

export default App;
