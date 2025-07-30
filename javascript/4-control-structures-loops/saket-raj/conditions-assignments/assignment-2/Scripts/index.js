function checkLeapYear() {
  let num1 = document.getElementById("year").value;
  let val1 = Number(num1);
  let ans = document.getElementById("result");

  if ((val1 % 4 === 0 && val1 % 100 !== 0) || val1 % 400 === 0) {
    ans.innerText = `Leap Year`;
  } else {
    ans.innerText = `Not a Leap Year`;
  }
}
