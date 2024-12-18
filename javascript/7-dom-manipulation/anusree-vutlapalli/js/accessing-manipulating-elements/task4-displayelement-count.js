function countElements() {
    const divCount = document.querySelectorAll('div').length;
    const pCount = document.querySelectorAll('p').length;
    const spanCount = document.querySelectorAll('span').length;
    const iframeCount = document.querySelectorAll('iframe').length;
    const h1count = document.querySelectorAll('h1').length;
    const results = document.getElementById('results');
    results.innerHTML = `
        <p>Div count: ${divCount}</p>
        <p>Paragraph count: ${pCount}</p>
        <p>Span count: ${spanCount}</p>
        <p>Iframe count: ${iframeCount}</p>
        <p>H1 count: ${h1count}</p>
    `;
}