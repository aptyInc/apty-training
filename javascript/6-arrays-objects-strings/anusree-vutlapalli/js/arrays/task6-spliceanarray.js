function modifyColors() {
    const input = document.getElementById("inputColors").value;
    if (input.trim() === "") {
        document.getElementById("result").textContent = "Please enter valid colors!";
        return;
    }

    let colors = input.split(",").map(color => color.trim());

    const blueIndex = colors.indexOf("Blue");
    if (blueIndex !== -1) {
        colors[blueIndex] = "Purple";
    }

    const yellowIndex = colors.indexOf("Yellow");
    if (yellowIndex !== -1) {
        colors.splice(yellowIndex + 1, 0, "Orange");
    }

    const greenIndex = colors.indexOf("Green");
    if (greenIndex !== -1) {
        colors.splice(greenIndex, 1);
    }

    document.getElementById("result").textContent = `Modified Colors Array: ${colors.join(", ")}`;
}