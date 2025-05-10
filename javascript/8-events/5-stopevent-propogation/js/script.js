document.getElementById('parent').addEventListener('click', function () {
    alert('Parent Div Clicked');
    console.log('Event triggered in Parent Div');
});
document.getElementById('child').addEventListener('click', function (event) {
    alert('Child Div Clicked');
    console.log('Event triggered in Child Div');
    event.stopPropagation(); // Stops the event from bubbling up to the parent
});