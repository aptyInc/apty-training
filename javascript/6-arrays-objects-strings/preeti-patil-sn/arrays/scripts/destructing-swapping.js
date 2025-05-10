function swapValues() {
  let a = Number(document.getElementById("valueA").value);
  let b = Number(document.getElementById("valueB").value);

  // Swap using array destructuring
  [a, b] = [b, a];

  document.getElementById("resultA").textContent = a;
  document.getElementById("resultB").textContent = b;
}
