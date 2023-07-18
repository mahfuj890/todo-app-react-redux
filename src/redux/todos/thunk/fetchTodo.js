import { loaded } from "../actions";

const fetchTodo = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = response.json();
  dispatch(loaded(todos));
};

export default fetchTodo;
