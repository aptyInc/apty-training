function filterCompleted() {
  const input = document.getElementById("tasksInput").value;

  const tasks = input.split(";").map((task) => {
    const [taskName, completed] = task.split(",").map((s) => s.trim());
    return { task: taskName, completed: completed === "true" };
  });

  const completedTasks = tasks
    .filter((task) => task.completed)
    .map((task) => task.task);

  document.getElementById("result").textContent = `[${completedTasks.join(
    ", "
  )}]`;
}
