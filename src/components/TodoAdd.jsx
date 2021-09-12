import React from "react";
import { useError } from "../hooks/useError";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  const [error, handleError] = useError(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      if (!error) {
        handleError();
      }
      return;
    }
    if (error) {
      handleError();
    }
    handleAdd(description);
    reset();
  };
  return (
    <>
      {error && (
        <div className="error">
          <h4>The field is required</h4>
        </div>
      )}
      <div className="card-header">
        <h4>Add a todo</h4>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Todo description:</label>
            <input
              type="text"
              name="description"
              className="entrada"
              placeholder="Description..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value="Save" className="button" />
        </form>
      </div>
    </>
  );
};
