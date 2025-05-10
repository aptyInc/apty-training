document.querySelector('.level-one').addEventListener('mouseover', (event)=> {
   alert('Capturing Phase: This is First Level')
}, true)
document.querySelector('.level-two').addEventListener('mouseover', (event)=> {
 alert('Bubbling Phase: This is Second Level')  
})
document.querySelector('.level-three').addEventListener('mouseover', (event)=> {
   alert("Target Phase: This is where all may reach or not")
})