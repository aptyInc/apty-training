function modifyColors(colors) {
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

    return colors;
}

const colors = ["Red", "Blue", "Green", "Yellow"];
const modifiedColors = modifyColors(colors);

document.getElementById("colors").innerText = `Modified Colors: ${modifiedColors.join(", ")}`;