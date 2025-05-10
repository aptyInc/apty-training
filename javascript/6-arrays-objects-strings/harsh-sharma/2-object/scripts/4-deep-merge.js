function deepMerge(obj1, obj2) {
    for (let key in obj2) {
      if (obj2[key] && typeof obj2[key] === "object" && obj1[key] && typeof obj1[key] === "object") {
        obj2[key] = deepMerge(obj1[key], obj2[key]);
      }
      obj1[key] = obj2[key];
    }
    return obj1;
  }
  
  function handleOnSubmit(event) {
    event.preventDefault();
    
    const obj1Input = document.querySelector("#object1_input").value.trim();
    const obj2Input = document.querySelector("#object2_input").value.trim();
  
    try {
      const obj1 = JSON.parse(obj1Input);
      const obj2 = JSON.parse(obj2Input);
  
      const result = deepMerge(obj1, obj2);
  
      document.querySelector(".output").innerText = JSON.stringify(result);
    } catch (error) {
      document.querySelector(".output").innerText = "Invalid JSON input. Please check your syntax.";
    }
  }
  