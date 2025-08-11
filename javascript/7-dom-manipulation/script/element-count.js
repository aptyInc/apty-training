
document.getElementById('count-elements').addEventListener('click', () => {

    const tagCollection = document.getElementsByTagName('*');

    const elementCount = {};

    Array.from(tagCollection).forEach(eachNode => {

        if (elementCount[eachNode.tagName])
            elementCount[eachNode.tagName]++;
        else elementCount[eachNode.tagName] = 1;
    })

    console.log(elementCount)
    let result = document.createElement('pre');
    result.textContent = 'Element count are : '
    for (let key in elementCount) {
        result.innerText += `${key} : ${elementCount[key]} ,`
    }

    document.body.appendChild(result);
})