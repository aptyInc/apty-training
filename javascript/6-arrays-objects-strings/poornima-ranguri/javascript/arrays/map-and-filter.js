const tasksArray = [];

function onFiltering() {
  const userTextElement = document.getElementById("userText");
  try {
    const userInput = JSON.parse(userTextElement.value.trim());
    tasksArray.push(userInput);

    const incompleteTasks = tasksArray.filter(
      //Filtering
      (eachTask) => eachTask.completed === true
    );

    const getTasks = incompleteTasks.map((eachTask) => eachTask.task); //Mapping

    document.getElementById("result").textContent = getTasks.join(", ");

    userTextElement.value = "";
  } catch (error) {
    alert("Invalid input! Please enter a valid JSON object.");
    console.error("Parsing error:", error);
  }
}
