import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoInput = ({ onAddTodoHandler }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [todoEmpty, setTodoEmpty] = useState("");
  const [dateEmpty, setDateEmpty] = useState("");

  const onTodoChangeEventHandler = (e) => {
    setTodo(e.target.value);
  };

  const onDateChangeEventHandler = (e) => {
    setDate(e.target.value);
  };

  const onValidateEventHandler = () => {
    if (!todo) {
      setTodoEmpty("task cannot be empty");
      return false;
    } else {
      setTodoEmpty("");
    }
    if (!date) {
      setDateEmpty("date cannot be empty");
      return false;
    } else {
      setDateEmpty("");
    }
    return true;
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    if (onValidateEventHandler()) {
      setTodo("");
      setDate("");
      return onAddTodoHandler(todo, date);
    }
  };

  return (
    <div>
      <h1 className="text-center">To Do List</h1>
      <div className="input-form mt-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              placeholder="Tuliskan task..."
              value={todo}
              onChange={onTodoChangeEventHandler}
              type="text"
            />
            <div className="allert" style={{ color: "red" }}>
              {todoEmpty}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              type="date"
              value={date}
              onChange={onDateChangeEventHandler}
            />
            <div className="allert" style={{ color: "red" }}>
              {dateEmpty}
            </div>
          </Form.Group>
          <Button onClick={onSubmitEventHandler}>+ Create</Button>
        </Form>
      </div>
    </div>
  );
};

export default TodoInput;
