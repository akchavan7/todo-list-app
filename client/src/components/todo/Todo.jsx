import "./Todo.css";

import { useEffect, useRef, useState } from "react";
import Tabs from "../Tabs/Tabs";
import TaskList from "../TaskList/TaskList";
import store from "../../store/store";
import * as actionType from "../../store/actionTypes";
import { addNewTask } from "../../services/mainService";

export default function Todo() {
  const [currentVisible, setCurrentVisible] = useState(true);
  const [currentTasks, setCurrentTasks] = useState(
    store.getState().currentTasks
  );
  const [archivedTasks, setArchivedTasks] = useState(
    store.getState().archivedTasks
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    const unsubscribe = store.subscribe(() => {
      setCurrentTasks(store.getState().currentTasks);
      setArchivedTasks(store.getState().archivedTasks);
      setCurrentVisible(store.getState().currentTasksView);
    });

    return () => unsubscribe();
  }, []);

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    const response = await addNewTask(text);
    if (response.status === 200) {
      store.dispatch({ type: actionType.ADD_TASK, payload: { text: text } });
    }
    inputRef.current.value = "";
  };

  const handleTabChange = (e) => {
    store.dispatch({
      type: actionType.TAB_CHANGE,
      payload: { currentTasksView: e.target.id === "current" },
    });
  };

  return (
    <div className="list-container">
      <h2 className="title">What's the plan for Today?</h2>
      <Tabs handleTabChange={handleTabChange} currentVisible={currentVisible} />
      <div className="tab-panel">
        <div className="task-input">
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
        <div className="task-list">
          {currentVisible
            ? currentTasks.map((task) => {
                return <TaskList key={task.id} id={task.id} text={task.text} />;
              })
            : archivedTasks.map((task) => {
                return <TaskList key={task.id} id={task.id} text={task.text} />;
              })}
        </div>
      </div>
    </div>
  );
}

// text, timestamp, status(done, todo)
