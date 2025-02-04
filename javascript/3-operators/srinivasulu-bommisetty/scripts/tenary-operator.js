let form = document.getElementById("form");
let result = document.getElementById("result");
form.onsubmit = (e) => {
  e.preventDefault();
  let age = e.target[2].value;
  result.innerHTML =
    age > 18
      ? `<p style="color: green"> Hello ${
          e.target[0].value + " " + e.target[1].value
        } Welcome to Apty</p>`
      : `<p style="color: red"> Hello ${
          e.target[0].value + " " + e.target[1].value
        } comeback after ${18 - age} Years </p>`;
};
