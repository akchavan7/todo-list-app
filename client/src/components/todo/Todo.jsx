import "./Todo.css";

import { useEffect, useRef, useState } from "react";
import Tabs from "../Tabs/Tabs";
import TaskList from "../TaskList/TaskList";
import store from "../../store/store";
import * as actionType from "../../store/actionTypes";
import { addNewTask } from "../../services/mainService";
import TodoInput from "./TodoInput";
import { areDatesDifferent, formatTimestamp } from "../../utilities/helper";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text.length == 0) return;
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

  const taskList = currentVisible ? currentTasks : archivedTasks;

  return (
    <div className="list-container">
      <h2 className="title">What's the plan for Today?</h2>
      <Tabs handleTabChange={handleTabChange} currentVisible={currentVisible} />
      <div className="tab-panel">
        <TodoInput
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          btnLabel={"Add Todo"}
        />
        <div className="task-list">
          {taskList.map((task, i) => {
            if (
              i == 0 ||
              areDatesDifferent(
                currentTasks[i].timestamp,
                currentTasks[i - 1].timestamp
              )
            ) {
              return (
                <>
                  <div className="date">
                    {formatTimestamp(currentTasks[i].timestamp)}
                  </div>
                  <TaskList key={task.id} id={task.id} text={task.text} />
                </>
              );
            }
            return <TaskList key={task.id} id={task.id} text={task.text} />;
          })}
        </div>
      </div>
    </div>
  );
}

// text, timestamp, status(done, todo)
