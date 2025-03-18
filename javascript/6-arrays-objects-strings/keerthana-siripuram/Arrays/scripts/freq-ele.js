function findFrequentEle() {
    let str = document.getElementById("numeric-str").value
    let arr = str.trim().split(" ")
    const freqMap = arr.reduce((obj, ele) => {
        if (obj.hasOwnProperty(ele)) {
            obj[ele] += 1;
        }
        else {
            obj[ele] = 1
        }
        return obj
    }, {})
    let maxCount = 0
    let maxEle = null
    for (const [key, count] of Object.entries(freqMap)) {
        if (count > maxCount) {
            maxEle = key
            maxCount = count
        }
    }
    document.getElementById("res").innerText = `Frequent ele is ${maxEle}`
}