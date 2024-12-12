
// Function to deep clone an object
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const obj = { a: 1, b: { c: 2 } };


const clone = deepClone(obj);

document.getElementById("inputObject").textContent = JSON.stringify(obj, null, 2);
document.getElementById("clonedObject").textContent = JSON.stringify(clone, null, 2);


document.getElementById("modifyClone").addEventListener("click", () => {
    clone.b.c = 3;


    document.getElementById("updatedClonedObject").textContent = JSON.stringify(clone, null, 2);
    document.getElementById("unchangedObject").textContent = JSON.stringify(obj, null, 2);
});
