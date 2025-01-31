function generatePyramid() {
    let n = Number(document.getElementById('rows').value);
    let pyramid = '';

    
    for (let i = 1; i <= n; i++) {
        
        let spaces = ' '.repeat(n - i);

        
        let stars = '*'.repeat(2 * i - 1);

        
        pyramid += spaces + stars + '\n';
    }

    
    document.getElementById('pyramid').innerText = pyramid;
}