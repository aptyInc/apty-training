function getUnicodeValues(str) {
  return Array.from(str).map((char) => char.charCodeAt(0));
}

document.getElementById("getUnicode").addEventListener("click", () => {
  const input = document.getElementById("inputString").value;

  const unicodeValues = getUnicodeValues(input);

  document.getElementById(
    "result"
  ).textContent = `Unicode values: ${unicodeValues.join(", ")}`;
});
