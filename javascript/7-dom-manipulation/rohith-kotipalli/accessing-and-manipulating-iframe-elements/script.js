function randomColorGenerator() {
    let string = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0;i<6;i++){
         color += string[Math.floor(Math.random()*16)]
    }
    return color
 }

function changeTextColorById() {
    const iframe = document.getElementById('contentFrame');
    const iframeDoc = iframe.contentDocument 
    const paragraph1 = iframeDoc.getElementById('p1');
    const paragraph2 = iframeDoc.getElementById('p2')
    paragraph1.style.color = randomColorGenerator();
    paragraph2.style.color = randomColorGenerator();
}

function toggleBackgroundByClass() {
    const iframe = document.getElementById('contentFrame');
    const iframeDoc = iframe.contentDocument 
    const elements = iframeDoc.getElementsByClassName('same-class');
    for (let element of elements) {
        element.classList.toggle('toggle-bg');
    }
}

function changeInnerHTMLByTag() {
    const iframe = document.getElementById('contentFrame');
    const iframeDoc = iframe.contentDocument 
    const spans = iframeDoc.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = `Updated Span ${i + 1}`;
    }
}

function toggleDisabledByName() {
    const iframe = document.getElementById('contentFrame');
    const iframeDoc = iframe.contentDocument 
    const input1 = iframeDoc.getElementsByName('input1')[0];
    const input2 = iframeDoc.getElementsByName("input2")[0]
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
    const iframe = document.getElementById('contentFrame');
    const iframeDoc = iframe.contentDocument 
    const element1 = iframeDoc.querySelector('[data-attr="attr1"]');
    element1.setAttribute('data-attr-new1', 'newValue1');

    const element2 = iframeDoc.querySelector('[data-attr="attr2"]');
    element2.setAttribute('data-attr-new2', 'newValue2');
    alert('New custom attribute added!');
}