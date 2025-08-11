document.getElementById('parentDiv').addEventListener('click', function () {
  alert('Parent Div');
});

document.getElementById('childDiv').addEventListener('click', function (event) {
  alert('Child Div');
  event.stopPropagation();
});