import React, { useState } from "react";
import "./Todo.css";

function Todo({ defaultTodo }) {
  const [displayTask, setDisplayTask] = useState(defaultTodo);
  const [completedTask, setCompletedTask] = useState([]);
  const [activeTask, setActiveTask] = useState([]);
  const [allTask, setAllTask] = useState([])
  const [isChecked, setChecked] = useState(false);
  const handleKeyPress = (event) => {
    event.charCode === 13 &&
      setDisplayTask([...displayTask, event.target.value]);
  };

  const handleChange = (event) => {
    // if (event.target.checked) {
    //   setChecked(!isChecked);
    //   setCompletedTask([...completedTask, event.target.value]);
    // } else {
    // setActiveTask([...activeTask, event.target.value]);
    // }
    setCompletedTask([...completedTask, event.target.checked && event.target.value]);
    setActiveTask([...activeTask, !event.target.checked && event.target.value]);
    setAllTask([...allTask, event.target.value]);

  };

  const handleComplete = () => {
    setDisplayTask(completedTask);
    console.log(completedTask);
  };
  const handleActive = () => {
    setDisplayTask(activeTask);
    console.log(activeTask);
  }
  const handleAll = () => {
    setDisplayTask(allTask);
    console.log(allTask);
  }


  return (
    <div className="todo--container">
      <input type="text" onKeyPress={handleKeyPress} id="input" />
      <div className="display--tasks">
        {displayTask.map((item, index) => (
          <div className="task--item">
            <input
              type="checkbox"
              key={index}
              id="checkbox"
              value={item}
              onChange={handleChange}
            />
            {item}
          </div>
        ))}
      </div>
      <button className="all--btn" onClick={handleAll}>
        all
      </button>
      <button className="completed--btn" onClick={handleComplete}>
        completed
      </button>
      <button className="active--btn" onClick={handleActive}>
        active
      </button>
    </div>
  );
}

export default Todo;

// const removeTask = (targetIndex) => {
//   setDisplayTask((prev) => {
//     return prev.filter((item, index) => index !== targetIndex);
//   });
// };

// setDisplayTask((prev) => {
//   return prev.filter((item,index) => index === targetIndex);
// })
