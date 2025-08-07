function getCompletedTasks() {
  const input = document.getElementById("inputTasks").value;
  const result = document.getElementById("result");

  try {
    const tasks = JSON.parse(input);

    if (!Array.isArray(tasks)) throw new Error();

    const completedTasks = tasks
      .filter((obj) => obj.completed === true)
      .map((obj) => obj.task);

    result.innerText = `Completed Tasks: [${completedTasks.join(", ")}]`;
  } catch {
    result.innerText =
      "Invalid input. Please enter a valid array of task objects.";
  }
}
