function filterTasks() {
  const userInput = prompt(
    "Enter tasks (format: task-completed, task-completed):"
  );
  const tasks = userInput.split(",").map((t) => {
    const [task, completed] = t.trim().split("-");
    return { task, completed: completed.toLowerCase() === "true" };
  });

  const completedTasks = tasks.filter((t) => t.completed).map((t) => t.task);
  document.getElementById(
    "map-filter-result"
  ).innerText = `Completed Tasks: ${completedTasks.join(", ")}`;
}
