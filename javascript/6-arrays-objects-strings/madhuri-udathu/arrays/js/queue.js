const queue = [];
function enqueue() {
    const input = document.getElementById('queueInput').value;
    if (input) {
        queue.unshift(input);
        document.getElementById('output').textContent = `Enqueued: ${input}\nQueue: [${queue.join(', ')}]`;
        document.getElementById('queueInput').value = '';
    } else {
        document.getElementById('output').textContent = 'Please enter a value to enqueue.';
    }
}

function dequeue() {
    if (queue.length > 0) {
        const dequeued = queue.pop();
        document.getElementById('output').textContent = `Dequeued: ${dequeued}\nQueue: [${queue.join(', ')}]`;
    } else {
        document.getElementById('output').textContent = 'Queue is empty. Nothing to dequeue.';
    }
}

function peekQueue() {
    if (queue.length > 0) {
        document.getElementById('output').textContent = `Peek Element: ${queue[queue.length - 1]}`;
    } else {
        document.getElementById('output').textContent = 'Queue is empty.';
    }
}

function checkQueueEmpty() {
    document.getElementById('output').textContent = queue.length === 0 ? 'The queue is empty.' : `Queue is not empty. Queue: [${queue.join(', ')}]`;
}