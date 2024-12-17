document.getElementById('countBtn').addEventListener('click', function() {
    const parent1 = document.getElementById('parent1');
    const parent2 = document.getElementById('parent2');
    
    function countNestedElements(parent) {
        let count = parent.children.length;
        Array.from(parent.children).forEach(child => {
            count += child.querySelectorAll('*').length; // Count nested elements inside each child
        });
        return count;
    }

    // Get nested element counts for each parent
    const parent1NestedCount = countNestedElements(parent1);
    const parent2NestedCount = countNestedElements(parent2);

    // Update the displayed counts
    document.getElementById('countList').innerHTML = `
        <li>Parent 1: ${parent1NestedCount} nested elements</li>
        <li>Parent 2: ${parent2NestedCount} nested elements</li>
    `;
});