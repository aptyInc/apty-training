function filterTasks() {
    let input = document.getElementById("tasksInput").value;
    let tasks = input.split(",").map((task) => {
        let [name, completed] = task.split(":").map((item) => item.trim());
        return { task: name, completed: completed === "true" };
    });
    let completedTasks = tasks.filter((t) => t.completed).map((t) => t.task);
    document.getElementById("completedTasks").innerText =
        completedTasks.join(", ");
}
