
function padString() {

    const inputString = document.getElementById('inputString').value;

    if (inputString.trim() === "") {
        document.getElementById('output').textContent = "Please enter a valid string.";
        return;
    }

    const paddedString = inputString.padStart(10, '0');


    document.getElementById('output').textContent = `Padded string: ${paddedString}`;
}
