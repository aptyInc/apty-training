function getCompletedTasks() {
    const taskData = document.getElementById("tasksInputArea").value;
    try {
        const taskList = JSON.parse(taskData);
        const completedTasks = taskList
            .filter(task => task.completed)
            .map(task => task.task);
        document.getElementById("outputResult").innerHTML = `Completed Tasks: ${JSON.stringify(completedTasks)}`;
    } catch (error) {
        document.getElementById("outputResult").innerHTML = "Invalid input. Please provide a valid JSON array.";
    }
}
