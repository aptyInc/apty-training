function findLargestNumber() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);

  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  document.getElementById(
    "result"
  ).innerText = `Result:The largest number is ${largest}`;
}
