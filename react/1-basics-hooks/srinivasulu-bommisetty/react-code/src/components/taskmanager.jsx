import Form from "./form";
import TaskList from "./tasklist";

import TaskCompletedCounter from "./task-counter";

import "./taskmanager.css";

import Timer from "./timer";
import { useRef } from "react";

function TaskManager() {
  let refe = useRef(null);

  let reset_time = () => {
    refe.current.reset_timer();
  };

  return (
    <div className="container">
      <TaskCompletedCounter />
      <div className="timer-container">
        <Timer ref={refe} />
        <button onClick={reset_time}>reset</button>
      </div>

      <Form />
      <TaskList />
    </div>
  );
}

export default TaskManager;
