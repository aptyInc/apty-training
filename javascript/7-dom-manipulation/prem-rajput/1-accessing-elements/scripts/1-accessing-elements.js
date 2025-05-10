function changeColorById() {
    let para = document.getElementById("para1");
    para.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let para2 = document.getElementById("para2");
    para2.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function toggleClass() {
    let elements = document.getElementsByClassName("group");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("highlight");
    }
}

function changeInnerHTML() {
    let spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = "Updated Text " + (i + 1);
    }
}

function toggleDisabled() {
    let input1 = document.getElementsByName("input1");
    for (let i = 0; i < input1.length; i++) {
        input1[i].disabled = !input1[i].disabled;
    }
}

function addCustomAttribute() {
    let customElements = document.querySelectorAll("[data-custom]");
    customElements.forEach((element, index) => {
        let newValue = "newValue" + (index + 1);
        element.setAttribute("data-new", newValue);
        element.innerHTML += ` (data-new: ${newValue})`;
    });
}


