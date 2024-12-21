
document.getElementById('parent').addEventListener('click', () => {
    alert("Parent Div clicked!");
})

document.getElementById('child').addEventListener('click', evt => {
    alert("Child Div clicked!");

    evt.stopPropagation()
})