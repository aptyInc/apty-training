function area(length = 5, width = 3) {
  //default parameter hai ye!
  return length * width;
}

function calculateArea() {
  const val1 = document.getElementById("length").value;
  const val2 = document.getElementById("width").value;

  const l = Number(val1);
  const b = Number(val2);
  const res = area(val1 === "" ? undefined : l, val2 === "" ? undefined : b);
  document.getElementById("output").innerText = `Area of rectangle = ${res}`;
}
