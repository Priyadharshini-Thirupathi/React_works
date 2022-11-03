import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("");
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div class="Calculator-outline">
      <div class="output">
        <div class="display">{firstValue}</div>
      </div>
      <button value="C" onClick={""}>
        C
      </button>
      <button>&plusmn;</button>
      <button>%</button>
      <button>&divide;</button>
      <button value="7" onClick={()=>handleClick(7)}>
        7
      </button>
      <button value="8" onClick={()=>handleClick(8)}>
        8
      </button>
      <button value="9" onClick={()=>handleClick(9)}>
        9
      </button>
      <button value="*" onClick={()=>handleClick("*")}>
        &times;
      </button>
      <button value="4" onClick={()=>handleClick(4)}>
        4
      </button>
      <button value="5" onClick={()=>handleClick(5)}>
        5
      </button>
      <button value="6" onClick={()=>handleClick(6)}>
        6
      </button>
      <button value="-" onClick={()=>handleClick("-")}>
        -
      </button>
      <button value="1" onClick={()=>handleClick(1)}>
        1
      </button>
      <button value="2" onClick={()=>handleClick(2)}>
        2
      </button>
      <button value="3" onClick={()=>handleClick(3)}>
        3
      </button>
      <button value="+" onClick={()=>handleClick("+")}>
        +
      </button>
      <button value="0" onClick={()=>handleClick(0)} id="span-two">
        0
      </button>
      <button value="." onClick={()=>handleClick(".")}>
        .
      </button>
      <button onClick={()=>handleClick}>=</button>
    </div>
  );
}
export default Calculator;
