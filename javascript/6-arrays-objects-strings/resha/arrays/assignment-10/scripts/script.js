const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    try {
        const students = JSON.parse(input);

        students.sort((a, b) => b.score - a.score);

        output.textContent = JSON.stringify(students);
    } catch (error) {
        output.textContent = `Error: ${error}Please enter valid JSON data.`;
    }
});
