import {React,useState } from "react";
import PropTypes from "prop-types";

import './Dropdown.css';

function Dropdown(props) {
  const {options, value, onChange} = props;
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const handleChange = (e) => {
    setSelectedOption(e.target.textContent);
    onChange(e.target.textContent);
    setToggleOpen(false);
  };

  return (
    <div className="dd--outline">
      <div className="dd--header" onClick={()=>{setToggleOpen(!toggleOpen)}}>
        {selectedOption}
      </div>
      {toggleOpen && (
        <div className="dd--options">
          {options.map((option) => (
            <div className="dd--option" key={option} onClick={handleChange}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, 
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Dropdown;
