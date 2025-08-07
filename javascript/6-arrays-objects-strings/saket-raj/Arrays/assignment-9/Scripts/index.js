function checkScores() {
  const input = document.getElementById("scores").value;
  const result = document.getElementById("result");

  try {
    const students = JSON.parse(input);
    if (!Array.isArray(students)) throw new Error();

    const allPassed = students.every((s) => s.score > 35);
    const anyFailed = students.some((s) => s.score < 35);

    if (allPassed) {
      result.innerText = "All Students Passed";
    } else if (anyFailed) {
      result.innerText = "Some Students Failed";
    } else {
      result.innerText = "Invalid Data";
    }
  } catch {
    result.innerText = "Invalid input. Please follow the correct format.";
  }
}
