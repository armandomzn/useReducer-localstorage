import React, { useReducer, useEffect } from "react";
import Todo from "../helpers/Todo";
import { reducer } from "../helpers/reducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, [], init);

  //*REDUCER ACTIONS
  const handleAdd = (description) => {
    dispatch({
      type: "add",
      payload: new Todo(description),
    });
  };
  const handleRemove = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleDone = (id) => {
    dispatch({ type: "done", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 className="text-center">Todos ({todos.length})</h1>

      <div className="container">
        <div className="flex-container">
          <div className="formulario">
            <TodoAdd handleAdd={handleAdd} />
          </div>
          <div className="todos">
            <TodoList
              todos={todos}
              handleRemove={handleRemove}
              handleDone={handleDone}
            />
          </div>
        </div>
      </div>
    </>
  );
};
