import { useState } from "react";
import { CloseButton, Container, FormCheck } from "react-bootstrap";
import AddTodo from "./lib/todo-add";
import TodoCard from "./lib/todo-card";
import TodoTitle from "./lib/todo-title";

function TodoList() {
  const [todoTasks, setTodoTasks] = useState([]);

  function onAddTodo(taskDetails) {
    const updatedTodoTasks = [
      { id: todoTasks.length + 1, details: taskDetails, isCompleted: false },
      ...todoTasks,
    ];
    setTodoTasks(updatedTodoTasks);
  }

  function onMarkComplete(index, isComplete) {
    const todos = [...todoTasks];
    todos[index].isCompleted = isComplete;
    setTodoTasks(todos);
  }

  function onDeleteTodo(index) {
    const todos = [...todoTasks];
    todos.splice(index, 1);
    setTodoTasks(todos);
  }

  return (
    <Container className="list-wrapper">
      <TodoTitle tasksCount={todoTasks.length} />
      
      <hr />

      <AddTodo onAddTodo={onAddTodo} />

      {todoTasks.length > 0 && (
        <div className="row px-4 todo-tasks-wrapper">
          {todoTasks.map((task, index) => (
            <TodoCard
              task={task}
              taskIndex={index}
              onMarkComplete={onMarkComplete}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

export default TodoList;
