import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    if (typeof e === "number") {
      setSecondNumber((obj) => obj * 10 + e);
    } else {
      setOperator(e);
      setFirstNumber(secondNumber);
      setSecondNumber(0);
    }
  };

  const handleResult = () => {
    switch (operator) {
      case "+":
        setSecondNumber((obj) => firstNumber + obj);
        break;
      case "-":
        setSecondNumber((obj) => firstNumber - obj);
        break;
      case "*":
        setSecondNumber((obj) => firstNumber * obj);
        break;
      case "/":
        setSecondNumber((obj) => firstNumber / obj);
        break;
      default:  
        break;
    }
  };

  const clear = () => {
    setSecondNumber(0);
  };

  return (
    <div className="calcApp">
      <div className="calc">
        <div id="display" className="op">
          {secondNumber}
        </div>
        <div id="clear" onClick={clear}>
          AC
        </div>
        <div>Del</div>
        <div id="modulo">&#37;</div>
        <div id="divide" onClick={() => handleClick("/")}>
          &divide;
        </div>
        <div id="seven" onClick={() => handleClick(7)}>
          7
        </div>
        <div id="eight" onClick={() => handleClick(8)}>
          8
        </div>
        <div id="nine" onClick={() => handleClick(9)}>
          9
        </div>
        <div id="multiply" onClick={() => handleClick("*")}>
          &#215;
        </div>
        <div id="four" onClick={() => handleClick(4)}>
          4
        </div>
        <div id="five" onClick={() => handleClick(5)}>
          5
        </div>
        <div id="six" onClick={() => handleClick(6)}>
          6
        </div>
        <div id="minus" onClick={() => handleClick("-")}>
          &minus;
        </div>
        <div id="one" onClick={() => handleClick(1)}>
          1
        </div>
        <div id="two" onClick={() => handleClick(2)}>
          2
        </div>
        <div id="three" onClick={() => handleClick(3)}>
          3
        </div>
        <div id="plus" onClick={() => handleClick("+")}>
          &#43;
        </div>
        <div id="zero" onClick={() => handleClick(0)}>
          0
        </div>
        <div id="decimal">&#8729;</div>
        <div id="equal" onClick={handleResult}>
          &#61;
        </div>
      </div>
    </div>
  );
};

export default Calc;