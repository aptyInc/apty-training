function calculateGrade() {
  const marks = parseInt(document.getElementById("marks").value);
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

  document.getElementById("result").textContent = `Grade: ${grade}`;
}
