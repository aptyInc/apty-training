(function(){
    let immediateResultElement = document.getElementById("immediateResult");
    let headingElement = document.createElement("h3");
    headingElement.textContent = "IIFE"
    immediateResultElement.appendChild(headingElement)

    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = "It executes immediately after their definition"

    immediateResultElement.appendChild(paragraphElement)
})();