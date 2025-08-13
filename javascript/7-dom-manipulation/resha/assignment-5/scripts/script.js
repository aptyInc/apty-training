const parentDiv = document.getElementById('parentDiv');
const childDiv = document.getElementById('childDiv');

parentDiv.addEventListener('click', function() {
    alert('Parent Div Clicked');
});

childDiv.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('Child Div Clicked');
});
