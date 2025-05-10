function onLoggingMessage() {
  const userArray = [
    {
      id: 1,
      name: "Poornima Ranguri",
      age: 21,
    },
    {
      id: 2,
      name: "Ganesh",
      age: 22,
    },
    { id: 3, name: "Balaji", age: 24 },

    {
      id: 4,
      name: "Althaf",
      age: 20,
    },
    { id: 4, name: "Reyansh", age: 27 },
    { id: 5, name: "Aradhna", age: 24 },
    { id: 6, name: "Vikram", age: 23 },
    { id: 7, name: "Ashish", age: 24 },
    { id: 8, name: "Abhi", age: 31 },
    { id: 9, name: "Gowtham", age: 34 },
    { id: 10, name: "Hayanshi", age: 24 },
    { id: 11, name: "Aransh", age: 25 },
    { id: 12, name: "Srujan", age: 19 },
    { id: 13, name: "Tessa", age: 20 },
    { id: 14, name: "Hardhik", age: 21 },
    { id: 15, name: "Ram", age: 24 },
    { id: 16, name: "Charan", age: 22 },
    { id: 17, name: "Janani", age: 16 },
    { id: 18, name: "Lakshmi", age: 24 },
    { id: 19, name: "Balaji", age: 24 },
    { id: 20, name: "Ramana", age: 22 },
    { id: 21, name: "Arohi", age: 22 },
    { id: 22, name: "Gagan", age: 21 },
    { id: 23, name: "Bhaygya", age: 19 },
    { id: 24, name: "Poori", age: 18 },
    { id: 25, name: "Gana", age: 19 },
    { id: 26, name: "Puri", age: 21 },
    { id: 27, name: "Satya", age: 24 },
    { id: 28, name: "Sharma", age: 21 },
    { id: 29, name: "Poori", age: 22 },
    { id: 30, name: "Ganesh", age: 21 },
  ];

  const resultElement = document.getElementById("result");
  userArray.forEach((eachElement) => {
    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = `${eachElement.name} is ${eachElement.age} years old.`;
    resultElement.appendChild(paragraphElement);
  });
}
