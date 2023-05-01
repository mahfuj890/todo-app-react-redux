import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const getTodos = useSelector((state) => state.todos);
 

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {getTodos.map((item) => {
        return <Todo todo={item} key={item?.id} />;
      })}
    </div>
  );
}
