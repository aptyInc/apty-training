let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var a = e.target[0].value;
  var b = e.target[1].value;
  var [b, a] = [a, b];
  e.target[0].value = a;
  e.target[1].value = b;
});
