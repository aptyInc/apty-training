import React, { createContext, useEffect, useReducer } from "react";

//create Task Context
export const TaskContext = createContext();

//initial state
const initialState = [];

//create Task Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

//create Task Reducer
const tasksReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newState = [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
      console.log(newState);
      return newState;
    }
    case REMOVE_TASK: {
      const newState = state.filter((task) => {
        return task.id !== action.payload;
      });
      console.log(newState);
      return newState;
    }
    case TOGGLE_TASK: {
      const newState = state.map((task) => {
        return task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task;
      });
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

function TaskProvider({ children }) {

  const [tasks, dispatch] = useReducer(tasksReducer, initialState, () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
