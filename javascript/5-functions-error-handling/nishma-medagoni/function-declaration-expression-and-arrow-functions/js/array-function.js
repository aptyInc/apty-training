let count = 0

const update = () => {
    count++
    document.getElementById('counter').innerText = `Counter: ${count}`
}

document.getElementById('increment').addEventListener('click', update)