let result = document.getElementById("result");
function get_pyramid() {
  result.innerHTML = "";
  let rows = document.getElementById("rows").value;
  for (i = 1; i <= Number(rows); i++) {
    str = "";
    for (j = 1; j <= i; j++) {
      str += "* ";
    }
    result.innerHTML = `${result.innerHTML} <br> ${str}`;
  }
}
