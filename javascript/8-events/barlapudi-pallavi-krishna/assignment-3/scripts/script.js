const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');

level1.addEventListener('click', function() {
  alert('Level 1 (Capture Phase)');
}, true);

level2.addEventListener('click', function() {
  alert('Level 2 (Bubble Phase)');
}, false);

level3.addEventListener('click', function() {
  alert('Level 3 (Target Phase)');
}, false);
