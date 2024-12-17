let newObject = new Object();

function onAddingObjects() {
  const userKeyElement = document.getElementById("userKey");
  let userKey = userKeyElement.value.trim(); //Removing Extra spaces
  let userValueElement = document.getElementById("userValue");
  let userValue = userValueElement.value.trim();
  const errorMessageElement = document.getElementById("errorMesssage");

  if (!userKey) {
    errorMessageElement.textContent = "Key cannot be empty";
    document.getElementById("result").textContent = "";
  }

  if (userValue === "") {
    errorMessageElement.textContent = "Value cannot be undefined";
    document.getElementById("result").textContent = "";
  } else {
    if (newObject.hasOwnProperty(userKey)) {
      errorMessageElement.textContent = `${userKey} already exist, Rewriting the value`;
    } else {
      errorMessageElement.textContent = "Adding New Key";
    }

    newObject[userKey] = userValue;
  }

  document.getElementById("result").textContent = `${JSON.stringify(
    newObject
  )}`; //appending length to home
}
