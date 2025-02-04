import { useState, useContext } from 'react';
import { Tasks_Context } from './App';

function Input_task() {
  const [taskname, settaskname] = useState('');
  const { state, dispatch } = useContext(Tasks_Context);

  const addTask = (task_name) => {
    dispatch({ type: 'ADD_TASK', payload: task_name });
    settaskname(''); // Clear input field after adding the task
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={taskname}
        onChange={(e) => settaskname(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={() => addTask(taskname)}>ADD</button>
    </div>
  );
}

export default Input_task;
