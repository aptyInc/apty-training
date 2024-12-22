const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');

// Capture phase listener for level1
level1.addEventListener('click', (event) => {
    alert('Level 1 (Capture Phase)');
}, true);

// Bubble phase listener for level2
level2.addEventListener('click', (event) => {
    alert('Level 2 (Bubble Phase)');
}, false);

// Target phase listener for level3
level3.addEventListener('click', (event) => {
    alert('Level 3 (Target Phase)');
});