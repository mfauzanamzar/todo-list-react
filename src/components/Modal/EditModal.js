import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalEdit = ({
  show,
  handleClose,
  singleData,
  setSingleData,
  onUpdateTodoHandler,
}) => {
  const onEditTodoChangeEventHandler = (e) => {
    const todo = e.target.value;
    setSingleData({
      ...singleData,
      todo: todo,
    });
  };

  const onEditDateChangeEventHandler = (e) => {
    const date = e.target.value;
    setSingleData({
      ...singleData,
      createdAt: date,
    });
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Task</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Tuliskan task..."
              value={singleData.todo}
              onChange={onEditTodoChangeEventHandler}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              size="lg"
              type="date"
              value={singleData.createdAt}
              onChange={onEditDateChangeEventHandler}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={onUpdateTodoHandler} variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
