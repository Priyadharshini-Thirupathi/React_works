import React, { useState } from "react";
import "./Todo.css";

function Todo({ defaultTodo }) {
  const [todos, setTodos] = useState(defaultTodo);
  const [display, setDisplay] = useState(defaultTodo);

  const handleKeyPress = (event) => {
    event.charCode === 13 &&
      setTodos([...todos, { todo: event.target.value, completed: false }]);
    event.charCode === 13 &&
      setDisplay([...display, { todo: event.target.value, completed: false }]);
  };
  const handleClick = (index) => {
    todos[index].completed ? todos[index].completed = false : todos[index].completed = true;
    display[index].completed ? display[index].completed = false : display[index].completed = true;

  };
  const handleCompleted = () => {
    setDisplay(todos.filter((item) => item.completed === true));
    console.log(display);
  };
  const handleActive = () => {
    setDisplay(todos.filter((item) => item.completed === false));
    console.log(display);
  };
  const handleAll = () => {
    setDisplay([...todos]);
    console.log(display);

  };
  return (
    <div className="todo--container">
      <div className="add--todo">
        <input type="text" onKeyPress={handleKeyPress} />
      </div>
      <div className="display--todo">
        {display.map((item, index) => (
          <div className="task--item">
            <input
              type="checkbox"
              key={index}
              id="checkbox"
              onClick={() => handleClick(index)}
            />
            {item.todo}
          </div>
        ))}

       <div className="footer">
       <button className="completed--btn" onClick={handleCompleted}>
          completed
        </button>
        <button className="active--btn" onClick={handleActive}>
          active
        </button>
        <button className="all-btn" onClick={handleAll}>
          all
        </button>
       </div>
      </div>
    </div>
  );
}



export default Todo;
