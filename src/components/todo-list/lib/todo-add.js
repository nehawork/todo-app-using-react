import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddTodo({ onAddTodo }) {
  const [taskDetails, setTaskDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDetails) return;
    onAddTodo(taskDetails);
    setTaskDetails("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          placeholder="Enter Task Details"
        />
      </Form.Group>

      <div className="text-center">
        <Button variant="primary mb-3 mt-3" type="submit">
          Add Todo
        </Button>
      </div>
    </Form>
  );
}

export default AddTodo;
