const colorsArray = ["Red", "Blue", "Green", "Yellow"]


function replaceBlueWithPurple() {
    const index = colorsArray.indexOf("Blue")
    if (index !== -1) {
        colorsArray.splice(index, 1, "Purple")
    }
}


function addOrangeAfterYellow() {
    const index = colorsArray.indexOf("Yellow")
    if (index !== -1) {
        colorsArray.splice(index + 1, 0, "Orange")
    }
}


function removeGreen() {
    const index = colorsArray.indexOf("Green");
    if (index !== -1) {
        colorsArray.splice(index, 1);
    }
}


function modifyAndDisplayArray() {
    replaceBlueWithPurple();
    addOrangeAfterYellow();
    removeGreen();

    document.getElementById("result").innerText = `Modified Array: [${colorsArray.join(", ")}]`;
}
