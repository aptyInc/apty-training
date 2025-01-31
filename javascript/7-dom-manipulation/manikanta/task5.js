function countNestedElements() {
    const body = document.body;
    const directChildren = body.children; // Get direct children of <body>
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Nested Elements Count:</h3>'; // Clear previous results

    // Loop through each direct child and count its nested elements
    Array.from(directChildren).forEach(child => {
        const nestedElements = child.getElementsByTagName('*').length; // Count all nested elements
        const resultText = document.createElement('p');
        resultText.textContent = `${child.tagName}: ${nestedElements} nested elements`;
        resultDiv.appendChild(resultText);
    });

    // Show the result div
    resultDiv.style.display = 'block';
}

// Attach the countNestedElements function to the button click event
document.getElementById('count-button').addEventListener('click', countNestedElements);