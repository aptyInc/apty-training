

function getRandomColor() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.ceil(Math.random() * letters.length)];
    }

    return color;
}

const iframeDocument = document.querySelector('iframe').contentDocument

document.getElementById('changecolor').addEventListener('click', () => {
    const childrens = iframeDocument.getElementById('iddata').children;
    Array.from(childrens).forEach(node => {
        if (node.tagName === 'P')
            node.style.color = getRandomColor();
    })
})


document.getElementById('change-bgcolor').addEventListener('click', () => {
    const classCollection = iframeDocument.getElementsByClassName('bgcolor');
    Array.from(classCollection).forEach(eachNode => {
        eachNode.classList.toggle('active')
    })
})


document.getElementById('change-content').addEventListener('click', evt => {
    const tagCollection = iframeDocument.getElementsByTagName('span')

    Array.from(tagCollection).forEach(span => {
        span.innerHTML = `<p>Changed context</p>`;
    })
})

document.getElementById('disable-input').addEventListener('click', () => {

    const nameCollection = iframeDocument.getElementsByName('username')

    Array.from(nameCollection).forEach(eachNode => {
        eachNode.disabled = !eachNode.disabled
    })
})

document.getElementById('add-custom-attribute').addEventListener('click', evt => {

    const paraEle = iframeDocument.querySelector('[data-name = para]')
    paraEle.dataset["save"] = 'save-attribute';
})