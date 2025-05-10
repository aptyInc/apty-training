function extractNames(names) {
    if (names.length === 0) {
        const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
    }
    // Extract the first three names using slice
    const firstThree = names.slice(0, 3);

    // Extract the last two names using negative indices
    const lastTwo = names.slice(-2);

    return { firstThree, lastTwo };
}

function processNames() {
    const input = document.getElementById('nameInput').value.trim();
    const namesArray = input.split(',').map(name => name.trim());
    const result = extractNames(namesArray);
    document.getElementById('firstThree').textContent = result.firstThree.join(', ');
    document.getElementById('lastTwo').textContent = result.lastTwo.join(', ');
}