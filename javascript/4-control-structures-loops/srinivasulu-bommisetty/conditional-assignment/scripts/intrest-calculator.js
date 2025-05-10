let result = document.getElementById("result");
let form = document.getElementById("form");
form.onsubmit = (e) => {
  e.preventDefault();

  result.innerText = ` Simple interst : ${
    (e.target[0].value * e.target[1].value * e.target[2].value) / 100
  }`;
};
