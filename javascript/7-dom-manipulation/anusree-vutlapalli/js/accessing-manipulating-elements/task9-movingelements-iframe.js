document.addEventListener('DOMContentLoaded', () => {

    function moveUp(button) {
        let row = button.parentNode.parentNode;
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            row.parentNode.insertBefore(row, prevRow);
        }
    }

    function moveDown(button) {
        let row = button.parentNode.parentNode;
        let nextRow = row.nextElementSibling;
        if (nextRow) {
            row.parentNode.insertBefore(nextRow, row);
        }
    }

    function moveTop(button) {
        let row = button.parentNode.parentNode;
        let tableBody = row.parentNode;
        tableBody.insertBefore(row, tableBody.firstElementChild);
    }

    function moveBottom(button) {
        let row = button.parentNode.parentNode;
        let tableBody = row.parentNode;
        tableBody.appendChild(row);
    }

    // Attach event listeners to buttons in the table
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.innerText === 'Up') {
            button.onclick = () => moveUp(button);
        } else if (button.innerText === 'Down') {
            button.onclick = () => moveDown(button);
        } else if (button.innerText === 'Top') {
            button.onclick = () => moveTop(button);
        } else if (button.innerText === 'Bottom') {
            button.onclick = () => moveBottom(button);
        }
    });
});
