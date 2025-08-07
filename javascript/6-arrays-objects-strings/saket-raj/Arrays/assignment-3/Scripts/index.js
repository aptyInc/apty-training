let queue = [];

function enqueue() {
  const input = document.getElementById("array");
  const values = input.value.split(",");

  for (let i = 0; i < values.length; i++) {
    const val = values[i].trim();
    if (val !== "") {
      queue.unshift(val); //adding at lhs
    }
  }

  input.value = "";
  document.getElementById("message").innerText = "Values added.";
  document.getElementById("queueDisplay").innerText = `queue: [${queue.join(
    ", "
  )}]`;
}

function dequeue() {
  if (queue.length === 0) {
    document.getElementById("message").innerText =
      "Queue is empty. Nothing to remove.";
    return;
  }

  let removed = queue[queue.length - 1];
  const newQueue = [];
  for (let i = 0; i < queue.length - 1; i++) {
    newQueue.push(queue[i]);
  }

  queue = newQueue;

  document.getElementById("message").innerText = `Removed: ${removed}`;
  document.getElementById("queueDisplay").innerText = `queue: [${queue.join(
    ", "
  )}]`;
}

function isEmpty() {
  if (queue.length === 0) {
    document.getElementById("message").innerText = "Yes, queue is empty.";
  } else {
    const front = queue[queue.length - 1]; //rhs element
    document.getElementById(
      "message"
    ).innerText = `No, queue is not empty. First element is: ${front}`;
  }
}
