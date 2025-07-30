let val = document.getElementById("num");
let res = document.getElementById("result");

function check() {
  let number = Number(val.value);
  if (number % 2 === 0) {
    res.innerText = `${number} is "even"`;
  } else {
    res.innerText = `${number} is "odd"`;
  }
}
