let result=[]
function flattenArray() {
    let nestedArray = document.getElementById("array").value
    const parsedString = JSON.parse(nestedArray)
    customFlattenArray(parsedString)
    document.getElementById("res").innerText = `Flattened Array:${result}`
}
function customFlattenArray(parsedString) {
    for (let ele of parsedString) {
        if (Array.isArray(ele)) {
            customFlattenArray(ele)
        }
        else {
            result.push(ele)
        }
    }
}

