function convertToUnicode() {
  const inputString = document.getElementById("inputString").value;

  if (inputString.trim() === "") {
    document.getElementById("output").textContent =
      "Please enter a valid string.";
    return;
  }

  const unicodeValues = Array.from(inputString).map((char) =>
    char.charCodeAt(0)
  );

  document.getElementById(
    "output"
  ).textContent = `Unicode values: [${unicodeValues.join(", ")}]`;
}
