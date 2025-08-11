function padWithZeros(str) {
  return str.padStart(10, "0");
}

document.getElementById("padString").addEventListener("click", () => {
  const input = document.getElementById("inputString").value;

  const paddedString = padWithZeros(input);

  document.getElementById(
    "result"
  ).textContent = `Padded string: ${paddedString}`;
});
