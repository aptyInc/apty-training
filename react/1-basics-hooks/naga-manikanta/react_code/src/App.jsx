import './App.css'
import React, { useReducer, useEffect, useState, createContext } from 'react';
import Input_task from './Input_task';
import TasksTable from './TasksTable';
import Figs from './Figs';

import reducer from './reducer';
import Timer from './Timmer';

export const Tasks_Context = createContext();

function App() {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  return (
    <div className="container">
      {console.log("rnedered")}
      <Tasks_Context.Provider value={{ state, dispatch }}>
        <Timer></Timer>
        <Figs />
        <Input_task />
        <TasksTable />
      </Tasks_Context.Provider>
    </div>
  );
}

export default App;
