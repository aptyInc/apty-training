function mergeObjects() {
    let obj1 = JSON.parse(document.getElementById("json-string1").value)
    let obj2 = JSON.parse(document.getElementById("json-string2").value)
   let deepMergedObj=deepMerge(obj1,obj2)
    document.getElementById("merged-obj").innerText += JSON.stringify(deepMergedObj)
}
function deepMerge(obj1, obj2) {
    let result = { ...obj1 }; 
    Object.keys(obj2).forEach((key)=>{
        if (typeof obj2[key] === "object" && obj2[key] !== null && !Array.isArray(obj2[key])) {
            result[key] = deepMerge(obj1[key] || {}, obj2[key]);
          } else {
            result[key] = obj2[key];
          }
    })
    return result;
  }
  