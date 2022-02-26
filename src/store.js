import { createStore } from "redux";
import addResReducer from "./reducers/addRes";
import changeModeReducer from "./reducers/changeMode";

const store = createStore(addResReducer);

export default store;
