import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const init = () => {
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: "Aprender useReducer",
  //       done: false,
  //     },
  //   ];

  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };

    dispatch(action);
  };
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle-2",
      payload: todoId,
    };

    dispatch(action);
  };

  return (
    <div className="m-5">
      <h1>TodoApp: {todos.length}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          ></TodoList>
        </div>
        <div className="col-5">
          <TodoAdd handleAdd={handleAdd}></TodoAdd>
        </div>
      </div>
    </div>
  );
};
