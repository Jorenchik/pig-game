import React from "react";
import PropTypes from "prop-types";

// Styles
import { Button } from "./ActionButton.styles";

const ActionButton = ({ type, text, handlers }) => {
  let clickHandler;
  if (type === "new") clickHandler = handlers.handleNewGameClick;
  if (type === "roll") clickHandler = handlers.handleRollDiceClick;
  if (type === "hold") clickHandler = handlers.handleHoldClick;
  return (
    <Button type={type} onClick={clickHandler}>
      {text}
    </Button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  handlers: PropTypes.object,
};

export default ActionButton;
