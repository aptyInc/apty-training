function modifyColors() {
    let input = document.getElementById("colorsInput").value;
    let colors = input.split(",").map((color) => color.trim());
    let blueIndex = colors.indexOf("Blue");
    if (blueIndex !== -1)
        colors[blueIndex] = "Purple";
    colors.push("Orange");
    let greenIndex = colors.indexOf("Green");
    if (greenIndex !== -1)
        colors.splice(greenIndex, 1);
    document.getElementById("modifiedColors").innerText = colors.join(", ");
}
