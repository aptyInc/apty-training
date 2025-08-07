function sortAlphabetically() {
  const input = document.getElementById("word").value;
  const ans = document.getElementById("result");

  if (input === "") {
    ans.innerText = "Please enter a valid string.";
    return;
  }

  const sorted = input.split("").sort().join("");
  ans.innerText = sorted;
}
