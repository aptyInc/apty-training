const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "anu": { "address": { "city": "Bangalore" } }
};
const default_city = "Pune"; 

function getUserCity() {
    const userName = document.getElementById('user_name').value;  
    let resultText = '';

    try {
        // Try to access the user's city
        resultText = users[userName].address.city;
    } catch (error) {
        // Handle error if user is not found
        resultText = 'User not found or invalid name!';
    } finally {
        // Append the default city
        resultText += ` Default city: ${default_city}`;
    }

    // Display the result
    document.getElementById('result').textContent = resultText;
}