function filterCompletedTasks() {
    const input = document.getElementById('taskInput').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; 

    try {
        const tasks = JSON.parse(input);

        // Validate input is an array of objects
        if (!Array.isArray(tasks) || !tasks.every(task => task.task && 'completed' in task)) {
            throw new Error("Invalid input! Ensure it's an array of objects with 'task' and 'completed'.");
        }

        // Filter completed tasks and map to task names
        const completedTaskNames = tasks
            .filter(task => task.completed)
            .map(task => task.task);

        if (completedTaskNames.length > 0) {
            completedTaskNames.forEach(taskName => {
                const paragraph = document.createElement('p');
                paragraph.textContent = taskName;
                outputDiv.appendChild(paragraph);
            });
        } else {
            outputDiv.textContent = "No completed tasks found.";
        }
    } catch (error) {
    
        outputDiv.textContent = `Error: ${error.message}`;
    }
}