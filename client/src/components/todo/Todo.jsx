import "./Todo.css";

import { useEffect, useRef, useState } from "react";
import Tabs from "../Tabs/Tabs";

export default function Todo() {
  const [currentVisible, setCurrentVisible] = useState(true);
  const [input, setInput] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    setInput("");
  };

  const handleTabChange = (e) => {
    setCurrentVisible(e.target.id === "current");
  };

  return (
    <div className="list-container">
      <h2 className="title">What's the plan for Today?</h2>
      <Tabs handleTabChange={handleTabChange} currentVisible={currentVisible} />
      <div className="tab-panel">
        <input
          placeholder="Task for today is..."
          //   onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button">
          Add todo
        </button>
      </div>
    </div>
  );
}

// text, timestamp, status(done, todo)
