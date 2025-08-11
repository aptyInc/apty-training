function Queue() {

    this.items = [];
    
    this.enqueue = function(element) {
        this.items.unshift(element);

    };
    this.dequeue = function() {
        if (this.items.length === 0) {

            return "queue is empty";
        }
        return this.items.pop();
    };

    this.isEmpty = function() {
        return this.items.length === 0;

    };

    this.next = function() {
        if (this.items.length === 0) {
            return "Qqeue is empty";
        }
        return this.items[this.items.length - 1];
    };

}

var queue = new Queue();

function enQueue() {

    var element = prompt("enter an element to enqueue:");
    queue.enqueue(element);
    document.getElementById("result").innerText = "enqueued: " + element;

}

function deQueue() {
    var dequeued = queue.dequeue();

    document.getElementById("result").innerText = "dequeued: " + dequeued;

}

function queueEmpty() {

    var empty = queue.isEmpty();

    document.getElementById("result").innerText = "is queue empty? " + empty;
}

function nextElement() {

    var next = queue.next();

    document.getElementById("result").innerText = "next element: " + next;
}
