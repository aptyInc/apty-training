


document.getElementById('update-list').addEventListener('click', () => {
    const itemCollection = document.querySelectorAll('.update-item');

    itemCollection.forEach(item => {
        item.innerText = 'updated item'
    })
})
