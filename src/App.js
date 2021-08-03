import { useState } from "react";

// Styles
import { GlobalStyles } from "./GlobalStyles";

// Components
import Player from "./components/Player";
import Dice from "./components/Dice";
import ActionButton from "./components/ActionButton";

// Helpers
import { getInitialDice } from "./helpers";

const App = () => {
  // Initial values
  const initialDice = 1;

  // State
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState(initialDice);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneCurrentScore, setPlayerOneCurrentScore] = useState(0);
  const [playerTwoCurrentScore, setPlayerTwoCurrentScore] = useState(0);
  const [winner, setWinner] = useState();

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
      <ActionButton type="new" text="🔄 New game" />
      <ActionButton type="roll" text="🎲 Roll dice" />
      <ActionButton type="hold" text="📥 Hold" />
      <GlobalStyles />
    </div>
  );
};

export default App;
