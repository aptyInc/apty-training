let result = document.getElementById("result");
function get_avg() {
  let value = document.getElementById("value").value;
  let arr = value.split(",");
  let sum = 0;
  for (i of arr) {
    sum += Number(i);
  }

  result.innerHTML = `Sum : ${sum} <br> Average : ${Number(sum) / arr.length}`;
}
