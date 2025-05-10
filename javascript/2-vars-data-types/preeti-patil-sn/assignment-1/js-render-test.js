let Name = 'preeti';
let math = 98;
let physics = 100;
let average = (math + physics) / 2;
 
const outputContent = `
  <h3>External JS Example:</h3>
  <p>Hello, I am ${Name}. My Math score is ${math}, Physics score is ${physics}, and my average score is ${average}.</p>
`;
 
const Result = document.getElementById('output');
 
Result.innerHTML = outputContent;

// Create a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = `Hello, I am ${Name}. My Math score is ${math}, Physics score is ${physics}, and my average score is ${average}.`;
 
// Append the paragraph to the div
Result.appendChild(paragraph);
 