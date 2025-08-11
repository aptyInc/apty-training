let currentIndex = 0;

const divs = document.querySelectorAll('.toggleDiv');

document.getElementById('toggleButton').addEventListener('click', function () {

    divs.forEach(div => div.classList.add('hidden'));

    divs[currentIndex].classList.remove('hidden');

    currentIndex = (currentIndex + 1) % divs.length;
});