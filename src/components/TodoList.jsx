import React from "react";
import { TodoListItem } from "./TodoListItem";
export const TodoList = ({ todos, handleRemove, handleDone }) => {
  return (
    <>
      {todos.length === 0 ? (
        <h2>There aren't elements</h2>
      ) : (
        todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} handleRemove={handleRemove} handleDone={handleDone}/>;
        })
      )}
    </>
  );
};
