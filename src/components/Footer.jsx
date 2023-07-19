import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filter/actions";

//Task Remaining condition
const calculateTodoLength = (number) => {
  switch (number) {
    case 0:
      return "No Task";
    case 1:
      return `${number} Task`;

    default:
      return `${number} Tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();

  //Get the State
  const getTodos = useSelector((state) => state.todos);
  const getFilter = useSelector((state) => state.filter);

  //Calculate the total number of todos
  const totalTodos = getTodos.filter((item) => !item?.completed)?.length;

  //Filter Status
  const handleFilterStatus = (status) => {
    dispatch(statusChange(status));
  };

  //Handle Color Filter
  const handleColorFilter = (color) => {
    if (getFilter?.colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };



  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{calculateTodoLength(totalTodos)} Left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            getFilter?.status == "all" && "font-bold"
          }`}
          onClick={() => handleFilterStatus("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            getFilter?.status == "incomplete" && "font-bold"
          }`}
          onClick={() => handleFilterStatus("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            getFilter?.status == "complete" && "font-bold"
          }`}
          onClick={() => handleFilterStatus("complete")}
        >
          Complete
        </li>

        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ml-2 ${
            getFilter?.colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorFilter("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            getFilter?.colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorFilter("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            getFilter?.colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorFilter("yellow")}
        ></li>
      </ul>
    </div>
  );
}
