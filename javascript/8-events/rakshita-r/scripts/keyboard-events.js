
const keydownList = document.getElementById("keydownList");
const keyupList = document.getElementById("keyupList");


function addEventToList(list, eventType, event) {
    const listItem = document.createElement("li");

    const key = event.key === " " ? "Space" : event.key; 
    const ctrl = event.ctrlKey ? "Ctrl+" : "";
    const shift = event.shiftKey ? "Shift+" : "";
    const alt = event.altKey ? "Alt+" : "";

    listItem.textContent = `${eventType}: ${ctrl}${shift}${alt}${key}`;
    list.appendChild(listItem);

    list.scrollTop = list.scrollHeight;
}


window.addEventListener("keydown", (event) => {
    addEventToList(keydownList, "Keydown", event);
});


window.addEventListener("keyup", (event) => {
    addEventToList(keyupList, "Keyup", event);
});
