let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");

// Add an event listener to the button with an arrow function
incrementButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
