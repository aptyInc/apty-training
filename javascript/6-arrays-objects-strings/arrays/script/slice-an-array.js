
document.getElementById('first-three-names').onclick = () => {

    const inputStr = document.getElementById('input').value;
    try {
        const arr = JSON.parse(inputStr);
        if (Array.isArray(arr)) {
            const fisrtThreeNames = arr.slice(0, 3)
            document.getElementById('result').innerText = `First three name are : ${JSON.stringify(fisrtThreeNames)}`
        } else {
            document.getElementById('result').innerText = `Error: input shoud be array format.`
        }
    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. Please enter a valid JSON array. Example: ["Alice", "Bob", "Charlie"]`;
    }
}

document.getElementById('last-two-names').onclick = () => {

    const inputStr = document.getElementById('input').value;

    try {

        const arr = JSON.parse(inputStr);

        if (Array.isArray(arr)) {
            const fisrtThreeNames = arr.slice(-2)
            document.getElementById('result').innerText = `First three name are : ${JSON.stringify(fisrtThreeNames)}`
        } else {
            document.getElementById('result').innerText = `Error: input shoud be array format. Example: ["Alice", "Bob", "Charlie"]`
        }
    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. Please enter a valid JSON array. Example: ["Alice", "Bob", "Charlie"]`;
    }
}