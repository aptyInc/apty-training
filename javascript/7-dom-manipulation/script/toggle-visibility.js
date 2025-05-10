
let currentBox = 1;

document.getElementById('toogledivs').addEventListener('click', () => {

    document.getElementById("box" + currentBox).style.display = 'none';

    currentBox = (currentBox % 3) + 1;

    document.getElementById('box' + currentBox).style.display = 'block'
})

