const shadowHost = document.getElementById('shadowHost');
const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
const tempElement = document.getElementById("tempEle")
shadowRoot.appendChild(tempElement.content.cloneNode(true))

function randomColorGenerator() {
    let string = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0;i<6;i++){
         color += string[Math.floor(Math.random()*16)]
    }
    return color
 }

function changeTextColorById() {
    const paragraph1 = shadowRoot.getElementById('p1');
    const paragraph2 = shadowRoot.getElementById('p2')
    paragraph1.style.color = randomColorGenerator()
    paragraph2.style.color = randomColorGenerator()
}

function toggleBackgroundByClass() {
    const elements = shadowRoot.querySelectorAll('.same-class');
    for (let element of elements) {
        element.classList.toggle('toggle-bg');
    }
}

function changeInnerHTMLByTag() {
    const spans = shadowRoot.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = `Updated Span ${i + 1}`;
    }
}

function toggleDisabledByName() {
    const input1 = shadowRoot.querySelectorAll('[name]')[0];
    const input2 = shadowRoot.querySelectorAll('[name]')[1]
    if (input1.disabled){
        input2.disabled = "true"
        input1.removeAttribute("disabled")
    }
    else{
        input2.removeAttribute("disabled")
        input1.disabled = "true"
    }
}

function addCustomAttribute() {
    const element = shadowRoot.querySelector('[data-attr="attr1"]');
    element.setAttribute('data-attr-new1', 'newValue1');

    const element2 = shadowRoot.querySelector('[data-attr="attr2"]');
    element2.setAttribute('data-attr-new2', 'newValue2');
    alert('New custom attributes added!');
}