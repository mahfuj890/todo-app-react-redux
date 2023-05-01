import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import { colorSelected, toggle, deleted } from "../redux/todos/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  // const {  text, completed, color } = todo;

  //Toggle Complete
  const handleStatusChange = (id) => {
    dispatch(toggle(id));
  };

  //Color Selected
  const handleColorSelected = (id, color, todo) => {
    dispatch(colorSelected(id, color));
  };

  //Delete Todo
  const handleDeleteTodo = (id) => {
    alert("Are you sure you want delete?");
    dispatch(deleted(id));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2   cursor-pointer ${
          todo?.completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full cursor-pointer"
          checked={todo?.completed}
          onChange={() => handleStatusChange(todo?.id)}
        />
        {todo?.completed && (
          <svg
            className="  fill-current w-3 h-3 text-green-500 cursor-pointer"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className="select-none flex-1 line-through">{todo?.text}</div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo?.color === "green" && " bg-green-500"
        }`}
        onClick={() => handleColorSelected(todo?.id, "green", todo)}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo?.color === "yellow" && "  bg-yellow-500"
        }`}
        onClick={() => handleColorSelected(todo?.id, "yellow")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo?.color === "red" && " bg-red-500"
        }`}
        onClick={() => handleColorSelected(todo?.id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDeleteTodo(todo?.id)}
      />
    </div>
  );
}
