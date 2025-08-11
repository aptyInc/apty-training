document.getElementById('parent').addEventListener('click', function() {
    alert('Parent Div Clicked');
});

document.getElementById('child').addEventListener('click', function(event) {
    alert('Child Div Clicked');
    event.stopPropagation();  
});
