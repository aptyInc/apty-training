function countElements() {
    // Count elements by type
    const divCount = document.getElementsByTagName('div').length;
    const pCount = document.getElementsByTagName('p').length;
    const spanCount = document.getElementsByTagName('span').length;
    const iframeCount = document.getElementsByTagName('iframe').length;

    // Display the result
    document.getElementById('div-count').textContent = `Divs: ${divCount}`;
    document.getElementById('p-count').textContent = `Paragraphs: ${pCount}`;
    document.getElementById('span-count').textContent = `Spans: ${spanCount}`;
    document.getElementById('iframe-count').textContent = `Iframes: ${iframeCount}`;

    // Show the result div
    document.getElementById('result').style.display = 'block';
}

// Attach the countElements function to the button click event
document.getElementById('count-button').addEventListener('click', countElements);