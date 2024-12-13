function checkScores() {
  const input = document.getElementById("studentScores").value;
  let students;

  // Try to parse the input string to an array of objects
  try {
    students = JSON.parse(input);
    if (!Array.isArray(students)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("allPassed").textContent =
      "Invalid input. Please enter a valid array of student scores.";
    document.getElementById("someFailed").textContent = "";
    return;
  }

  // Check if all students scored above 35
  const allPassed = students.every((student) => student.score > 35);

  // Check if some students scored less than 35
  const someFailed = students.some((student) => student.score < 35);

  document.getElementById("allPassed").textContent = allPassed
    ? "All Students Passed"
    : "Not all students passed.";

  document.getElementById("someFailed").textContent = someFailed
    ? "Some Students Failed"
    : "No student failed.";
}
