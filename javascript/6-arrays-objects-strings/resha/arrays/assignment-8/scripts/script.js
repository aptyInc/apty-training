const tasks = [
    { task: 'A', completed: true },
    { task: 'B', completed: false },
    { task: 'C', completed: true },
    { task: 'D', completed: false }
];

const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const completedTaskNames = tasks.filter(task => !task.completed).map(task => task.task);

    output.innerText = `Completed: ${completedTaskNames.join(", ")}`;
});
