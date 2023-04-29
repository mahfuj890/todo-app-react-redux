import {
  ADDED,
  TOGGLETODO,
  COLORSELECTEDTODO,
  DELETETODO,
  ALLCOMPLETETODO,
  CLEARTODO,
} from "./actionTypes";
import { initialState } from "./initialState";

//Generate next id
function generateNextID(todos) {
  const maxID = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxID;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: generateNextID(state),
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
      break;
  }
}

export default reducer;
