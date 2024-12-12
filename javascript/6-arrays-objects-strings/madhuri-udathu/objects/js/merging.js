function deepClone(obj1, obj2) {
    for (let key in obj2) {
        if (obj2[key] && typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
            obj1[key] = deepClone(obj1[key] || {}, obj2[key]); // Recursively merge nested objects
        } else {
            obj1[key] = obj2[key]; // Overwrite or add the property
        }
    }
    return obj1;
}


function merge() {
    const userInput1 = document.getElementById("object1").value;
    const userInput2 = document.getElementById("object2").value;

    let originalObject1 = JSON.parse(userInput1);
    let originalObject2 = JSON.parse(userInput2);
    const clonedObj1 = deepClone(originalObject1,originalObject2);
    console.log({...clonedObj1})

   document.getElementById("output").textContent=JSON.stringify({...clonedObj1})
}