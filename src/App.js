import "./App.scss";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { getInitialData } from "./utils/index";
import TodoItemList from "./components/TodoItemList";
import ModalEdit from "./components/Modal/EditModal";

function App() {
  const [data, setData] = useState(getInitialData());
  const [show, setShow] = useState(false);
  const [singleData, setSingleData] = useState("");
  data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  console.log(data)

  const onAddTodoHandler = (todo, date) => {
    setData([
      ...data,
      {
        id: data.length + 1,
        todo: todo,
        createdAt: date,
        isCheck : false
      },
    ]);
  };

  const onDeleteTodoHandler = (id) => {
    const removeData = data.filter((todo) => todo.id !== id);
    setData(removeData);
  };

  const onUpdateTodoHandler = () => {
    const dataTodo = [...data];
    const dataIndex = dataTodo.findIndex((dt) => dt.id === singleData.id);
    if (dataIndex === -1) return;
    dataTodo[dataIndex] = {
      ...dataTodo[dataIndex],
      todo: singleData.todo,
      createdAt: singleData.createdAt,
    };
    setData(dataTodo);
    setShow(false);
  };

  const editHandleShow = (id) => {
    setShow(true);
    const dataTodo = [...data];
    const dataIndex = dataTodo.findIndex((dt) => dt.id === id);
    setSingleData(data[dataIndex]);
  };
  const editHandleClose = () => setShow(false);

  const onCompleteTodoHandler = (id) => {
    const dataTodo = [...data];
    const dataIndex = dataTodo.findIndex((dt) => dt.id === id);
    if (dataIndex === -1) return;
    dataTodo[dataIndex] = {
      ...dataTodo[dataIndex],
      isCheck : !dataTodo[dataIndex].isCheck
    };
    setData(dataTodo);
  }

  return (
    <div className="App">
      <TodoInput onAddTodoHandler={onAddTodoHandler} />
      <div className="line"></div>
      <TodoItemList
        data={data}
        editHandleShow={editHandleShow}
        onDeleteTodoHandler={onDeleteTodoHandler}
        onCompleteTodoHandler={onCompleteTodoHandler}
      />

      <ModalEdit
        show={show}
        handleClose={editHandleClose}
        singleData={singleData}
        setSingleData={setSingleData}
        onUpdateTodoHandler={onUpdateTodoHandler}
      />
    </div>
  );
}

export default App;
