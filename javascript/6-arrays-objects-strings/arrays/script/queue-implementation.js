
const queue = {
    queueArray: [],
  
    // Adds an element to the front of the queue
    enqueue(element) {
      this.queueArray.unshift(element);
    },
  
    // Removes an element from the rear of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty, nothing to dequeue.";
      }
      return this.queueArray.pop();
    },
  
    // Checks if the queue is empty
    isEmpty() {
      return this.queueArray.length === 0;
    },
  
    // Retrieves the next element to be removed (rear of the queue)
    next() {
      if (this.isEmpty()) {
        return "Queue is empty.";
      }
      return this.queueArray[this.queueArray.length - 1];
    },
  
    // Displays the current state of the queue
    getQueue() {
      return this.queueArray;
    },
  };
  
  function displayQueue() {
    const currentQueueField = document.getElementById("currentQueue");
    currentQueueField.textContent = `Queue: [${queue.getQueue().join(", ")}]`;
  }
  
  function enqueueToQueue() {
    const inputField = document.getElementById("queueInput");
    const resultField = document.getElementById("result");
  
    const value = inputField.value.trim();
    if (value === "") {
      resultField.textContent = "Error: Input cannot be empty.";
      return;
    }
  
    queue.enqueue(value);
    resultField.textContent = `Enqueued "${value}" to the queue.`;
    displayQueue();
    inputField.value = "";
  }
  
  function dequeueFromQueue() {
    const resultField = document.getElementById("result");
  
    const dequeuedValue = queue.dequeue();
    resultField.textContent = `Dequeued Value: ${dequeuedValue}`;
    displayQueue();
  }
  
  function checkIfEmptyQueue() {
    const resultField = document.getElementById("result");
  
    const isEmpty = queue.isEmpty();
    resultField.textContent = isEmpty ? "The queue is empty." : "The queue is not empty.";
  }
  
  function getNextElement() {
    const resultField = document.getElementById("result");
  
    const nextValue = queue.next();
    resultField.textContent = `Next Element: ${nextValue}`;
  }
  