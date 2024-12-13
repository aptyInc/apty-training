function introduceUsers() {
    const users = [
      { name: 'raksh', age: 25 },
      { name: 'rakshu', age: 26 },
      { name: 'rakshita', age: 29 }
    ];

    let messages = '';

    users.forEach(user => {
      messages += `<p>${user.name} is ${user.age} years old.</p>`;
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = messages;
  }
