document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const productContainer = document.getElementById("product-container");

  if (productId) {
    productContainer.innerHTML = "<p>Loading product details...</p>"; // Loading message
    const product = await fetchWithErrorHandling(
      `https://dummyjson.com/products/${productId}`
    );
    if (product) {
      productContainer.innerHTML = `
              <h2>${sanitize(product.title || "No title available")}</h2>
              <img src="${sanitize(product.thumbnail || "")}" alt="${sanitize(
        product.title || "Product image"
      )}">
              <p>${sanitize(
                product.description || "No description available"
              )}</p>
              <p><strong>Price:</strong> $${product.price || "N/A"}</p>
          `;
    } else {
      productContainer.innerHTML =
        "<p>Product not found or could not be loaded.</p>";
    }
  } else {
    productContainer.innerHTML = "<p>No product selected.</p>";
  }
});

// Example implementation for fetchWithErrorHandling
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Return null on failure
  }
}

// Example implementation for sanitize
function sanitize(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}
