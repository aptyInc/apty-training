function getUnicodeValues() {
  const input = document.getElementById("word").value;
  const ans = document.getElementById("result");

  if (input === "") {
    ans.innerText = "Please enter a valid string.";
    return;
  }

  const newArr = [];

  for (let i = 0; i < input.length; i++) {
    newArr.push(input.charCodeAt(i));
  }

  ans.innerText = `[${newArr.join(", ")}]`;
}
