
const keydownEle = document.getElementById('keydown-container');
const keyupEle = document.getElementById('keyup-container');

const printKeyPress = (ele, evt) => {
    const keyInfo = `${evt.type}: ${evt.key} (KeyCode: ${evt.code}) ${evt.ctrlKey ? '+Ctrl' : ''} ${evt.altKey ? '+Alt' : ''} ${evt.shiftKey ? '+Shift' : ''}`;
    const pre = document.createElement('pre');
    pre.innerText = keyInfo;
    ele.appendChild(pre);
}

window.addEventListener('keydown', evt => {

    printKeyPress(keydownEle,evt)
});

window.addEventListener('keyup', evt => {

    printKeyPress(keyupEle,evt)
});