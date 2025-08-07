function compareLoops() {
  const input = document.getElementById("array").value;
  const report = document.getElementById("report");

  if (!input.trim()) {
    report.innerText = "Please enter a valid comma-separated array.";
    return;
  }

  const arr = input.split(",");

  const t1 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
  }
  const t2 = performance.now();

  const t3 = performance.now();
  for (const item of arr) {
    let temp = item;
  }
  const t4 = performance.now();

  const t5 = performance.now();
  arr.forEach((item) => {
    let temp = item;
  });
  const t6 = performance.now();

  let output = `
Execution Time (ms):<br>
For loop: ${(t2 - t1).toFixed(4)} ms<br>
For...of loop: ${(t4 - t3).toFixed(4)} ms<br>
forEach loop: ${(t6 - t5).toFixed(4)} ms<br><br>

Report:<br>
- for: Fastest and most flexible. Good for high-performance and index-based tasks.<br>
- for...of: Cleaner syntax, better readability, great for arrays if index isn't needed.<br>
- forEach: Most readable but slower. Doesn't support break/continue or async/await properly.
`;

  report.innerHTML = output;
}
