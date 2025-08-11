function changeById() {
    let ids = ["p1", "p2", "p3", "p4"];
    let random = Math.floor(Math.random() * ids.length);
    document.getElementById(ids[random]).style.color = 'blue';
}

function changeByClass() {
    let ele = document.getElementsByClassName('c1');
    for (let i of ele) {
        i.style.backgroundColor = 'yellow';
    }
}

function changeSpans() {
    let spans = document.getElementsByTagName("span");
    for (let ele of spans) {
        ele.innerHTML = "Changed";
    }
}

function toggleDisable() {
    let input1 = document.getElementsByName("firstInput");
    let input2 = document.getElementsByName("secondInput");

    let arr = [...input1, ...input2];
    for (let ele of arr) {
        ele.disabled = !ele.disabled;
    }
}

function addCustomAttr() {
    let ele = document.querySelector("[custom-attr='one']");
    ele.setAttribute("new-attr", "added");
    output.innerText = "New attribute added to first custom element";
}