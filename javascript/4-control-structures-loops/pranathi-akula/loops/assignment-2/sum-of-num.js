function Calculatesum() {
  let number = parseFloat(document.getElementById("number").value);
  let sumOfNumbers = 0;
  let add = 1;

  while (add <= number) {
    sumOfNumbers += add;
    add++;
  }

  document.getElementById(
    "result"
  ).innerText = `Result: The sum of all numbers from 1 to ${number} is ${sumOfNumbers}.`;
}
