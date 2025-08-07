function swapNumbers() {
  const a = document.getElementById("first").value;
  const b = document.getElementById("second").value;
  let ans = document.getElementById("result");

  if (a === "" || b === "") {
    ans.innerText = "Error: Please enter both the inputs.";
    return;
  }

  let x = Number(a);
  let y = Number(b);

  //   x = x + y;
  //   y = x - y;
  //   x = x - y;

  [x, y] = [y, x];

  ans.innerText = `After swapping first number is ${x} and second is ${y}`;
}
