function sumAndAverage() {
  const arrInput = document.getElementById("array").value;
  let ans = document.getElementById("sum-average");
  const newArr = arrInput.split(",");
  let sum = 0;
  let avg = 0;
  for (let val of newArr) {
    sum += Number(val);
  }
  avg = sum / newArr.length;
  ans.innerText = `Sum is ${sum} and average is ${avg}`;
}
