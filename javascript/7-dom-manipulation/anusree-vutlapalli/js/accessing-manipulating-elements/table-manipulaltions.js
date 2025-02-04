function changeTextColor() {
        const ids = ['para1', 'para2'];
        ids.forEach(id => {
                const element = document.getElementById(id);
                element.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color
        });
}

function toggleClassName() {
        const elements = document.getElementsByClassName('sameClass');
        for (let element of elements) {
                element.classList.toggle('highlight');
        }
}

function changeSpanText() {
        const spans = document.getElementsByTagName('span');
        for (let span of spans) {
                span.innerHTML = "Updated Text";
        }
}

function toggleDisabled() {
        const inputs = document.getElementsByName('input1');
        const inputs2 = document.getElementsByName('input2');
        const inputs3 = document.getElementsByName('input3');

        for (let input of inputs) {
                input.disabled = !input.disabled;
        }
        for (let input of inputs2) {
                input.disabled = !input.disabled;
        }
        for (let input of inputs3) {
                input.disabled = !input.disabled;
        }
}
function addCustomAttribute() {
        const element = document.querySelector('[data-custom="value1"]');
        element.setAttribute('data-new', 'newValue');
        alert('New custom attribute added!');
}
