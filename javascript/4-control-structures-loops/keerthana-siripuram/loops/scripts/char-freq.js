function countFreqOfChars() {
    let str = document.getElementById("str").value
    let mp = {}
    for (let index in str) {
        let ch = str[index]
        if (ch in Object.keys(mp)) {
            mp[ch] += 1
        }
        else {
            mp[ch] = 1
        }
    }
    for (let key in mp) {
        document.getElementById("res").innerHTML += `Character:: ${key}:${mp[key]}<br>`
    }

}