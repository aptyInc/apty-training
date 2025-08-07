function escapeSequences() {
  const input = document.getElementById("word").value;
  const ans = document.getElementById("result");

  let output = "";

  output = input.replace(/\\n/g, "\\\\n").replace(/\\t/g, "\\\\t");
  // for (let i = 0; i < input.length; i++) {
  //   const ch = input[i];
  //   if (ch === "\n") {
  //     output += "\\\\n";
  //   } else if (ch === "\t") {
  //     output += "\\\\t";
  //   } else {
  //     output += ch;
  //   }
  // }

  ans.innerText = output;
}
