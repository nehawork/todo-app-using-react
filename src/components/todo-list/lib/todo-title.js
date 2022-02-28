import "../style.css";
import { Badge } from "react-bootstrap";

function TodoTitle({ tasksCount }) {
  return (
    <div className="todo-title-container">
      <h2>Todo List</h2>

      {tasksCount > 0 && (
        <Badge pill bg="info">
          {tasksCount}
        </Badge>
      )}
    </div>
  );
}

export default TodoTitle;
