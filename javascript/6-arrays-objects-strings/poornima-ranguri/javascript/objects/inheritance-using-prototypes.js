let Person = {
  greet: function () {
    return `Hello ${this.name}`;
  },
};

let Employee = Object.create(Person);

function onInheritance() {
  const usernameElement = document.getElementById("userName");
  let userName = usernameElement.value.trim(); //Removing Extra spaces
  let userDesignationElement = document.getElementById("userRole");
  let userRole = userDesignationElement.value.trim();
  const errorMessageElement = document.getElementById("errorMesssage");

  if (!userName || !userRole) {
    errorMessageElement.textContent = "Both values should be provided!";
    document.getElementById("result").textContent = "";
  } else {
    Employee.name = userName;
    Employee.job = userRole;
    errorMessageElement.textContent = "";
    document.getElementById(
      "result"
    ).textContent = `Hello!, ${userName.toUpperCase()} The ${userRole}`;
  }
}
