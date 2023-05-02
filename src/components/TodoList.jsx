import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const getTodos = useSelector((state) => state.todos);
  const getFilter = useSelector((state) => state.filter);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {getTodos
        .filter((todo) => {
          switch (getFilter?.status) {
            case "complete":
              return todo?.complete;
            case "incomplete":
              return !todo?.complete;

            default:
              return true;
          }
        })
        .filter((colorItem) => {
          if (getFilter?.colors?.length > 0) {
            return getFilter?.colors.includes(colorItem?.color);
          }
          return true;
        })
        .map((item) => {
          return <Todo todo={item} key={item?.id} />;
        })}
    </div>
  );
}
