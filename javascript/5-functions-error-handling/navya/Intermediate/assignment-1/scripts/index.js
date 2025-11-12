const outputList = document.getElementById("outputList");


function repeatAction(actionFn, n) {
    for (let i = 0; i < n; i++) {
        actionFn(i);
    }
}

function generateList() {
    const count = Number(document.getElementById("itemCount").value);
    const text = document.getElementById("itemText").value.trim();

    outputList.innerHTML = "";

    if (isNaN(count) || count <= 0) {
        outputList.innerHTML = "<li>Please enter a valid number</li>";
        return;
    }

    if (!text) {
        outputList.innerHTML = "<li>Please enter item text</li>";
        return;
    }


    const addItem = (index) => {
        const li = document.createElement("li");
        li.textContent = `${text} ${index + 1}`;
        outputList.appendChild(li);
    };


    repeatAction(addItem, count);
}
