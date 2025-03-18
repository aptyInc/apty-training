function SortByScore() {
    let users = document.getElementById("str").value
    try {
        let parsedUsersArr = JSON.parse(users)
        customSort(parsedUsersArr, "score")
        document.getElementById("res").innerText = JSON.stringify(parsedUsersArr)
    }
    catch (err) {
        document.getElementById("res").innerText = `${err.message}`
    }
}
function customSort(arr, score) {
    const sortCondtn = score
    arr.sort((obj1, obj2) => {
        if (obj1[sortCondtn] < obj2[sortCondtn]) {
            return -1;
        }
        if (obj1[sortCondtn] > obj2[sortCondtn]) {
            return 1;
        }
        return 0;
    })
}