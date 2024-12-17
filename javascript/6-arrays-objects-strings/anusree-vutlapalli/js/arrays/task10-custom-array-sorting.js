function customSortStudents() {
    const studentsInput = document.getElementById("studentsInput").value;
    try {
        const studentsArray = JSON.parse(studentsInput);
        for (let i = 0; i < studentsArray.length - 1; i++) {
            for (let j = 0; j < studentsArray.length - 1 - i; j++) {
                if (studentsArray[j].score < studentsArray[j + 1].score) {
                    let temp = studentsArray[j];
                    studentsArray[j] = studentsArray[j + 1];
                    studentsArray[j + 1] = temp;
                }
            }
        }
        let resultText = "Sorted Students by Scores:\n";
        studentsArray.forEach(student => {
            resultText += `${student.name}: ${student.score}\n`;
        });

        document.getElementById("result").innerHTML = resultText;
    } catch (error) {
        document.getElementById("result").innerHTML = "Invalid input. Please provide a valid JSON array.";
    }
}
