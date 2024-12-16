function addStudent() {
  const inputContainer = document.getElementById("inputContainer");
  const newInputRow = document.createElement("div");
  newInputRow.innerHTML = `
      <input type="text" placeholder="Student Name" class="nameInput" />
      <input type="number" placeholder="Score" class="scoreInput" />
    `;
  inputContainer.appendChild(newInputRow);
}

function sortScores() {
  const nameInputs = document.querySelectorAll(".nameInput");
  const scoreInputs = document.querySelectorAll(".scoreInput");

  const scores = [];

  for (let i = 0; i < nameInputs.length; i++) {
    const name = nameInputs[i].value.trim();
    const score = parseInt(scoreInputs[i].value, 10);

    if (name && !isNaN(score)) {
      scores.push({ name, score });
    }
  }

  const sortedScores = scores.sort((a, b) => b.score - a.score);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p><strong>Sorted Scores by Score:</strong></p>";

  sortedScores.forEach((student) => {
    resultDiv.innerHTML += `<p>${student.name}: ${student.score}</p>`;
  });
}
