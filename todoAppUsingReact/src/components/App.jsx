import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function updateItem(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setTodoItems((prevItems) => {
      return [...prevItems, inputText];
    });

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onChange={updateItem} onClick={addItem} value={inputText} />

      <div>
        <ul>
          {todoItems.map((todoItem) => {
            return <TodoItem text={todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
