function printFirstAndLastCharacter() {
  const input = document.getElementById("word").value;
  const ans = document.getElementById("result");

  if (input.length === 0) {
    ans.innerText = "null";
    return;
  }

  const first = input[0];
  const last = input[input.length - 1];

  ans.innerText = `${first} ${last}`;
}
