import { TaskReducer } from "./TaskReducer";
import { combineReducers } from "redux"


export default combineReducers({
          tasks:TaskReducer
})