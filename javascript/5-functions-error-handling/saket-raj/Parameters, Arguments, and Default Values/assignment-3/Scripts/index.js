function perimeter(length = 5, width = 3) {
  function area() {
    return length * width;
  }
  const a = area();
  const p = 2 * (length + width);
  return { a, p }; //-> as an object
}

function areaAndPerimeter() {
  const val1 = document.getElementById("length").value;
  const val2 = document.getElementById("width").value;

  const l = val1 === "" ? undefined : Number(val1);
  const b = val2 === "" ? undefined : Number(val2);

  const { a, p } = perimeter(l, b); //-> destructuring concept

  document.getElementById(
    "output"
  ).innerText = `Area of rectangle = ${a} and Perimeter = ${p}`;
}
