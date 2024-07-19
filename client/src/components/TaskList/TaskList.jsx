import "./TaskList.css";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import store from "../../store/store";
import * as actionType from "../../store/actionTypes";
import { markTaskDone, undoTask, updateTask } from "../../services/mainService";
import { useEffect, useRef, useState } from "react";
import TodoInput from "../todo/TodoInput";

export default function TaskList(props) {
  const { id, text } = props;
  const [editView, setEditView] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current === null) return;
    inputRef.current.value = text;
    inputRef.current.focus();
  });

  async function handleTaskDone(e) {
    const res = await markTaskDone(id);
    if (res.status === 200) {
      store.dispatch({ type: actionType.MARK_DONE, payload: { id: id } });
    }
  }

  async function handleTaskUndo(e) {
    const res = await undoTask(id);
    if (res.status === 200) {
      store.dispatch({ type: actionType.MARK_PENDING, payload: { id: id } });
    }
  }

  function handleTaskEdit(e) {
    setEditView(true);
  }

  async function handleTaskUpdate(e) {
    const res = await updateTask(id, inputRef.current.value);
    console.log(res);
    if (res.status === 200) {
      console.log("dispatching update task");
      store.dispatch({
        type: actionType.UPDATE_TASK,
        payload: { id: id, text: inputRef.current.value },
      });
      setEditView(false);
    } else {
      alert("Cound not update the task");
    }
  }

  return editView ? (
    <TodoInput
      inputRef={inputRef}
      handleSubmit={handleTaskUpdate}
      btnLabel={"Update"}
    />
  ) : (
    <div className="todo-row">
      <div
        className={
          store.getState().currentTasksView ? "undone-task" : "done-task"
        }
      >
        {text}
      </div>
      <div className="icons">
        {store.getState().currentTasksView ? (
          <DoneIcon onClick={handleTaskDone} className="delete-icon" />
        ) : (
          <UndoIcon onClick={handleTaskUndo} className="undo-icon" />
        )}
        <EditIcon onClick={handleTaskEdit} className="edit-icon" />
      </div>
    </div>
  );
}
