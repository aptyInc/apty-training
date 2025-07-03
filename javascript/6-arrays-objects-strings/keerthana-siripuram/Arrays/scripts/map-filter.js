function fetchCompletedTasks() {
    let tasks = document.getElementById("str").value
    let parsedTasks;
    try {
        parsedTasks = JSON.parse(tasks)
    }
    catch (err) {
        document.getElementById("res").innerText = `${err.message}`
    }
    const completedTasks=parsedTasks.filter((task)=>task.completed===true)
    completedTasks.map((completedTask)=>{
        document.getElementById("res").innerHTML += `${completedTask.taskName},`
    })
}