function completedTasks() {
    
    var tasks = [

        {task: 'A', completed: true},

        {task: 'B', completed: false},
        {task: 'C', completed: true}
    ];
    var completedTasks = tasks.filter(function(t) {

        return t.completed;
    }).map(function(t) {
        return t.task;

    });
    document.getElementById("result").innerText = completedTasks;

}
