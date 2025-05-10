import { useEffect, useReducer } from "react";
import taskReducer from "./components/reducer/reducer"
import TaskManager from "./components/taskmanager"
import { createContext } from "react";

import "./App.css"

export const TaskContext = createContext();


function App() {
  let [tasks,dispatch]=useReducer(taskReducer,[],()=>{
    return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
  })

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <>
    <TaskContext.Provider value={{tasks,dispatch}}
    ><TaskManager/></TaskContext.Provider>
    
    </>
  )
}

export default App
