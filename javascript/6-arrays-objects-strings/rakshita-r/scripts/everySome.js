
function addStudent() {
  const inputContainer = document.getElementById("inputContainer");
  const newInputRow = document.createElement("div");
  newInputRow.innerHTML = `
          <input type="text" placeholder="Student Name" class="nameInput" />
          <input type="number" placeholder="Score" class="scoreInput" />
        `;
  inputContainer.appendChild(newInputRow);
}


function evaluateScores() {
  
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

  
  const allPassed = scores.every((student) => student.score > 35);


  const someFailed = scores.some((student) => student.score <= 35);


  const sortedScores = scores.sort((a, b) => a.name.localeCompare(b.name));

  
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  if (allPassed) {
    resultDiv.innerHTML += `<p><strong>All Students Passed</strong></p>`;
  } else if (someFailed) {
    resultDiv.innerHTML += `<p><strong>Some Students Failed</strong></p>`;
  }
  resultDiv.innerHTML += `<p><strong>Sorted Scores:</strong></p>`;
  sortedScores.forEach((student) => {
    resultDiv.innerHTML += `<p>${student.name}: ${student.score}</p>`;
  });
}
