import React from "react";
import TodoItem from "./TodoItem";
import moment from "moment";

const TodoItemList = ({ data, editHandleShow, onDeleteTodoHandler, onCompleteTodoHandler }) => {
  const todayTodo = data.filter(
    (dt) =>
      moment(dt.createdAt).format("DD MM") === moment().format("DD MM") &&
      dt.isCheck === false
  );
  const upcomingTodo = data.filter(
    (dt) =>
      moment(dt.createdAt).format("DD MM") !== moment().format("DD MM") &&
      dt.isCheck === false
  );
  const completeTodo = data.filter((dt) => dt.isCheck === true);

  const TodayTodoList = () => {
    return (
      <>
        <h3>Today</h3>
        {todayTodo.length < 1 ? (
          <p>Tidak ada task!</p>
        ) : (
          <>
            {todayTodo.map((x, index) => (
              <TodoItem
              onCompleteTodoHandler={onCompleteTodoHandler}
                key={x.id}
                index={index}
                {...x}
                editHandleShow={editHandleShow}
                onDeleteTodoHandler={onDeleteTodoHandler}
              />
            ))}
          </>
        )}
      </>
    );
  };

  const UpcomingTodoList = () => {
    return (
      <>
        <h3>Upcoming</h3>
        {upcomingTodo.length < 1 ? (
          <p>Tidak ada task!</p>
        ) : (
          <>
            {upcomingTodo.map((todoData, index) => (
              <TodoItem
              onCompleteTodoHandler={onCompleteTodoHandler}
                disabled="disabled"
                key={todoData.id}
                index={index}
                {...todoData}
                editHandleShow={editHandleShow}
                onDeleteTodoHandler={onDeleteTodoHandler}
              />
            ))}
          </>
        )}
      </>
    );
  };

  const CompleteTodoList = () => {
    return (
      <>
        <h3>Completed</h3>
        {completeTodo.length < 1 ? (
          <p>Tidak ada task!</p>
        ) : (
          <>
            {completeTodo.map((todoData, index) => (
              <TodoItem
                onCompleteTodoHandler={onCompleteTodoHandler}
                completed="completed"
                key={todoData.id}
                index={index}
                {...todoData}
                editHandleShow={editHandleShow}
                onDeleteTodoHandler={onDeleteTodoHandler}
              />
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <div className="todo-item-list">
      <TodayTodoList />
      <UpcomingTodoList />
      <CompleteTodoList />
    </div>
  );
};

export default TodoItemList;
