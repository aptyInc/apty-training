function filterAndMapTasks() {
  const input = document.getElementById("taskArray").value;
  let tasks;

  // Try to parse the input string to an array of objects
  try {
    tasks = JSON.parse(input);
    if (!Array.isArray(tasks)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("completedTasks").textContent =
      "Invalid input. Please enter a valid array of tasks.";
    return;
  }

  // Filter completed tasks and map to their names
  const completedTaskNames = tasks
    .filter((task) => task.completed) // Keep only tasks with completed === true
    .map((task) => task.task); // Map to task names

  // Display the result
  document.getElementById("completedTasks").textContent =
    completedTaskNames.join(", ");
}
