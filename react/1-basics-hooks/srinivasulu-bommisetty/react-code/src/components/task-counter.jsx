import { useCallback, useContext, useMemo } from "react";
import { TaskContext } from "../App";
import "./taskcounter.css"

function TaskCompletedCounter() {
  let { tasks, dispatch } = useContext(TaskContext);

  let count = useMemo(() => {
    return tasks.filter((val) => val.completed);
  }, [tasks]);

  return (
    <div className="task-counter">
      <h3>Task Counter </h3>

      <h4 className="total-tasks">Total Tasks : {tasks?.length}</h4>
      <h4> Completed Tasks : {count.length > 0 ? count.length : "0"}</h4>
    </div>
  );
}

export default TaskCompletedCounter;
