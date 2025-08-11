let index = 0; 
function toggleVisibility() {
    const divs = document.querySelectorAll('.toggle-div');

    divs.forEach(div => div.style.display = 'none');

    divs[index].style.display = 'block';

    index = (index + 1) % divs.length;
}

document.addEventListener('DOMContentLoaded', () => {
    toggleVisibility();

    const button = document.getElementById('toggleButton');
    button.addEventListener('click', toggleVisibility);
});
