let mainContainer = document.getElementById("bgContainer")

let mainHead = document.createElement("h2")
mainHead.textContent = "Registration Form"
mainContainer.appendChild(mainHead)

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
    },
    {
        type: "email",
        placeholder: "Enter the Email",
        id: "email",
        text: "Email",
    },
    {
        type: "tel",
        placeholder: "Enter the number",
        id: "num",
        text: "Phone Number",
    },
    {
        type: "date",
        placeholder: "Enter the DOB",
        id: "DOB",
        text: "Date Of Birth",
    },
    {
        type: "number",
        placeholder: "Enter the Age",
        id: "age",
        text: "Age",
    },
]

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
    mainContainer.appendChild(nameDiv) 
    if (id === "name"){
        nameInput.setAttribute("required","true")
    }
    else if (id === "email"){
        nameLabel.setAttribute("pattern","[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")
    }
}

let inputValues = {
    country: "United States",
    profession: "Doctor",
}


// Radio 
let radioGroup = document.createElement("div") 
radioGroup.classList.add("radio-container")
let radioHead = document.createElement("h3")
radioHead.style.fontWeight = "100"
radioHead.style.fontSize = "17px"
radioHead.textContent = "Gender"
radioHead.style.marginBottom = "5px"
mainContainer.appendChild(radioHead)
let radioList = [
    {
        text1: "male"
    },
    {
        text1: "female"
    },
    {
        text1: "others"
    }
]


for(let j=0;j<radioList.length;j++){
    let {text1} = radioList[j]
    let radDiv = document.createElement("div")
    radDiv.classList.add("radio-item")
    let radLabel = document.createElement("label")
    let radInput = document.createElement("input")
    radInput.setAttribute("id",text1)
    radInput.setAttribute("type","radio")
    radInput.setAttribute("name","gender")
    radLabel.textContent = text1 
    radDiv.appendChild(radInput)
    radDiv.appendChild(radLabel)
    radioGroup.appendChild(radDiv)

   
}
mainContainer.appendChild(radioGroup)


//dropdown 
let dropArray = [
    {
        id: "country",
        text: "Country",
        dropList: [
            "United States",
            "Canada",
            "Brazil",
            "United Kingdom",
            "Germany",
            "France",
            "Italy",
            "Spain",
            "Australia",
            "India",
            "China",
            "Japan",
            "South Korea",
            "South Africa",
            "Mexico",
            "Argentina",
            "Russia",
            "Saudi Arabia",
            "Indonesia",
            "Turkey"
        ]
    },
    {
        id: "profession",
        text: "Profession",
        dropList: [
            "Doctor",
            "Engineer",
            "Teacher",
            "Lawyer",
            "Nurse",
            "Software Developer",
            "Architect",
            "Accountant",
            "Scientist",
            "Pharmacist",
            "Journalist",
            "Artist",
            "Chef",
            "Police Officer",
            "Firefighter",
            "Pilot",
            "Dentist",
            "Electrician",
            "Plumber",
            "Mechanic",
            "Data Analyst",
            "Graphic Designer",
            "Photographer",
            "Musician",
            "Social Worker"
        ]
    }
]


let dropdownValue = (a) => {
    if (a === "country"){
        inputValues.country = document.getElementById(a).value 
    }
    else{
        inputValues.profession = document.getElementById(a).value
    }
}

for(let k=0;k<dropArray.length;k++){
    let {text,dropList,id} = dropArray[k]
    let dropDown = document.createElement("div")
    dropDown.style.marginBottom= "10px"
    let dropEle = document.createElement("select")
    dropEle.setAttribute("id",id)
    dropEle.classList.add("label-style")
    let break_3 = document.createElement("br")
    let dropLabel = document.createElement("label")
    dropLabel.textContent = text
    dropDown.appendChild(dropLabel)
    dropDown.appendChild(break_3)
    dropDown.appendChild(dropEle)
    mainContainer.appendChild(dropDown)

    for(let l=0;l<dropList.length;l++){
        let dropItem = document.createElement("option")
        dropItem.textContent = dropList[l]
        dropItem.setAttribute("value",dropList[l])
        dropEle.appendChild(dropItem)
    }
    dropEle.addEventListener("change",()=>{
        dropdownValue(id)
    })
    
}

//checkbox 
let checkDiv = document.createElement("div")
let check = document.createElement("input")
check.setAttribute("required","true")
check.style.marginRight = "10px"
check.setAttribute("type","checkbox")
let checkLabel = document.createElement("label")
checkLabel.textContent = "I agree with the terms and conditions"
checkDiv.appendChild(check)
checkDiv.appendChild(checkLabel)
mainContainer.appendChild(checkDiv)

// submit 
let subButton = document.createElement("button")  
subButton.classList.add("sub-but")
subButton.textContent = "submit" 
subButton.setAttribute("type","submit") 
mainContainer.appendChild(subButton)

//anchor 
let anchor = document.createElement("a")
a.textContent = "Login"
anchor.setAttribute("href","../login-form/index.html")

subButton.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email : document.getElementById("email").value,
        mobileNumber: document.getElementById("num").value,
        dob: document.getElementById("DOB").value,
        age : document.getElementById("age").value,
        ...inputValues
    }
    window.location.pathname = "../login-form/index.html"
})