function CompletedTasks(tasks) {
    return tasks.filter((task) => task.completed).map((task) => task.task);
  }

  const tasks = [
    { task: "A", completed: true },
    { task: "B", completed: false },
    { task: "C", completed: true },
  ];

  const completed = CompletedTasks(tasks);

  document.getElementById(
    "result"
  ).innerText = `Completed Tasks: ${completed.join(", ")}`;