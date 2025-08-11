


const shadowHost = document.getElementById('shadow-host');
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

const template = document.getElementById('shadow-template')


const templateContent = template.content.cloneNode(true)


shadowRoot.appendChild(templateContent)




function getRandomColor() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.ceil(Math.random() * letters.length)];
    }

    return color;
}


document.getElementById('changecolor').addEventListener('click', () => {
    const childrens = shadowRoot.getElementById('iddata').children;
    Array.from(childrens).forEach(node => {
        if (node.tagName === 'P')
            node.style.color = getRandomColor();
    })
})


document.getElementById('change-bgcolor').addEventListener('click', () => {
    const classCollection = shadowRoot.querySelectorAll('.bgcolor');
    Array.from(classCollection).forEach(eachNode => {
        eachNode.classList.toggle('active')
    })
})


document.getElementById('change-content').addEventListener('click', evt => {
    const tagCollection = shadowRoot.querySelectorAll('span')

    Array.from(tagCollection).forEach(span => {
        span.innerHTML = `<p>Changed context</p>`;
    })
})

document.getElementById('disable-input').addEventListener('click', () => {

    const nameCollection = shadowRoot.querySelectorAll('[name]')

    Array.from(nameCollection).forEach(eachNode => {
        eachNode.disabled = !eachNode.disabled
    })
})

document.getElementById('add-custom-attribute').addEventListener('click', evt => {

    const paraEle = shadowRoot.querySelector('[data-name = para]')
    paraEle.dataset["save"] = 'save-attribute';
    alert(`custome attribute added i.e ${paraEle.dataset["save"]}`)
})