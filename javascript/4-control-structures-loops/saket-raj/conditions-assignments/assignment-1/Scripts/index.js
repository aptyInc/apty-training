function gradePoint() {
  let num1 = document.getElementById("marks").value;
  let val1 = Number(num1);
  let ans = document.getElementById("grade");

  if (val1 >= 90) {
    ans.innerText = `Grade : "A"`;
  } else if (val1 >= 75 && val1 <= 89) {
    ans.innerText = `Grade : "B"`;
  } else if (val1 >= 50 && val1 <= 74) {
    ans.innerText = `Grade : "C"`;
  } else {
    ans.innerText = `Grade : "F"`;
  }
}
