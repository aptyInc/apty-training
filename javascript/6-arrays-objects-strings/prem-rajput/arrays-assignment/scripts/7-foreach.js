function introduceUsers() {
    let input = document.getElementById("usersInput").value;
    let users = input.split(",").map((user) => {
        let [name, age] = user.split(":").map((item) => item.trim());
        return { name, age: parseInt(age) };
    });
    let list = document.getElementById("introductions");
    list.innerHTML = "";
    users.forEach((user) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${user.name} is ${user.age} years old.`;
        list.appendChild(listItem);
    });
}
