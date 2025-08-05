let queue = []

// Function to add an element to the queue
function enqueue(element) {
    queue.unshift(element)
}

// Function to remove the front element from the queue
function dequeue() {
    if (queue.length === 0) {
        return "Queue is empty!"
    }
    return queue.pop()
}

// Function to get the next element in the queue without removing it
function next() {
    if (queue.length === 0) {
        return "Queue is empty!"
    }
    return queue[queue.length - 1]
}

// Function to check if the queue is empty
function isEmptyQueue() {
    return queue.length === 0
}

// Function to get the queue contents as a string
function getQueueContents() {
    return `[ ${queue.join(", ")} ]`
}

// Update queue contents on the webpage
function updateQueueContents() {
    document.getElementById("queueContents").innerText = getQueueContents()
}

// Enqueue operation
function enqueueToQueue() {
    const input = document.getElementById("queueInput").value
    if (input === "") {
        document.getElementById("result").innerText = "Please enter a value to enqueue."
        return
    }
    enqueue(input)
    updateQueueContents()
    document.getElementById("result").innerText = `Enqueued: ${input}`
    document.getElementById("queueInput").value = ""
}

// Dequeue operation
function dequeueFromQueue() {
    const dequeued = dequeue()
    updateQueueContents()
    document.getElementById("result").innerText = `Dequeued: ${dequeued}`
}

// Next operation
function nextInQueue() {
    const nextElement = next()
    document.getElementById("result").innerText = `Next Element: ${nextElement}`
}

// Check if queue is empty
function isQueueEmpty() {
    const isEmpty = isEmptyQueue()
    document.getElementById("result").innerText = isEmpty ? "Queue is empty!" : "Queue is not empty."
}
