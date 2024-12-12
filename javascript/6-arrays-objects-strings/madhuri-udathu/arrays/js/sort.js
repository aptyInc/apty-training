function customSortByScore(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].score < arr[j + 1].score) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}//Instead of this we use inbuilt sort arr.sort((a, b) => b[property] - a[property]);

function sortStudents() {
    const input = document.getElementById('studentInput').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "";

    try {
        const students = JSON.parse(input);
        const sortedStudents = customSortByScore(students);

        sortedStudents.forEach(student => {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${student.name}: ${student.score}`;
            outputDiv.appendChild(paragraph);
        });
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
}