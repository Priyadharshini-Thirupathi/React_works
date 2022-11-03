import React, { useState } from "react";
import "./Accordion.css";
import PropTypes from "prop-types";

function Accordion(props) {
  const [active, setActive] = useState(false);
  return (
    <div id={props.id} onClick={() => setActive(!active)}>
      <div>{props.title}</div>
      <div>{active && props.content}</div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol,
  ]).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol,
  ]).isRequired,
  id: PropTypes.oneOf(["q1", "q2", "q3"]),
};

export default Accordion;
