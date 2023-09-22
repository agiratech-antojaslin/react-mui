import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // getTodos: (state, action) => {
    //   const todos = [
    //     {
    //       id: Math.random(100),
    //       text: "todo 1",
    //     },
    //     {
    //       id: Math.random(100),
    //       text: "todo 2",
    //     },
    //     {
    //       id: Math.random(100),
    //       text: "todo 3",
    //     },
    //   ];
    //   return [...state, todos];
    // },
    addTodo: (state, action) => {
      const todo = {
        id: Math.random(100),
        text: action.payload,
      };

      return [...state, todo];
    },
  },
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
