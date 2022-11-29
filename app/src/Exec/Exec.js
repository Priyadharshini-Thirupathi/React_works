import React from "react";
import Button from "../Button/Button.js";
import Accordion from "../Accordion/Accordion.js";
import Dropdown from "../Dropdown/Dropdown.js";
import Calculator from "../Calculator/Calculator.js";
function ButtonComponent() {
  return (
    <div className="Buttons">
      <Button
        label="Primary"
        type="primary"
        onClick={() => {
          console.log("you clicked primary button");
        }}
      />
      <Button
        label="Secondary"
        type="secondary"
        onClick={() => {
          console.log("you clicked secondary button");
        }}
      />
      <Button
        label="Outline"
        type="outline"
        onClick={() => {
          console.log("you clicked outline button");
        }}
      />
      <Button
        label="Click Here"
        type="default"
        pilled={true}
        onClick={() => {
          console.log("you clicked default button");
        }}
      />
      <Button
        label="Submit"
        loadingText="Submitting..."
        loading={true}
        type="submit"
        onClick={() => console.log("you clicked")}
      />
    </div>
  );
}

function AccordionComponent() {
  return (
    <div className="Container">
      <Accordion
        id="q1"
        title="What is a dog?"
        content=" A dog is a type of domesticated animal. "
      />
      <Accordion
        id="q2"
        title="What is a cow?"
        content=" A cow is a type of domesticated animal. "
      />
      <Accordion
        id="q3"
        title="What is a cat?"
        content=" A cat is a type of domesticated animal. "
      />
    </div>
  );
}

function DropdownComponent() {
  return (
      <Dropdown
        options={["Apple", "Mango", "Orange", "Pineapple"]}
        value = "Orange"
        onChange = {(options)=> {console.log(options)}}
      />
  );
}

function CalculatorComponent(){
 return(
   <Calculator />
 );
}

function Exec() {
  return (
    <div className="exec">
      <div><ButtonComponent /></div>
      <div><AccordionComponent /></div>
      <div><DropdownComponent /></div> 
      <div><CalculatorComponent/></div>
      
    </div>
  );
}

export default Exec;
