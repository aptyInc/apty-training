function combineArraysWithoutDuplicates() {
    let input1 = document.getElementById("arr1").value
    let input2 = document.getElementById("arr2").value
    let inputArr1=input1.trim().split(" ")
    let inputArr2=input2.trim().split(" ")
    let combinedArr=[...inputArr1,...inputArr2]
    let set=[]
    for (const element of combinedArr) {
        if(!set.includes(element))
    {
        set.push(element)
    }
    }
    document.getElementById("res").innerText=`Combined Arr after removing Duplicates:${set}`
}