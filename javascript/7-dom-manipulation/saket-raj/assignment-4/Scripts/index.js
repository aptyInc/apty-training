document.getElementById("countBtn").addEventListener("click", () => {
  const countDiv = document.getElementsByTagName("div").length;
  const countP = document.getElementsByTagName("p").length;
  const countSpan = document.getElementsByTagName("span").length;
  const countIframe = document.getElementsByTagName("iframe").length;

  document.getElementById("results").innerHTML = `
    <strong>Element counts:</strong>
    <ul>
      <li>&lt;div&gt;: ${countDiv}</li>
      <li>&lt;p&gt;: ${countP}</li>
      <li>&lt;span&gt;: ${countSpan}</li>
      <li>&lt;iframe&gt;: ${countIframe}</li>
    </ul>
  `;
});
