import { produce } from "immer";
import { getMostRecentID } from "../services/mainService";
import { generateTimestamp } from "../utilities/helper";
import * as actionType from "./actionTypes";

const initialState = {
  currentTasks: [],
  archivedTasks: [],
  currentTasksView: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.INITIALIZE:
      //   return state;
      return produce(state, (newState) => {
        newState.currentTasks = action.payload.currentTasks;
        newState.archivedTasks = action.payload.archivedTasks;
      });
    case actionType.TAB_CHANGE:
      //   return state;
      return produce(state, (newState) => {
        newState.currentTasksView = action.payload.currentTasksView;
      });
    case actionType.ADD_TASK:
      return produce(state, (newState) => {
        newState.currentTasks = [
          ...newState.currentTasks,
          {
            id: getMostRecentID() + 1,
            text: action.payload.text,
            status: "Pending",
            timestamp: generateTimestamp(),
          },
        ];
      });
    case actionType.MARK_DONE:
      return produce(state, (newState) => {
        const currentTasks = [];
        let taskToRemove;
        newState.currentTasks.forEach((task) => {
          if (task.id === action.payload.id) {
            taskToRemove = task;
          } else {
            currentTasks.push(task);
          }
        });
        newState.currentTasks = currentTasks;
        taskToRemove.status = "Done";
        newState.archivedTasks.push(taskToRemove);
      });
    default:
      return state;
  }
}