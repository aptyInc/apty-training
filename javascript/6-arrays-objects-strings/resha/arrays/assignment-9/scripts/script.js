const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    try {
        const students = JSON.parse(input);

        const allPassed = students.every(student => student.score > 35);
        const someFailed = students.some(student => student.score < 35);

        if (allPassed) {
            output.textContent = "All Students Passed";
        } else if (someFailed) {
            output.textContent = "Some Students Failed";
        } else {
            output.textContent = "Invalid Input";
        }
    } catch (error) {
        output.textContent = `Error: ${error}. Please enter valid JSON data.`;
    }
});
