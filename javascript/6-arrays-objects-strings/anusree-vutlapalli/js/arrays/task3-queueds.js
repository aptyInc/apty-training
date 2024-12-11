class Queue {
    constructor() {
        this.queue = []; 
    }

    shiftAdd(element) {
        this.queue.unshift(element); 
    }

    unshiftRemove() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue.shift(); 
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    topElement() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue[0]; 
    }

    getQueueContents() {
        return this.queue.length === 0 ? "Queue is empty!" : this.queue.join(", ");
    }
}

const myQueue = new Queue();

document.getElementById('shiftAddBtn').addEventListener('click', function () {
    const input = document.getElementById('queueInput').value;
    if (input.trim() === "") {
        document.getElementById('result').textContent = "Please enter a valid element!";
        return;
    }
    myQueue.shiftAdd(input); 
    document.getElementById('result').textContent = `Shift added ${input} to the queue.`;
    updateQueueContents(); 
});

document.getElementById('unshiftRemoveBtn').addEventListener('click', function () {
    const removed = myQueue.unshiftRemove(); 
    document.getElementById('result').textContent = `Unshift removed element: ${removed}`;
    updateQueueContents(); 
});

document.getElementById('topElementBtn').addEventListener('click', function () {
    const frontElement = myQueue.topElement(); 
    document.getElementById('result').textContent = `Top element: ${frontElement}`;
});

document.getElementById('checkEmptyBtn').addEventListener('click', function () {
    const isEmpty = myQueue.isEmpty(); 
    document.getElementById('result').textContent = isEmpty ? "The queue is empty." : "The queue is not empty.";
});

function updateQueueContents() {
    document.getElementById('queueContents').textContent = `Queue Contents: [${myQueue.getQueueContents()}]`;
}