import React, { useState } from "react";
import moment from "moment";
import { Button, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({
  id,
  createdAt,
  todo,
  isCheck,
  editHandleShow,
  onDeleteTodoHandler,
  disabled,
  completed,
  onCompleteTodoHandler,
}) => {
  // const [isCheck, setIsCheck] = useState(false);
  const date = moment(createdAt).format("D");
  const month = moment(createdAt).format("MMM");
  const checkHandleChange = () => {
    return onCompleteTodoHandler(id);
  };

  if (!todo) return <p>tidak ada data</p>;
  return (
    <>
      <div className="todo-item">
        <div className="date">
          <p className="number">{date}</p>
          <p className="month">{month}</p>
        </div>
        <div className={`todo ${disabled} ${completed}`}>
          <div className="d-flex gap-2">
            <Form.Check
              type="checkbox"
              checked={isCheck}
              onChange={checkHandleChange}
            />
            <p>{todo}</p>
          </div>

          <div className="button">
            <Button
              variant="primary"
              onClick={() => editHandleShow(id)}
              name="edit"
            >
              <FaEdit />
            </Button>
            <Button
              variant="danger"
              onClick={() => onDeleteTodoHandler(id)}
              name="delete"
            >
              <FaTrash />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
