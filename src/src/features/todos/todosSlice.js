import { produce } from "immer";
import { availableStatus, selectFilters } from "../filters/filtersSlice";
import { createSelector } from "reselect";

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

export const todosReducer = produce((state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLETODO:
      const toggledTodoId = action.payload.id;
      const todoCompletedStatus = state.entities[toggledTodoId];
      todoCompletedStatus.completed = !todoCompletedStatus.completed;
      break;
    case actionTypes.ADDTODO:
      const todo = action.payload;
      state.entities[todo.id] = todo;
      break;
    case actionTypes.DELETETODO:
      const deletedTodoId = action.payload.id;
      delete state.entities[deletedTodoId];
      break;
  }
}, initState);

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

export const selectTodoEntities = (state) => state.todos.entities;

export const todoIds = (state) => Object.keys(state.todos.entities);

const selectTodosVal = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

/* Method 3 */
const selectFilterTodos = createSelector(
  selectTodosVal,
  selectFilters,
  (todos, filters) => {
    const { status, colors } = filters;

    const showAll = status === availableStatus.All;

    if (showAll && colors.length === 0) return todos;

    const showCompleted = status === availableStatus.Completed;

    const filteredTodos = todos.filter((todo) => {
      const statusFilter = showAll || todo.completed === showCompleted;
      const colorsFilter = colors.length === 0 || colors.includes(todo.color);
      return statusFilter && colorsFilter;
    });

    return filteredTodos;
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilterTodos,
  (filteredTodos) => {
    return filteredTodos.map((todo) => todo.id);
  }
);

// ---------------------------------------------------------------------------

/* Method 1 
const selectFilterTodos = (state) => {
  const { status, colors } = state.filters;
  const todos = state.todos.entities;
  const statusFiltered = [];

  for (let key in todos) {
    const todo = todos[key];
    const completed = todo.completed;
    if (status === "all") {
      statusFiltered.push(todo);
    } else if (status === "pending" && !completed) {
      statusFiltered.push(todo);
    } else if (status === "completed" && completed) {
      statusFiltered.push(todo);
    }
  }

  const colorFiltered =
    colors.length === 0
      ? statusFiltered
      : statusFiltered.filter((todo) => colors.includes(todo.color));

  return colorFiltered;
};
*/

/* Method 2 
export const selectFilterTodos = (state) => {
  const todos = selectTodosVal(state);

  const { status, colors } = state.filters;

  const showAll = status === availableStatus.All;

  if (showAll && colors.length === 0) return todos;

  const showCompleted = status === availableStatus.Completed;

  const filteredTodos = todos.filter((todo) => {
    const statusFilter = showAll || todo.completed === showCompleted;
    const colorsFilter = colors.length === 0 || colors.includes(todo.color);
    return statusFilter && colorsFilter;
  });

  return filteredTodos;
};
*/
