
function checkPerformance() {
    let arrSize = parseInt(document.getElementById("num").value)
    const arr = Array.from({ length: arrSize }, (_, i) => i)
    let timeEle = document.getElementById("time")
    console.time('For Loop')
    for (let i = 0; i < arrSize; i++) {
        arr[i] += 1
    }
    console.timeEnd('For Loop')
    timeEle.innerHTML += `<p>Time taken by For Loop is ${performance.now()}`

    console.time('For Of loop')
    for (const num of arr) {
        num + 1
    }
    console.timeEnd('For Of loop')
    timeEle.innerHTML += `<p>Time taken by For Of Loop is ${performance.now()}`
    
    console.time('ForEach loop')
    arr.forEach(num => {
        num + 1
    });
    console.timeEnd('ForEach loop')
    timeEle.innerHTML += `<p>Time taken by ForEach Loop is ${performance.now()}`

    document.getElementById("conclusion").innerHTML = `<p>Performance:For > For of >ForEach<p>`
    document.getElementById("conclusion").innerHTML += `<p>Use For:Require index based operation<p>`
    document.getElementById("conclusion").innerHTML += `<p>Use For Of:Simple iteration over iterable objects<p>`
    document.getElementById("conclusion").innerHTML += `<p>Use ForEach:Modifying the array is not required <br> uses Functional Style programming<p>`

}