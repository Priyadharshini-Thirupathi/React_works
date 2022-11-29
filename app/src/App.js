import "./App.css";
import Submenu from "./Submenu";
import Todo from "./Todo";
function App() {
  const menuItems = [
    {
      title: "Domestic", 
      list: [{title: "Dog"},{title: "Cat"}]
    },
    {
      title: "Wild",
      list: [
        {
          title: "Lion",
        },
        {
          title: "Tiger",
          list: [
            {
              title: "Bengal",
            },
            {
              title: "Asian",
            },
          ],
        },
      ],
    },
    {title: "Others"}
  ];
  return (
    <>
    <div className="App">
      <Submenu menuItems={menuItems} />
    </div>
      <Todo  defaultTodo = {[{todo:"Learn React", completed: false}, {todo:"Hi to Friends", completed: false}]}/>

    </>

  );
}

export default App;
