const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];

function FirstThree() {
  const firstThree = names.slice(0, 3); 
  document.getElementById('firstThree').innerText = JSON.stringify(firstThree);
}

function LastTwo() {
  const lastTwo = names.slice(-2); 
  document.getElementById('lastTwo').innerText = JSON.stringify(lastTwo);
}