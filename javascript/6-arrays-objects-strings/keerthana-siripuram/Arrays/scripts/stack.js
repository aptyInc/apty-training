let stack = []
function push() {
    let ele = document.getElementById("ele").value
    stack.push(ele)
    document.getElementById("res").innerText = `Pushed ele:${ele}`
    displayStack()
}
function pop() {
    let len = stack.length
    if (len > 0) {
        const poppedEle = stack[len - 1]
        stack.pop()
        document.getElementById("res").innerText = `Popped ele:${poppedEle}`
        displayStack()
    }
    else {
        document.getElementById("res").innerText = "Stack is Empty , cannot pop"
        displayStack()
    }
}
function peek() {
    let len = stack.length
    if (len > 0) {
        const topEle = stack[len - 1]
        document.getElementById("res").innerText = `Top ele:${topEle}`
    }
    else {
        document.getElementById("res").innerText = "Stack is Empty "
    }
}
function size() {
    const len = stack.length
    document.getElementById("res").innerText = `Total ele's:${len}`
}
function isEmpty() {
    const len = stack.length
    len > 0 ? document.getElementById("res").innerText = "Stack is Not Empty"
        : document.getElementById("res").innerText = "Stack is Empty"
}
function displayStack() {
    document.getElementById("display-stack").innerHTML += `<br>Stack is:`
    for (let element of stack) {
        document.getElementById("display-stack").innerText += `${element} ,`
    }
}