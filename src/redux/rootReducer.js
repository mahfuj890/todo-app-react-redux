import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";
import todoReducer from "./todos/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer, 
  filter: filterReducer, //this filter name is used where you need
});

export default rootReducer;
