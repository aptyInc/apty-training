function introduceUsers() {

    var users = [
        {name: 'lucky', age: 30},

        {name: 'messi', age: 25}
    ];
    
    
    users.forEach(function(user) {

        document.getElementById("result").innerText = user.name + " is " + user.age + " years old."

        console.log(user.name + " is " + user.age + " years old.");

    });


}
