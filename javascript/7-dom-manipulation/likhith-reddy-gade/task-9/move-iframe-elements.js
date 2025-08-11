document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the button
  document
    .getElementById("changeParagraphColors")
    .addEventListener("click", () => {
      const colors = ["red", "blue", "green", "purple", "orange"];
      const paragraphs = document.querySelectorAll("p");

      // Iterate through each paragraph and change its color
      paragraphs.forEach((paragraph, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        paragraph.style.color = randomColor;
      });

      // Show confirmation in the result area
      const result = document.getElementById("result");
      result.textContent = "Paragraph colors have been updated.";
      result.style.color = "green";
    });
});
