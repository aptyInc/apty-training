let form = document.getElementById("form");

let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let var1 = e.target[0].value;
  let var2 = e.target[1].value;

  let var3 = e.target[2].value;

  result.innerText = `concatining of three strings :  ${first_outer(
    var1,
    var2,
    var3
  )}`;
});

function first_outer(str1, str2, str3) {
  function second_outer() {
    function inner() {
      return str1 + str2 + str3;
    }

    return inner();
  }
  return second_outer();
}
