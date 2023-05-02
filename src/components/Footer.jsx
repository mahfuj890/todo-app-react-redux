import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filter/actions";

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
  console.log("getFilter", getFilter?.status === "all");

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
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
}
