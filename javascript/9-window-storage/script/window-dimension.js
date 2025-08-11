
const dimensionEle = document.getElementById('dimensions');

function screenUpdateProperties() {
    const dimensions = document.createElement('pre');
    dimensions.innerHTML = `
        window Height : ${window.innerHeight},
        window Width : ${window.innerWidth},
        Screen Height : ${window.screen.width},
        Screen Width : ${window.screen.height},
        Device Pixel Ratio : ${window.devicePixelRatio},
    `
    dimensionEle.appendChild(dimensions)
}

window.onresize = screenUpdateProperties

screenUpdateProperties()