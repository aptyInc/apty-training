const output = document.getElementById("output");

window.onresize = () => {
    output.innerText = `Dimensions:\n 
    Window Inner Width: ${window.innerWidth}\t
    Window Inner Height: ${window.innerHeight}\n
    Window Outer Width: ${window.outerWidth}\t
    Window Outer Height: ${window.outerHeight}\n
    Screen Width: ${screen.width}\t
    Screen Height: ${screen.height}\n
    Window Screen Available Width: ${screen.availWidth}\t
    Window Screen Available Height: ${screen.availHeight}\n
    Window Screen Color Depth: ${screen.colorDepth}`;
}
