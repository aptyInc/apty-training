function getFirstAndLast() {
  const input = document.getElementById("inputString").value;
  const result =
    input.length > 0 ? `${input[0]} ${input[input.length - 1]}` : null;
  document.getElementById("result").innerText = result;
}
