import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import CustomizationReducer from './features/customization/customizationSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    customization: CustomizationReducer
  },
});