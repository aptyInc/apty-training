let queue = [];

function enqueue() {
  const element = document.getElementById("element").value.trim();
  if (element) {
    queue.unshift(element);
    document.getElementById("elementInput").value = "";
    updateQueueDisplay();
  } else {
    alert("Please enter a valid element.");
  }
}

function dequeue() {
  if (queue.length > 0) {
    queue.shift();
    updateQueueDisplay();
  } else {
    alert("Queue is empty!");
  }
}

function checktheNextElement() {
  const nextElement = queue[queue.length - 1];
  document.getElementById("nextoutput").textContent = nextElement
    ? `Next Element: ${nextElement}`
    : "Queue is empty!";
}

function isQueueEmpty() {
  alert(queue.length === 0 ? "Queue is empty!" : "Queue is not empty.");
}

function updateQueueDisplay() {
  document.getElementById("queueoutput").textContent = `[${queue.join(", ")}]`;
}
