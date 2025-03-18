
function convertStrToArr(input) {
    let arr = input.trim().split(" ")
    return arr
}
function handleRemoveDuplicates() {
    let input = document.getElementById("str").value
    let newArray = convertStrToArr(input)
    let set = []
    for (const element of newArray) {
        if (!set.includes(element)) {
            set.push(element)
        }
    }
    document.getElementById("res").innerText=`After Removing Duplicates:${set}`
}