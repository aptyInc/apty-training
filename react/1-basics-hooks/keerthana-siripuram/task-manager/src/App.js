import logo from './logo.svg';
import './App.css';
import TaskProvider from './components/TaskProvider';
import TaskManager from './components/TaskManager';
function App() {
  return (
    <>
    <TaskProvider>
    <TaskManager></TaskManager>
    </TaskProvider>
    </>
  );
}

export default App;
