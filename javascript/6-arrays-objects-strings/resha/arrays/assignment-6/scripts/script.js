const output = document.getElementById("output");
const show = document.getElementById("show");

function extractColors() {
    let colors = ["Red", "Blue", "Green", "Yellow"];
    const replaceBlue = colors.splice(1, 1, "Purple");
    const addOrange = colors.splice(4, 0, "Orange");
    const removeGreen = colors.splice(2, 1);
    
    output.innerText = `${colors}`;
}

show.addEventListener("click", extractColors);