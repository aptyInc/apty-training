document.addEventListener("DOMContentLoaded", async () => {
  const productsContainer = document.getElementById("products-container");

  // Check if the container exists
  if (!productsContainer) {
    console.error("Products container not found in the HTML.");
    return;
  }

  // Fetch data from the API
  const data = await fetchWithErrorHandling("https://dummyjson.com/products");

  // Log the fetched data to check if it's structured properly
  console.log("Fetched products data:", data);

  if (data && data.products) {
    if (data.products.length === 0) {
      productsContainer.innerHTML = "<p>No products available.</p>";
    } else {
      // Loop through products and display them
      data.products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
                  <h3>${sanitize(product.title)}</h3>
                  <p>${sanitize(product.description)}</p>
                  <p><strong>Price:</strong> $${product.price}</p>
                  <a href="product.html?id=${product.id}">View Details</a>
              `;
        productsContainer.appendChild(productDiv);
      });
    }
  } else {
    productsContainer.innerHTML = "<p>Unable to fetch products.</p>";
  }
});

// Example of fetchWithErrorHandling function
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// Example of sanitize function
function sanitize(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}
