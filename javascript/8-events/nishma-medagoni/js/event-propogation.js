document.getElementById("level1").addEventListener("click",function () {
    alert("Capture Phase: Level 1")    
    },
    true // Use capture phase
)

// Add listener for Bubble Phase (Level 2)
document.getElementById("level2").addEventListener("click", function () {
  alert("Bubble Phase: Level 2")
})

// Add listener for Target Phase (Level 3)
document.getElementById("level3").addEventListener("click", function () {
  alert("Target Phase: Level 3")
})
