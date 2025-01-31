class Queue {
    constructor() {
      this.queue = [];
    }

    unshift(element) {
      this.queue.unshift(element);
    }

    shift() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }

    isEmpty() {
      return this.queue.length === 0;
    }

    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue[0];
    }

    size() {
      return this.queue.length;
    }
  }

  const myQueue = new Queue();

  function addToQueue() {
    const element = document.getElementById('addElement').value;
    if (element) {
      myQueue.unshift(element);
      updateQueueStatus();
      document.getElementById('addElement').value = '';  
    } else {
      document.getElementById('message').innerText = 'Please enter a valid element!';
    }
  }

  function removeFromQueue() {
    const removedElement = myQueue.shift();
    if (removedElement === null) {
      document.getElementById('message').innerText = 'Queue is empty!';
    } else {
      document.getElementById('message').innerText = `Removed: ${removedElement}`;
      updateQueueStatus();
    }
  }

  function checkNextElement() {
    const nextElement = myQueue.peek();
    if (nextElement === null) {
      document.getElementById('message').innerText = 'Queue is empty!';
    } else {
      document.getElementById('message').innerText = `Next element: ${nextElement}`;
    }
  }

  function checkIfQueueIsEmpty() {
    const isEmpty = myQueue.isEmpty();
    if (isEmpty) {
      document.getElementById('message').innerText = 'Queue is empty!';
    } else {
      document.getElementById('message').innerText = 'Queue is not empty!';
    }
  }

  function updateQueueStatus() {
    document.getElementById('queueContent').innerText = `Queue: [${myQueue.queue.join(', ')}]`;
  }