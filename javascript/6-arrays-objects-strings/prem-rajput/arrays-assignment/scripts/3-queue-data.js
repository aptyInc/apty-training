function Queue() {
    this.queue = [];
    this.enqueue = function (element) {
        this.queue.unshift(element);
    };

    this.dequeue = function () {
        if (this.queue.length === 0) {
            return "Queue is empty.";
        }
        return this.queue.pop();
    };

    this.isEmpty = function () {
        return this.queue.length === 0;
    };

    this.peek = function () {
        if (this.queue.length === 0) {
            return "Queue is empty.";
        }
        return this.queue[this.queue.length - 1];
    };
}

const myQueue = new Queue();

function updateQueueView() {
    document.getElementById("queueView").textContent = `[ ${myQueue.queue.join(", ")} ]`;
}

function addElement() {
    const element = document.getElementById("elementInput").value;
    if (element === "") {
        document.getElementById("result").textContent = "Please enter an element.";
        return;
    }
    myQueue.enqueue(element);
    updateQueueView();
    document.getElementById("result").textContent = `"${element}" has been added to the queue.`;
    document.getElementById("elementInput").value = "";
}

function removeElement() {
    const result = myQueue.dequeue();
    updateQueueView();
    document.getElementById("result").textContent = result;
}

function getNextElement() {
    const result = myQueue.peek();
    document.getElementById("result").textContent = `Next element: ${result}`;
}

function checkIfEmpty() {
    const result = myQueue.isEmpty()
        ? "The queue is empty."
        : "The queue is not empty.";
    document.getElementById("result").textContent = result;
}
