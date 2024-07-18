import "./App.css";
import Todo from "./components/todo/Todo";
import * as actionType from "./store/actionTypes";
import store from "./store/store";
import { useEffect } from "react";
import { getCurrentTasks, getArchivedTasks } from "./services/mainService";

function App() {
  useEffect(() => {
    (async function fetchTasks() {
      const currentTasks = await getCurrentTasks();
      const archivedTasks = await getArchivedTasks();
      store.dispatch({
        type: actionType.INITIALIZE,
        payload: { currentTasks: currentTasks, archivedTasks: archivedTasks },
      });
    })();
  }, []);

  return (
    <div className="main-container">
      <Todo />
    </div>
  );
}

export default App;
