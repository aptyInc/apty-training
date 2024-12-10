const nestedFunctions = {
    outerFunction(firstName) {
        this.middleFunction = (lastName) => {
            this.innerFunction = () => {
                return `Welcome, ${firstName} ${lastName}! Have a great day!`;
            };
            return this.innerFunction;
        };
        return this.middleFunction;
    }
};

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const greeting = nestedFunctions.outerFunction(firstName)(lastName)();
    document.getElementById('output').textContent = greeting;
});