function combineArrays() {
  const array1Input = document.getElementById("array1").value;
  const array2Input = document.getElementById("array2").value;

  const array1 = array1Input.split(",").map(Number);
  const array2 = array2Input.split(",").map(Number);

  const combined = [...new Set([...array1, ...array2])];

  document.getElementById(
    "rest-spread-result"
  ).innerText = `Combined Array: ${combined}`;
}
