import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./components/TodoList";

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
  const [formValues, handleInputChange, resetInput] = useForm({
    description: "",
  });
  const { description } = formValues;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length >= 1) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      const action = {
        type: "add",
        payload: newTodo,
      };

      resetInput();
      dispatch(action);
    }
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
          <h4>Agregar nueva tarea</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Tu tarea"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button className="mt-1 btn btn-outline-warning" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
