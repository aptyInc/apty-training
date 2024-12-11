function extractNames() {
    const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
    const firstThree = names.slice(0, 3); 
    const lastTwo = names.slice(-2); 
    document.getElementById('firstThree').textContent = `First Three Names: ${firstThree.join(", ")}`;
    document.getElementById('lastTwo').textContent = `Last Two Names: ${lastTwo.join(", ")}`;
}

extractNames();