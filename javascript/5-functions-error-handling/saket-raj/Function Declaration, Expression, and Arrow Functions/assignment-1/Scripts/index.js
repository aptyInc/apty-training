function printFibonacci() {
  let val = document.getElementById("num").value;
  let n = Number(val);
  let ans = "";

  function fib(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fib(n - 1) + fib(n - 2);
  }

  for (let i = 0; i < n; i++) {
    ans += fib(i) + "\t";
  }
  document.getElementById("output").innerText = `Fibonacci series : ${ans}`;
}
