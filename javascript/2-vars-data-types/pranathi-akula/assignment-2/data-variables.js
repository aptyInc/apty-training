try {
  var name = "Pranathi";
  name = "pranathiakula"; //update var
  var name = "Akula"; // Re-declaring var
  document.getElementById("name").innerHTML = `Name: ${name}`;
} catch (error) {
  document.getElementById("name").innerHTML = `Name error: ${error.message}`;
}

try {
  let age = 24;
  age = 29; // Update let
  // let age = 25; // Uncomment to see re-declaration error
  document.getElementById("age").innerHTML = `Age: ${age}`;
} catch (error) {
  document.getElementById("age").innerHTML = `Age error: ${error.message}`;
}

try {
  const country = "India";
  country = "USA";
  document.getElementById("country").innerHTML = `Country: ${country}`;
} catch (error) {
  document.getElementById(
    "country"
  ).innerHTML = `Country error: ${error.message}`;
}
