import React from "react";

export const TodoListItem = ({ todo, handleRemove, handleDone }) => {
  const { id, description, done } = todo;
  return (
    <>
      <div className={`card-body ${done && "done-body cross cross1"}`}>
        <p className={`${done && "done"}`}>id: {id}</p>
        <p className={`${done && "done"}`}>Description: {description}</p>
        <div className="flex-buttons">
          <a
            href="#"
            className={`button delete ${done && "delete-done-button"}`}
            onClick={() => {
              handleRemove(id);
            }}
          >
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </a>
          <a
            className={`button update ${done && "done-button"}`}
            href="#"
            onClick={() => {
              handleDone(id);
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
