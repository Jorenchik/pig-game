import React from "react";
import PropTypes from "prop-types";

// Styles
import { Button } from "./ActionButton.styles";

const ActionButton = ({ type, text }) => {
  return <Button type={type}>{text}</Button>;
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default ActionButton;
