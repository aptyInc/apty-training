let count = 0;

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerText = count;
});
