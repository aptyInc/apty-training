let currentDiv = 1;

function toggleDivs() {
    
    let divToToggle = document.getElementById('div' + currentDiv);

    
    divToToggle.classList.toggle('hidden');

    
    currentDiv++;

    
    if (currentDiv > 3) {
        currentDiv = 1;
    }
}