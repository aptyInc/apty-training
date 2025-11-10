const gradeBox = document.getElementById("gradeOutput");

function findGrade() {
    const marks = Number(document.getElementById("marksInput").value);
    let grade;

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 75) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    gradeBox.textContent = `Your Grade: ${grade}`;
}
