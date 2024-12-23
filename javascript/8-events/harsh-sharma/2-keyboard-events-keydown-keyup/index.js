const keydownDiv = document.getElementById('keydownDiv');
const keyupDiv = document.getElementById('keyupDiv');

function displayEvent(eventType, event, divElement) {
    const eventDetails = {
        key: event.key,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey,
    };

    let eventString = `${eventType}: ${eventDetails.key} `;

    if (eventDetails.ctrl) eventString += ' + Ctrl';
    if (eventDetails.shift) eventString += ' + Shift';
    if (eventDetails.alt) eventString += ' + Alt';
    if (eventDetails.meta) eventString += ' + Meta';

    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.textContent = eventString;

    divElement.appendChild(eventDiv);

    if (divElement.childElementCount > 5) {
        divElement.removeChild(divElement.firstChild);
    }
}

window.addEventListener('keydown', function(event) {
    displayEvent('Keydown', event, keydownDiv);
});

window.addEventListener('keyup', function(event) {
    displayEvent('Keyup', event, keyupDiv);
});
