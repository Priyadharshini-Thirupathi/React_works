import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      className = {`${props.pilled ? "pilled" : props.type} button`}
      onClick = {props.loading ? () => null : props.onClick}
    >
      {props.loading ? props.loadingText : props.label}
    </button>
  );
}

Button.defaultProps = {
  label: "Primary",
  type: "primary",
  onClick: () => null,
  pilled: null,
  loading: null,
  loadingText: "Submitting...",
};

Button.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "default",
    "submit",
  ]),
  onClick: PropTypes.func.isRequired,
  pilled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string
};

export default Button;
