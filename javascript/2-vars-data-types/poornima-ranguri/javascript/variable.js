let resultElement = document.getElementById("result");

let output = {
  varResult: "",
  letResult: "",
  constResult: ""
};

let outputModified = {
  varResult: "",
  letResult: "",
  constResult: ""
};

var varVariable = "I am Var";

try {
  var varVariable = "I am redeclared var";
  output.varResult = "Successfully Redeclared Var";
} catch (error) {
  output.varResult = error.message;
  console.log(error)
}

let letVariable = "I am let";

try {
  let letVariable = "I am redeclared let";
  output.letResult = "Successfully Redeclared let";
} catch (error) {
  output.letResult = error.message;
  console.log(error)
}

const constVariable = "I am const";

try {
  const constVariable = "I am redeclared const";
  output.constResult = "Successfully Redeclared const";
} catch (error) {
  output.constResult = error.message;
  console.log(error)
}

try {
  varVariable = "changed var";
  outputModified.varResult = "Successfully modified Var";
} catch (error) {
  outputModified.varResult = error.message;
  console.log(error)
}

try {
  letVariable = "changed let";
  outputModified.letResult = "Successfully modified let";
} catch (error) {
  outputModified.letResult = error.message;
  console.log(error)
}

try {
  constVariable = "changed const";
  outputModified.constResult = "Error changing const";
} catch (error) {
  outputModified.constResult = error.message;
  console.log(error)
}


        let containerElement = document.createElement("div");

        let headingElement = document.createElement("h3");
        headingElement.textContent = "Var";
        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = output.varResult;
        containerElement.appendChild(headingElement);
        containerElement.appendChild(paragraphElement);

        let letHeadingElement = document.createElement("h3");
        letHeadingElement.textContent = "Let";
        let letParagraphElement = document.createElement("p");
        letParagraphElement.textContent = output.letResult;
        containerElement.appendChild(letHeadingElement);
        containerElement.appendChild(letParagraphElement);

        let constHeadingElement = document.createElement("h3");
        constHeadingElement.textContent = "Const";
        let constParagraphElement = document.createElement("p");
        constParagraphElement.textContent = output.constResult;
        containerElement.appendChild(constHeadingElement);
        containerElement.appendChild(constParagraphElement);

        resultElement.appendChild(containerElement);

        let containerElement2 = document.createElement("div");

        let headingElement2 = document.createElement("h3");
        headingElement2.textContent = "Var";
        let paragraphElement2 = document.createElement("p");
        paragraphElement2.textContent = outputModified.varResult;
        containerElement2.appendChild(headingElement2);
        containerElement2.appendChild(paragraphElement2);

        let letHeadingElement2 = document.createElement("h3");
        letHeadingElement2.textContent = "Let";
        let letParagraphElement2 = document.createElement("p");
        letParagraphElement2.textContent = outputModified.letResult;
        containerElement2.appendChild(letHeadingElement2);
        containerElement2.appendChild(letParagraphElement2);

        let constHeadingElement2 = document.createElement("h3");
        constHeadingElement2.textContent = "Const";
        let constParagraphElement2 = document.createElement("p");
        constParagraphElement2.textContent = outputModified.constResult;
        containerElement2.appendChild(constHeadingElement2);
        containerElement2.appendChild(constParagraphElement2);

        resultElement.appendChild(containerElement2);