let counter = 0;

const incrementCounter = () => {
  counter++;
  document.getElementById("counter").textContent = counter;
};

document
  .getElementById("incrementBtn")
  .addEventListener("click", incrementCounter);
