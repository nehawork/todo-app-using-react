import { CloseButton, FormCheck } from "react-bootstrap";
import "../style.css";

function TodoCard({ task, taskIndex, onMarkComplete, onDeleteTodo }) {
  return (
    <div className="card mt-2 w-full">
      <div className="card-body content-wrapper">
        <FormCheck
          type="checkbox"
          checked={task.isCompleted}
          onClick={() => onMarkComplete(taskIndex, !task.isCompleted)}
        />
        <div className="card-text ms-3 text-wrapper">
          {task.isCompleted ? <del>{task.details}</del> : task.details}
        </div>

        <CloseButton onClick={() => onDeleteTodo(taskIndex)} />
      </div>
    </div>
  );
}

export default TodoCard;
