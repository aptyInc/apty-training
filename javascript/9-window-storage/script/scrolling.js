
const form = document.getElementById('form');

form.addEventListener('click', evt => {
    evt.preventDefault();
    const xValue = parseInt(document.getElementById('x').value, 10) || 0;
    const yValue = parseInt(document.getElementById('y').value, 10) || 0;
    window.scrollTo(xValue, yValue);
})

document.getElementById('scrollup').addEventListener('click', () => {
    window.scrollBy(0, -10)
})

document.getElementById('scrolldown').addEventListener('click', () => {
    window.scrollBy(0, 10)
})