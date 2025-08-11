const parentDiv = document.getElementById('parentDiv');
const childDiv = document.getElementById('childDiv');

parentDiv.addEventListener('click', () => {
    alert('Parent Div Clicked');
    console.log('parent');
});

childDiv.addEventListener('click', (event) => {
    alert('Child Div Clicked');
    event.stopPropagation(); // Stops the event from propagating to the parent alert
    console.log('child');
});