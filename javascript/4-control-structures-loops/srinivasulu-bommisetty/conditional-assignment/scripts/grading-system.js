let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
// 90+ => Grade A, 75-89 => Grade B, 50-74 => Grade C, Below 50 => Grade F.

btn.onclick = () => {
  if (input.value >= 90 && input.value <= 100) {
    result.innerText = "Grade A";
  } else if (input.value >= 75 && input.value <= 89) {
    result.innerText = "Grade B";
  } else if (input.value >= 50 && input.value <= 74) {
    result.innerText = "Grade C";
  } else if (input.value >= 0 && input.value <= 50) {
    result.innerText = "Grade D";
  } else {
    result.innerText = "Enter input between 0-100";
  }
};
