function findoddoreven() {
  let number = parseFloat(document.getElementById("number").value);
  let result = number % 2 === 0 ? "even" : "odd";
  document.getElementById(
    "result"
  ).innerText = `Result: ${number} is ${result}`;
}
