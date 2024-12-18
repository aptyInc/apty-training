document.getElementById('countButton').addEventListener('click', function() {
    const firstLevelParents = document.body.children;
    const result = [];

    for (let parent of firstLevelParents) {
        if (parent.id) {
            const nestedCount = parent.querySelectorAll('*').length;
            result.push({ parentId: parent.id, count: nestedCount });
        }
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Nested Elements Count</h2>';

    result.forEach(entry => {
        const line = document.createElement('p');
        line.textContent = `Parent ID: ${entry.parentId}, Nested Elements: ${entry.count}`;
        outputDiv.appendChild(line);
    });
});