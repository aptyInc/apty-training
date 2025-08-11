document.getElementById('level1').addEventListener('click', function() {
    alert('Captured at Level 1 (Capture Phase)');
}, true); 

document.getElementById('level2').addEventListener('click', function() {
    alert('Bubbled at Level 2 (Bubble Phase)');
});

document.getElementById('level3').addEventListener('click', function() {
    alert('Targeted at Level 3');
});
