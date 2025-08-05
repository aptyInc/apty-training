function combineArrays() {
    const array1Input = document.getElementById("array1").value
    const array2Input = document.getElementById("array2").value

    const array1 = array1Input.split(',').map(item => item.trim())
    const array2 = array2Input.split(',').map(item => item.trim())

    const combinedArray = [...new Set([...array1, ...array2])]


    document.getElementById("result").innerText = `Combined Array: ${combinedArray}`
}