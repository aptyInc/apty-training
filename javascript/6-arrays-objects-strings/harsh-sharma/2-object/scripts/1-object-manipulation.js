class CreateObject{
    #value = {}

    insertKey(key, value){
        this.#value[key] = value;
    }

    getObject(){
        return this.#value;
    }
}

const dynamicObject = new CreateObject();

function handleOnSubmit(event) {
  event.preventDefault();
  const output_div = document.querySelector(".output");
  const valueInput = document.querySelector("#value_input").value.trim();
  const keyInput = document.querySelector("#key_input").value.trim();

  if (!valueInput || !keyInput) {
    output_div.innerText = "Please provide a value to add.";
    return;
  }

   dynamicObject.insertKey(keyInput, valueInput);  

  output_div.innerText = JSON.stringify(dynamicObject.getObject());
}



