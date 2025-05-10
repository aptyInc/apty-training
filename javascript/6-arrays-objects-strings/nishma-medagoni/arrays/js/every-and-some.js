function checkStudentScores() {
    const input = document.getElementById("studentInput").value;
    let students;

    try {
        students = JSON.parse(input);
    } catch (e) {
        document.getElementById("result").innerText = "Invalid JSON format. Please provide a valid array of student objects.";
        return;
    }

    if (!Array.isArray(students)) {
        document.getElementById("result").innerText = "Please provide an array of student objects.";
        return;
    }

    if (students.every(student => student.score > 35)) {
        document.getElementById("result").innerText = "All Students Passed";
    }
    
    else if (students.some(student => student.score < 35)) {
        document.getElementById("result").innerText = "Some Students Failed";
    }
}