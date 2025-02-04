import { useCallback, useContext } from "react";
import { TaskContext } from "../App";
import { REMOVE_TASK, TOGGLE_TASK } from "./actions/actions";
import "./tasklist.css"

function TaskList() {
  let { tasks, dispatch } = useContext(TaskContext);

  let handle_delete = useCallback( (val) => {
    dispatch(REMOVE_TASK(val));
  },[tasks]);

  let handle_mark = useCallback( (val) => {
    dispatch(TOGGLE_TASK(val))
  },[tasks])
  return (
    <>
      <table>
      <tbody>

        {tasks.map((val) => {
          return (
        
            <tr key={val.id}>
              <td>
                {val.completed?<span className="material-symbols-outlined icon-marked">check_circle</span>:<span className="material-symbols-outlined">check_circle</span>}
              </td>
              <td>{val.text}</td>
              <td>
                <button
                  onClick={() => {
                    handle_delete(val.id);
                  }}
                >
                  X
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handle_mark(val.id);
                  }}
                >
                  {val.completed ? "Unmark" : "Mark"}
                </button>
              </td>
            </tr>
            
          );
        })}
        </tbody>
      </table>
    </>
  );
}

export default TaskList;
