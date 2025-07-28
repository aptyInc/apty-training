import React, {
  useState,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { TaskContext } from "./TaskProvider";
import Timer from "./Timer";
import styles from "../styles/task-manager.module.css";

const TaskManager = () => {
  // global n lcl state intlztn
  const { tasks, dispatch } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");
  const timerRef = useRef(null);

  //local n global hndlrs
  const addTask = useCallback(() => {
    if (taskText.trim()) {
      console.log("asd");
      dispatch({ type: "ADD_TASK", payload: taskText });
    }
    setTaskText("");
  }, [taskText, dispatch]);

  const removeTask = useCallback(
    (taskId) => {
      dispatch({ type: "REMOVE_TASK", payload: taskId });
    },
    [dispatch]
  );

  const toggleTask = useCallback(
    (taskId) => {
      dispatch({ type: "TOGGLE_TASK", payload: taskId });
    },
    [dispatch]
  );

  const completedTaskCount = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Task Manager</h1>
      <div className={styles.addSection}>
        <div className={styles.inputField}>
          <label>Enter a Task:</label>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <button
          className={`${styles.btn} ${styles["add-btn"]}`}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className={styles.displayTasks}>
        <p>Completed Tasks:{completedTaskCount}</p>
        <ul className={styles.taskContainer}>
          {tasks.map((task) => (
            <li className={styles.task}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                {task.text}
              </label>
              <button
                className={`${styles.btn} ${styles["remove-btn"]}`}
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.timerSection}>
        <Timer ref={timerRef} />
        <button
          className={`${styles.btn} ${styles["timer-btn"]}`}
          onClick={() => timerRef.current.reset()}
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
