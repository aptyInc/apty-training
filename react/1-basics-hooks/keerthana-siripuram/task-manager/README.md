# Task Manager App
### Objective
The Task Manager app allows users to create, mark as completed, and delete tasks. It includes a timer feature that auto-starts when the app loads and can be reset at any time. The app utilizes React Context for global state management, useReducer for task management, and incorporates performance optimizations using React Hooks.

### Functional Requirements
### User Management
* Add new tasks: Users can enter a task description and click the "Add Task" button to add it to the task list.
Mark tasks as completed: Users can toggle the completion status of each task.
* Delete tasks: Users can remove tasks from the list.
### Task Management
* Unique ID for each task: Each task has a unique ID that is auto-generated.
* Task Text: A required field for each task.
* Completed Status: A boolean field that tracks whether the task is completed.
* Global State: Tasks are stored globally using React Context and useReducer.
* Persistent Storage: Tasks are saved to localStorage so they persist across page reloads.
Timer
* Auto-start on app launch: The timer starts automatically when the app loads.
* Increment every second: The timer will increase by one second every second.
* Reset timer functionality: The timer can be reset via a "Reset Timer" button.
### Performance Optimizations
* useMemo: Use useMemo to optimize the calculation of completed tasks count.
* useCallback: Use useCallback to prevent unnecessary re-renders of functions.
### Technical Requirements
### React Hooks Usage
* useState: To manage local states such as the timer and input field.
* useEffect: To automatically increment the timer every second.
* useContext: To store tasks globally in the app.
* useReducer: To handle task actions like adding, removing, and toggling tasks.
* useRef: To keep references for the input field and timer.
* useMemo: To memoize the completed task count and avoid recalculating it on each render.
* useCallback: To optimize functions like addTask and prevent re-creations on each render.
* useImperativeHandle: To expose a resetTimer method from the Timer component, allowing it to be reset from the parent.
### UI Requirements
* Text input field: An input field for entering new tasks.
* "Add Task" button: Button for adding the task to the list.
* List of tasks: A list of tasks with checkboxes for marking them as completed and buttons to remove them.
* Completed tasks counter: A counter showing the number of tasks marked as completed.
* Timer display: A display of the current timer value.
* "Reset Timer" button: A button to reset the timer.
### Setup Instructions
* Clone the repository:
git clone https://github.com/keerthanasiripuram/task-manager-app.git
cd task-manager-app
* Install dependencies:
npm install

* Run the development server:
npm start
Open http://localhost:3000 in your browser to view the app.