class Person{
    constructor(name="",age=0)
    {
        this.name=name
        this.age=age
    }
    setName(name)
    {
        this.name=name
        return this
    }
    setAge(age)
    {
        this.age=age
        return this
    }
    greet()
    {
        document.getElementById("res").innerText=`Hello, I am ${this.name}, ${this.age} years old.`
        return this
    }
}
function greet()
{
    let person=new Person()
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    person.setName(name).setAge(age).greet()
}
