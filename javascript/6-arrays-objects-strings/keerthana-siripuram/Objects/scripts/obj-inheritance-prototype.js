let person = {
    name: '',
    greet: function() {
      return `Hello, ${this.name}`;
    }
  };
  
  function greet()
{
    let name=document.getElementById("name").value
    let job=document.getElementById("job").value
    let employee=Object.create(person)
    employee.name=name
    employee.job=job
    employee.greet=function()
    {
        return `Hello, ${this.name} the ${this.job}!`
    }
    document.getElementById("res").innerText = employee.greet()
}