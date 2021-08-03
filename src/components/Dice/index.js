import React from "react";
import PropTypes from "prop-types";

// Styles
import { Image } from "./Dice.styles";

// Helpers
import { getDiceImage } from "../../helpers";

const Dice = ({ dice }) => {
  return <>{dice !== 0 ? <Image src={getDiceImage(dice)} alt="dice" /> : ""}</>;
};

PropTypes.propTypes = {
  dice: PropTypes.number,
};

export default Dice;
