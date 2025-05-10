
document.getElementById('level1').addEventListener('click', () => {
    alert('Level 1 (Capture Phase)');
}, true);

document.getElementById('level2').addEventListener('click', () => {
    alert('Level 2 (Bubble Phase)');
});

document.getElementById('level3').addEventListener('click', evt => {
    alert('Level 3 (Target Phase)');
    evt.stopPropagation()
});