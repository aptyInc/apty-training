function getCompletedTasks(tasks) {
    
    const completedTasks = tasks.filter(task => task.completed)

    const taskNames = completedTasks.map(task => task.task)

    return taskNames
}

function processTasks() {
    const input = document.getElementById("taskInput").value
    let tasks

    try {
        tasks = JSON.parse(input)
    } catch (e) {
        document.getElementById("result").innerText = "Invalid JSON format. Please provide a valid array of task objects."
        return
    }

    if (!Array.isArray(tasks)) {
        document.getElementById("result").innerText = "Please provide an array of task objects."
        return
    }

    const completedTasks = getCompletedTasks(tasks)

    document.getElementById("result").innerText = `Completed tasks: ${completedTasks.join(", ")}`
}
