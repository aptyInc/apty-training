document.getElementById('countBtn').addEventListener('click', function() {
    const divCount = document.getElementsByTagName('div').length;
    const pCount = document.getElementsByTagName('p').length;
    const spanCount = document.getElementsByTagName('span').length;
    const iframeCount = document.getElementsByTagName('iframe').length;

    // Update the displayed counts
    document.getElementById('countList').innerHTML = `
        <li>Divs: ${divCount}</li>
        <li>Paragraphs: ${pCount}</li>
        <li>Spans: ${spanCount}</li>
        <li>Iframes: ${iframeCount}</li>
    `;
});