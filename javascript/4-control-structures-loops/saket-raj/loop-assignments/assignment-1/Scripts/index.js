const val1 = document.getElementById("num");
let ans = document.getElementById("result");

function generateTable() {
  let number = Number(val1.value);
  if (number <= 0) {
    ans.innerText = "Invalid";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    ans.innerText += `${number} x ${i} = ${number * i} \n`;
  }
}
