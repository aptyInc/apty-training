let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.onclick = () => {
  if (input.value % 400 == 0 && input.value % 100 != 0) {
    result.innerText = "Leap year";
  } else if (input.value % 4 == 0) {
    result.innerText = "Leap year";
  } else {
    result.innerText = "Not a Leap year";
  }
};
