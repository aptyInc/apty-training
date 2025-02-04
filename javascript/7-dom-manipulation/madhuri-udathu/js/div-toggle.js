const divs = document.querySelectorAll('.box');
let currentIndex = 0;

document.getElementById('toggle-button').addEventListener('click', () => {

    divs.forEach(div => div.classList.add('hidden'));

    divs[currentIndex].classList.toggle('hidden');
    currentIndex = (currentIndex + 1) % divs.length;//loops until reach length then again start
});