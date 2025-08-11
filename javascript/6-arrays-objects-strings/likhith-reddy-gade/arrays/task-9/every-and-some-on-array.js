function checkStudentScores() {
  const userInput = prompt(
    "Enter student scores (format: name-score, name-score):"
  );
  const scores = userInput.split(",").map((s) => {
    const [name, score] = s.trim().split("-");
    return { name, score: parseInt(score, 10) };
  });

  const allPassed = scores.every((s) => s.score > 35);
  const someFailed = scores.some((s) => s.score < 35);

  let result = allPassed ? "All Students Passed" : "Not All Students Passed";
  result += someFailed ? "\nSome Students Failed" : "\nNo Students Failed";
  document.getElementById("every-some-result").innerText = result;
}
