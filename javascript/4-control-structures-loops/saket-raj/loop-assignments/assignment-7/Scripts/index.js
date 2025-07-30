function pyramid() {
  const num = Number(document.getElementById("rows").value);
  const ans = document.getElementById("output");
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    //for rows
    for (let j = 1; j <= num - i; j++) {
      //for space
      pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  ans.innerText = pattern;
}
