function updateListItems() {
    const ulEle = document.getElementsByTagName('ul')
    const liEles = ulEle[0].children
    for (let ind = 0; ind < liEles.length; ind++) {
        if (ind % 2 != 0) {
            const listItem = liEles[ind]
            listItem.textContent = "Updated  Item"
        }
    }
}