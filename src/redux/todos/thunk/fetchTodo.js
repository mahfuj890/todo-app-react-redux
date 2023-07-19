import { loaded } from "../actions";

const fetchTodo = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodo;
