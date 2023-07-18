import {
  ADDED,
  TOGGLETODO,
  COLORSELECTEDTODO,
  DELETETODO,
  ALLCOMPLETETODO,
  CLEARTODO,
  LOADED,
} from "./actionTypes";
import { initialState } from "./initialState";

//Generate next id
function generateNextID(todos) {
  const maxID = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxID;
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDED:
      return [
        ...state,
        {
          id: generateNextID(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLETODO:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTEDTODO:
      return state.map((todo) => {
        const { todoId, color } = action.payload;
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETETODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETETODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARTODO:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

export default todoReducer;
