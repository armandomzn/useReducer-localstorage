import { useState } from "react";

export const useError = (initialState = false) => {
  const [error, setError] = useState(initialState);
  const handleError = () => {
    setError((prev) => {
      return !prev;
    });
  };
  return [error, handleError];
};
