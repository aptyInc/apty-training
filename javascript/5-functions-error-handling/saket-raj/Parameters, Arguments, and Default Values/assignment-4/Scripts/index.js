function convertStr(callback, s = "saket raj") {
  //-> default text
  let newStr = s.toUpperCase();
  console.log(newStr);
  return callback(newStr);
}

function print(s) {
  return `Result: ${s}`;
}

function convertToUpperCase() {
  const output = document.getElementById("output");
  const str = document.getElementById("string").value;

  const s = str || undefined;
  const res = convertStr(print, s);
  output.innerText = res;
}
