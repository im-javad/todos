const initState = {
  entities: {
    1: { id: 1, text: "Deign ui", completed: true, color: "red" },
    2: { id: 2, text: "discover state", completed: false },
    3: { id: 3, text: "discover actions", completed: false },
    4: { id: 4, text: "implement reducer", completed: true, color: "aqua" },
    5: { id: 5, text: "Complete patterns", completed: false, color: "orange" },
  },
};

export const actionTypes = {
  ADDTODO: "todos/AddTodo",
  DELETETODO: "todos/DeleteTodo",
  TOGGLETODO: "todos/ToggleTodo",
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLETODO:
      const toggledTodoId = action.payload.id;
      return {
        ...state,
        entities: {
          ...state.entities,
          [toggledTodoId]: {
            ...state.entities[toggledTodoId],
            completed: !state.entities[toggledTodoId].completed,
          },
        },
      };

    case actionTypes.ADDTODO:
      const todo = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
      };

    case actionTypes.DELETETODO:
      const deletedTodoId = action.payload.id;
      const entities = { ...state.entities };
      delete entities[deletedTodoId];
      return {
        ...state,
        entities,
      };

    default:
      return state;
  }
};

export const todoAdd = (text) => {
  return {
    type: actionTypes.ADDTODO,
    payload: { id: 77, text: text, completed: false },
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLETODO,
    payload: { id },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETETODO,
    payload: { id },
  };
};
