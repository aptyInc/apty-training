function checkingtheScores() {
  const input = document.getElementById("scoresInput").value;

  const scores = input.split(";").map((student) => {
    const [name, score] = student.split(",").map((s) => s.trim());
    return { name: name, score: parseInt(score) };
  });

  const allarePassed = scores.every((student) => student.score > 35);
  const someareFailed = scores.some((student) => student.score < 35);

  let result = "";
  if (allarePassed) {
    result = "All Students Passed";
  } else if (someareFailed) {
    result = "Some Students Failed";
  } else {
    result = "No students passed the test.";
  }

  document.getElementById("result").textContent = result;
}
