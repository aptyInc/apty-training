function joinStrings() {
  const input = document.getElementById("array").value;
  const result = document.getElementById("result");

  const arr = input.split(",").map((s) => s.trim());

  let sentence = arr.join(" ");

  if (sentence.length > 0) {
    sentence = sentence[0].toUpperCase() + sentence.slice(1);
  }

  result.innerText = sentence;
}
