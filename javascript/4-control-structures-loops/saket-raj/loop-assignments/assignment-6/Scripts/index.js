function printPrimeNumbers() {
  const start = Number(document.getElementById("first").value);
  const end = Number(document.getElementById("second").value);
  const ans = document.getElementById("output");

  ans.innerHTML = "";

  for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i <= 1) {
      //if i is less than and equals to 1 -> skip these
      continue;
    }

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      ans.innerHTML += `${i} <br>`;
    }
  }
}
