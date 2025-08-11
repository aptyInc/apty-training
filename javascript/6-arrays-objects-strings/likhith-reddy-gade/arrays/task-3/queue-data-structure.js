const queue = [];

function enqueue() {
  const input = document.getElementById("queue-input").value;
  if (input) {
    queue.unshift(input);
    updateQueueResult(`Enqueued "${input}" to queue.`);
  } else {
    updateQueueResult("Please enter a valid element.");
  }
}

function dequeue() {
  if (queue.length > 0) {
    const dequeued = queue.pop();
    updateQueueResult(`Dequeued "${dequeued}" from queue.`);
  } else {
    updateQueueResult("Queue is empty. Nothing to dequeue.");
  }
}

function checkQueue() {
  if (queue.length > 0) {
    updateQueueResult(`Next element is "${queue[queue.length - 1]}".`);
  } else {
    updateQueueResult("Queue is empty.");
  }
}

function isQueueEmpty() {
  updateQueueResult(
    queue.length === 0 ? "Queue is empty." : "Queue is not empty."
  );
}

function updateQueueResult(message) {
  document.getElementById(
    "queue-result"
  ).innerText = `${message}\nCurrent Queue: [${queue.reverse().join(", ")}]`;
  queue.reverse(); // Reverse back to maintain queue order
}
