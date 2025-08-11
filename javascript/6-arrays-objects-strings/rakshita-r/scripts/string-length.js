document
  .getElementById("wordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputString = document.getElementById("inputString").value;

    function getWordLengths(str) {
      return str
        .split(" ")
        .map((word) => `${word}(${word.length})`)
        .join(" ");
    }

    const result = getWordLengths(inputString);

    document.getElementById("result").textContent = `Word Lengths: ${result}`;
  });
