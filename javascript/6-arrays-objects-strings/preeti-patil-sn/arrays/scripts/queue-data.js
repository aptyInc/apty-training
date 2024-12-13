class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.unshift(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    } else {
      return "Queue is empty!";
    }
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.queue[0];
    } else {
      return "Queue is empty!";
    }
  }

  display() {
    return this.queue.join(", ");
  }
}

const myQueue = new Queue();

function enqueueElement() {
  const elementInput = document.getElementById("elementInput");
  const element = elementInput.value;
  if (element) {
    myQueue.enqueue(element);
    elementInput.value = "";
    updateDisplay();
  }
}

function dequeueElement() {
  const dequeuedElement = myQueue.dequeue();
  document.getElementById(
    "resultDisplay"
  ).innerText = `Dequeued Element: ${dequeuedElement}`;
  updateDisplay();
}

function checkEmpty() {
  const emptyStatus = myQueue.isEmpty()
    ? "Yes, the queue is empty."
    : "No, the queue is not empty.";
  document.getElementById("resultDisplay").innerText = emptyStatus;
}

function peekElement() {
  const frontElement = myQueue.peek();
  document.getElementById(
    "resultDisplay"
  ).innerText = `Front Element: ${frontElement}`;
}

function updateDisplay() {
  document.getElementById(
    "queueDisplay"
  ).innerText = `Queue: [${myQueue.display()}]`;
}
