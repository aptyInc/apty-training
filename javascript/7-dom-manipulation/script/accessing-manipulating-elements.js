
function getRandomColor() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.ceil(Math.random() * letters.length)];
    }

    return color;
}



document.getElementById('changecolor').addEventListener('click', () => {
    const childrens = document.getElementById('iddata').children;
    Array.from(childrens).forEach(node => {
        if (node.tagName === 'P')
            node.style.color = getRandomColor();
    })
})


document.getElementById('change-bgcolor').addEventListener('click', () => {
    const classCollection = document.getElementsByClassName('bgcolor');
    Array.from(classCollection).forEach(eachNode => {
        eachNode.classList.toggle('active')
    })
})


document.getElementById('change-content').addEventListener('click', evt => {
    const tagCollection = evt.target.parentNode.getElementsByTagName('span')

    Array.from(tagCollection).forEach(span => {
        span.innerHTML = `<p>Changed context</p>`;
    })
})

document.getElementById('disable-input').addEventListener('click', () => {

    const nameCollection = document.getElementsByName('username')

    Array.from(nameCollection).forEach(eachNode => {
        eachNode.disabled = !eachNode.disabled
    })
})

document.getElementById('add-custom-attribute').addEventListener('click', evt => {

    const paraEle = evt.target.parentNode.querySelector('[data-name]')
    paraEle.dataset["save"] = 'save-attribute';
})