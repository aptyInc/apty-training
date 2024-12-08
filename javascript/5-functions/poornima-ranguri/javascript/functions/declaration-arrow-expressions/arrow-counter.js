document.getElementById("counterButton").addEventListener("click", ()=>{
    let paragraphElement = document.getElementById("result");
    let count = parseInt(paragraphElement.innerText);
    count ++;
    paragraphElement.textContent = count;
})