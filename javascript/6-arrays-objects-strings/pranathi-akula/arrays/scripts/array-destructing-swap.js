function swaptwoVariables() {
  let a = parseInt(document.getElementById("valuea").value);
  let b = parseInt(document.getElementById("valueb").value);
  [a, b] = [b, a];
  document.getElementById("result").textContent = `a = ${a}, b = ${b}`;
}
