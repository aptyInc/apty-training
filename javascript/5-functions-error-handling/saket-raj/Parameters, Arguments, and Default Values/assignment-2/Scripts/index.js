const sumOfNumbers = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

function printSum() {
  const arrInput = document.getElementById("array").value;
  const result = document.getElementById("sum");

  const a = arrInput.split(",");

  for (let i = 0; i < a.length; i++) {
    a[i] = Number(a[i]); //str -> number
  }

  const total = sumOfNumbers(...a);
  result.innerText = `Sum is ${total}`;
}
