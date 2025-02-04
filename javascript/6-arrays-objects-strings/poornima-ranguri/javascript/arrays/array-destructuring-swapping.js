let originalAray = [];

function onSwapping() {
  const userTextElement = document.getElementById("userText");
  const userObject = JSON.parse(userTextElement.value);
  originalAray.push(userObject);
  if (originalAray.length === 2) {
    [originalAray[0], originalAray[1]] = [originalAray[1], originalAray[0]];
  }
  console.log(originalAray);
  document.getElementById("result").textContent = JSON.stringify(originalAray);
}

//{"name":"PG", "score":80}
