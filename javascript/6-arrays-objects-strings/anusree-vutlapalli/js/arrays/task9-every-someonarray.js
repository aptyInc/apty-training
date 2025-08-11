function checkStudentScores() {
    const studentData = document.getElementById("studentData").value;
    try {
        const students = JSON.parse(studentData);
        const allPassed = students.every(student => student.score > 35);
        const someFailed = students.some(student => student.score < 35);
        if (allPassed) {
            document.getElementById("outputResult").innerHTML = "All Students Passed";
        } else if (someFailed) {
            document.getElementById("outputResult").innerHTML = "Some Students Failed";
        }
    } catch (error) {
        document.getElementById("outputResult").innerHTML = "Invalid input. Please provide a valid JSON array.";
    }
}
