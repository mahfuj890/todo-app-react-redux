import {
  ADDED,
  ALLCOMPLETETODO,
  CLEARTODO,
  COLORSELECTEDTODO,
  DELETETODO,
  TOGGLETODO,
} from "./actionTypes";

//add new todo
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

// toggle todo
export const toggle = (todoId) => {
  return {
    type: TOGGLETODO,
    payload: todoId,
  };
};

// color todo
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTEDTODO,
    payload: { todoId, color },
  };
};

// delete todo
export const deleted = (todoId) => {
  return {
    type: DELETETODO,
    payload: todoId,
  };
};

// all complete todo
export const allComplete = () => {
  return {
    type: ALLCOMPLETETODO,
  };
};

// all clear todo
export const allClear = () => {
  return {
    type: CLEARTODO,
  };
};
