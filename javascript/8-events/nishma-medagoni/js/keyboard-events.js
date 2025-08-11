const keydownDiv = document.getElementById('keydownDiv')
const keyupDiv = document.getElementById('keyupDiv')

function formatKeyEvent(event) {
    let keyInfo = `${event.key} (Key: ${event.key}, Code: ${event.code})`
    if (event.ctrlKey) keyInfo = "Ctrl + " + keyInfo
    if (event.shiftKey) keyInfo = "Shift + " + keyInfo
    if (event.altKey) keyInfo = "Alt + " + keyInfo
    return keyInfo
}

window.addEventListener('keydown', (event) => {
    const keyInfo = formatKeyEvent(event)
    const newEvent = document.createElement('p')
    newEvent.textContent = `Keydown: ${keyInfo}`
    keydownDiv.appendChild(newEvent)
    keydownDiv.scrollTop = keydownDiv.scrollHeight 
})

window.addEventListener('keyup', (event) => {
    const keyInfo = formatKeyEvent(event)
    const newEvent = document.createElement('p')
    newEvent.textContent = `Keyup: ${keyInfo}`
    keyupDiv.appendChild(newEvent)
    keyupDiv.scrollTop = keyupDiv.scrollHeight
})



