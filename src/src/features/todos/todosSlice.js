import { produce } from "immer";
import { availableStatus, selectFilters } from "../filters/filtersSlice";
import { createSelector } from "reselect";
import { client } from "../../api/client";

const initState = {
  isLoadin: true,
  entities: {},
  failFetch: false,
};

export const actionTypes = {
  ADDTODO: "todos/AddTodo",
  DELETETODO: "todos/DeleteTodo",
  TOGGLETODO: "todos/ToggleTodo",
  MARKALLCOMPLETED: "todos/MarkAllCompleted",
  CLEARCOMPLETED: "todos/ClearCompleted",
  CHANGECOLOR: "todos/ChangeColor",
  SUCCESSFETCHTODOS: "todos/SuccessFetchTodos",
  FAILFETCHTODOS: "todos/FailFetchTodos",
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
    case actionTypes.MARKALLCOMPLETED:
      Object.values(state.entities).forEach((todo) => {
        state.entities[todo.id].completed = true;
      });
      break;
    case actionTypes.CLEARCOMPLETED:
      Object.values(state.entities).forEach((todo) => {
        if (todo.completed) delete state.entities[todo.id];
      });
      break;
    case actionTypes.CHANGECOLOR:
      const { id, color } = action.payload;
      state.entities[id].color = color;
      break;
    case actionTypes.SUCCESSFETCHTODOS:
      const todos = action.payload;
      const newEntities = {};
      todos.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      state.entities = newEntities;
      state.failFetch = false;
    case actionTypes.FAILFETCHTODOS:
      state.failFetch = true;
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

export const markAllCompleted = () => {
  return {
    type: actionTypes.MARKALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: actionTypes.CLEARCOMPLETED,
  };
};

export const changeColor = (color, id) => {
  return {
    type: actionTypes.CHANGECOLOR,
    payload: { id, color },
  };
};

const successFetch = (todos) => {
  return {
    type: actionTypes.SUCCESSFETCHTODOS,
    payload: todos,
  };
};

const failFetch = () => {
  return {
    type: actionTypes.FAILFETCHTODOS,
  }
}

export const fetchTodos = (dispatch) => {
  client.get("todos").then((todos) => dispatch(successFetch(todos))).catch(error => failFetch());
};

export const selectTodoEntities = (state) => state.todos.entities;

export const todoIds = (state) => Object.keys(state.todos.entities);

export const selectTodosVal = createSelector(selectTodoEntities, (entities) =>
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
