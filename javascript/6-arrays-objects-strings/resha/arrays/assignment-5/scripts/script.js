const output = document.getElementById("output");
const show = document.getElementById("show");

function extractNames() {
    const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
    const firstThree = names.slice(0, 3);     
    const lastTwo = names.slice(-2);         
    output.innerText = `First 3: ${firstThree}\nLast 2: ${lastTwo}`;
}

show.addEventListener("click", extractNames);