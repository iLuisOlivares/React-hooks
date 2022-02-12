import React from "react";

export const TodoListItem = ({ todo, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`text-center ${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.desc}
      </p>
      <button
        className=" btn btn-outline-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
