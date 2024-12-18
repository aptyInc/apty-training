let formContainer = document.getElementById("form-container") 

let mainHead = document.createElement("h2")
mainHead.textContent = "Login Form"
formContainer.appendChild(mainHead)

let dataArray = [
    {
        type: "text",
        placeholder: "Enter the name",
        id: "name",
        text: "Name",

    },
    {
        type: "password",
        placeholder: "Enter the password",
        id: "password",
        text: "Password",
    },]

for (let i=0;i<dataArray.length;i++){
    let {type,placeholder,id,text}= dataArray[i]
    let nameDiv = document.createElement("div")
    nameDiv.classList.add("input-style")
    let nameInput = document.createElement("input")
    let nameLabel = document.createElement("label")
    nameInput.classList.add("label-style")
    let break_1 = document.createElement("br")
    nameInput.setAttribute("type",type)
    nameInput.setAttribute("placeholder",placeholder)
    nameInput.setAttribute("id",id)
    nameLabel.setAttribute("for",id)
    nameLabel.textContent = text
    nameDiv.appendChild(nameLabel)
    nameDiv.appendChild(break_1)
    nameDiv.appendChild(nameInput)
    formContainer.appendChild(nameDiv) 
}

// submit 
let subButton = document.createElement("button")  
subButton.classList.add("sub-but")
subButton.textContent = "submit" 
subButton.setAttribute("type","submit") 
formContainer.appendChild(subButton)

subButton.addEventListener("submit",(e)=>{
    e.preventDefault()
})

//Register 
let breakEle = document.createElement("br")
formContainer.appendChild(breakEle)
let regText = document.createElement("a") 
regText.textContent = "Register"
regText.setAttribute("href","../registration-form/index.html")
formContainer.appendChild(regText)