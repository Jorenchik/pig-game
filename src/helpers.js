// Images
import Dice1 from "./img/dice-1.png";
import Dice2 from "./img/dice-2.png";
import Dice3 from "./img/dice-3.png";
import Dice4 from "./img/dice-4.png";
import Dice5 from "./img/dice-5.png";
import Dice6 from "./img/dice-6.png";

export const generateDice = () => Math.floor(Math.random() * 6) + 1;

export const getDiceImage = (dice) => {
  if (dice === 1) return Dice1;
  if (dice === 2) return Dice2;
  if (dice === 3) return Dice3;
  if (dice === 4) return Dice4;
  if (dice === 5) return Dice5;
  if (dice === 6) return Dice6;
};
