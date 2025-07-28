function generatePyramid() {
    let num = parseInt(document.getElementById("num").value)
    const pyramid=document.createElement('pre')
    for (let row = 1; row <num; row++) {
        let spaces=' '.repeat(num-row)
        let stars='*'.repeat(2*row-1)
        pyramid.textContent+=spaces+stars+'\n'
    }
    document.body.appendChild(pyramid)
}