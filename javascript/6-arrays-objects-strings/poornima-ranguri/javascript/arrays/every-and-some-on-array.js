let studentsArray = [];

function onCheckingScore() {
  const userTextElement = document.getElementById("userText");

  const userObject = JSON.parse(userTextElement.value);
  studentsArray.push(userObject);

  let result = "";

  const allPassed = studentsArray.every(
    (eachStudent) => parseInt(eachStudent.score) > 35
  );
  const someFailed = studentsArray.some(
    (eachStudent) => parseInt(eachStudent.score) < 35
  );

  if (allPassed) {
    result = "All Students Passed";
    userTextElement.value = "";
  } else if (someFailed) {
    userTextElement.value = "";
    result = "Some Students Failed";
  } else {
    result = "No Students Found";
    userTextElement.value = "";
  }

  document.getElementById("result").textContent = result;
}

//{"name":"PG", "score":80}
