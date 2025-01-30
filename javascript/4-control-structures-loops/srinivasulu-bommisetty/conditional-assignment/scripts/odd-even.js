let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.onclick = () => {
  let ans = input.value % 2 == 0 ? "even" : "odd";
  result.innerText = `${input.value} is ${ans}`;
};
