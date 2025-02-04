  // a. Change the text color of p elements with ids p1 and p2
  function changeTextColor() {
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let colors = ['yellow', 'red', 'green', 'blue', 'orange', 'black', 'white', 'violet', 'purple'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    p1.style.color = color;
    p2.style.color = color;
}

// b. Toggle background color for all p elements with the same class name
function toggleClassName() {
    let elements = document.getElementsByClassName('colorChange');
    let colors = ['yellow', 'red', 'green', 'blue', 'orange', 'black', 'white', 'violet', 'purple'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}

// c. Change innerHTML of all span elements
function changeInnerHTML() {
    let spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = 'Updated content of span ' + (i + 1);
    }
}


function toggleDisabled() {
    let inputs = document.getElementsByName('input1');
    let allInputs = document.getElementsByName('input2');
    let allInputs1 = document.getElementsByName('input3');
    let inputsDisabled = inputs.length > 0 ? inputs[0].disabled : false;
    let newDisabledValue = !inputsDisabled;
    for (let input of inputs) {
        input.disabled = newDisabledValue;
    }
    for (let input of allInputs) {
        input.disabled = newDisabledValue;
    }
    for (let input of allInputs1) {
        input.disabled = newDisabledValue;
    }
}


function addCustomAttribute() {
    let elements = document.querySelectorAll('[data-custom]');
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('data-new-attribute', 'newValue');
    }
}