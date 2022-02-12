import React from "react";
import { useForm } from "../../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [formValues, handleInputChange, resetInput] = useForm({
    description: "",
  });
  const { description } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length >= 1) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      handleAdd(newTodo);
      resetInput();
    }
  };
  return (
    <>
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
    </>
  );
};
