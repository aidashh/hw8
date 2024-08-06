import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
