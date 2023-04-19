const initState = {
  entities: [
    { id: 1, text: "Deign ui", completed: true, color: "red" },
    { id: 2, text: "discover state", completed: false },
    { id: 3, text: "discover actions", completed: false },
    { id: 4, text: "implement reducer", completed: false, color: "blue" },
    { id: 5, text: "Complete patterns", completed: false, color: "red" },
  ],
};

export const actionTypes = {
  ADDTODO: "todos/AddTodo",
  DELETETODO: "todos/DeleteTodo",
  TOGGLETODO: "todos/ToggleTodo",
};

export const todosReducer = ({ state = initState, action }) => {
  switch (action.type) {
    case actionTypes.TOGGLETODO:
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id !== toggledTodoId) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case actionTypes.ADDTODO:
      const todo = action.payload;
      return {
        ...state,
        entities: [...state.entities, todo],
      };

    case actionTypes.DELETETODO:
      const deletedTodoId = action.payload.id;
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== deletedTodoId),
      };
    default:
      return state;
  }
};
