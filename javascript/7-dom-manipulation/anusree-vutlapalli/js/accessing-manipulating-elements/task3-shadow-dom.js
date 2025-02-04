
const shadowRoot = document.body.attachShadow({ mode: 'open' });

const tableHTML = document.querySelector('table').outerHTML;
const style = document.querySelector('style').outerHTML;
shadowRoot.innerHTML = style + tableHTML;

function changeTextColor() {
    const paras = shadowRoot.querySelectorAll('p');
    paras.forEach(p => {
        if (p.id === 'para1' || p.id === 'para2') {
            p.style.color = p.style.color === 'red' ? 'black' : 'red';
        }
    });
}

function toggleClassName() {
    const paras = shadowRoot.querySelectorAll('.sameClass');
    paras.forEach(p => {
        p.classList.toggle('highlight');
    });
}

function changeSpanText() {
    const spans = shadowRoot.querySelectorAll('span');
    spans.forEach(span => {
        span.textContent = 'Text Changed';
    });
}

function toggleDisabled() {
    const inputs = shadowRoot.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = !input.disabled;
    });
}

function addCustomAttribute() {
    const paras = shadowRoot.querySelectorAll('p');
    paras.forEach(p => {
        p.setAttribute('data-custom', 'new-value');
    });
}

shadowRoot.getElementById('btn1').addEventListener('click', changeTextColor);
shadowRoot.getElementById('btn2').addEventListener('click', toggleClassName);
shadowRoot.getElementById('btn3').addEventListener('click', changeSpanText);
shadowRoot.getElementById('btn4').addEventListener('click', toggleDisabled);
shadowRoot.getElementById('btn5').addEventListener('click', addCustomAttribute);
