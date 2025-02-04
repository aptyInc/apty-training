function modifyColors() {
    let colors=document.getElementById("nameInput").value.trim();
    if(colors.length===0){
        colors = ["Red", "Blue", "Green", "Yellow"];
    }
    else {
        colors=JSON.parse(colors);
    }
    console.log("Before modifications:", colors);
    // Check and replace "Blue" with "Purple"
    if (colors.includes("Blue")) {
        const blue=colors.indexOf("Blue")
        colors.splice(blue,1,"Violet")
    }

    // Add "Orange" after "Yellow"
    if (colors.includes("Yellow")) {
        const yellowIndex = colors.indexOf("Yellow");
        colors.splice(yellowIndex + 1, 0, "Orange");
    }

    // Remove "Green"
    const greenIndex = colors.indexOf("Green");
    if (greenIndex !== -1) {
        colors.splice(greenIndex, 1);  // Removes "Green" without leaving an empty spot
    }

    document.getElementById("output").textContent=colors;
}


