function sortString(input) {
  return input.split("").sort().join("");
}

document.getElementById("sortString").addEventListener("click", () => {
  const input = document.getElementById("inputString").value;

  const result = sortString(input);

  document.getElementById("result").textContent = result;
});
