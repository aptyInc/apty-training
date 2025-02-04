const queue = [];

function doqueue() {
  const input = document.getElementById("queueInput").value;
  if (input) {
    queue.unshift(input);
    document.getElementById("queueInput").value = "";
    updateQueueDisplay();
    document.getElementById("message").innerText = `Added to queue: ${input}`;
  } else {
    document.getElementById("message").innerText =
      "Please enter a value to add to the queue.";
  }
}

function dequeue() {
  if (queue.length > 0) {
    const removed = queue.pop();
    updateQueueDisplay();
    document.getElementById(
      "message"
    ).innerText = `Removed from queue: ${removed}`;
  } else {
    document.getElementById("message").innerText =
      "The queue is empty. Nothing to remove.";
  }
}

function checkIfEmpty() {
  const isEmpty = queue.length === 0;
  document.getElementById("message").innerText = isEmpty
    ? "The queue is empty."
    : "The queue is not empty.";
}

function peek() {
  if (queue.length > 0) {
    const next = queue[queue.length - 1];
    document.getElementById(
      "message"
    ).innerText = `Next element in queue: ${next}`;
  } else {
    document.getElementById("message").innerText =
      "The queue is empty. No next element.";
  }
}

function updateQueueDisplay() {
  document.getElementById("queueDisplay").innerText = JSON.stringify(queue);
}
