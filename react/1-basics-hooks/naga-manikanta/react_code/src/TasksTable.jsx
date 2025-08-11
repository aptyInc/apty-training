import { useContext } from "react";
import { Tasks_Context } from "./App";

export default function TasksTable() {
  const { state, dispatch } = useContext(Tasks_Context);

  return (
    state.length === 0 ?
      <div>Your task list is empty. Add a task!</div> :
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((i) => (
            <tr key={i.id}>
              <td>{i.task_name}</td>
              <td>{i.status ? 'Completed' : 'Not Completed'}</td>
              <td>
                <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: i.id })}>Toggle Task</button>
                <br />
                <button className="remove-btn" onClick={() => dispatch({ type: 'REMOVE', payload: i.id })}>Remove Task</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
