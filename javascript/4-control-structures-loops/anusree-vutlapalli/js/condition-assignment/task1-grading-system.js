function GradeMarks() {
    const marks = document.getElementById("marks").value

    if (isNaN(marks) || marks > 100 || marks < 0) {
        document.getElementById("result").innerText = "please enter a number between 0-100";
        return;
    }
    let grade;
    if (marks >= 90) {
        grade = "A";
    }
    else if (marks >= 75 && marks <= 89) {
        grade = "B";
    }
    else if (marks >= 50 && marks <= 74) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerText = "Your grade is: " + grade;


}