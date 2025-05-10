let result = document.getElementById("result");
let form = document.getElementById("form");
form.onsubmit = (e) => {
  e.preventDefault();
  let arr = [];
  for (i = 0; i < 3; i++) {
    arr.push(e.target[i].value);
  }
  result.innerText = `${Math.max(...arr)} is the largest number`;
};
