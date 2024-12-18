document.getElementById('countButton').addEventListener('click', function() {
    const elements = document.body.querySelectorAll('*');
    const elementCounts = {};

    elements.forEach(element => {
        const tagName = element.tagName.toLowerCase();
        elementCounts[tagName] = (elementCounts[tagName] || 0) + 1;
    });

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Element Counts</h2>';

    for (const [tag, count] of Object.entries(elementCounts)) {
        const line = document.createElement('p');
        line.textContent = `${tag}: ${count}`;
        outputDiv.appendChild(line);
    }
});