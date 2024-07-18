import { createStore } from "redux";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });
export default store;
