export const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case "done":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
