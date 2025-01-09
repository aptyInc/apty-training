// Function to fetch all products
async function fetchAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error.message);
    alert("Error fetching products. Please try again later.");
    return [];
  }
}

// Function to search products by name
async function searchProducts(query) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    if (!response.ok) throw new Error("Failed to search products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error.message);
    alert("Error searching products. Please try again later.");
    return [];
  }
}

// Event listener for Search functionality
document.getElementById("searchButton").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.trim();
  const searchResultsDiv = document.getElementById("searchResults");

  if (!query) {
    searchResultsDiv.innerHTML = "<p>Please enter a search query.</p>";
    return;
  }

  const results = await searchProducts(query);
  searchResultsDiv.innerHTML = results.length
    ? results
        .map(
          (product) => `
            <div class="product">
              <h3>${product.title}</h3>
              <img src="${product.thumbnail}" alt="${product.title}" />
              <p>Price: $${product.price}</p>
            </div>
          `
        )
        .join("")
    : "<p>No products found.</p>";
});

// Event listener for listing all products
document
  .getElementById("listProductsButton")
  .addEventListener("click", async () => {
    const products = await fetchAllProducts();
    const allProductsDiv = document.getElementById("allProducts");
    allProductsDiv.innerHTML = products
      .map(
        (product) => `
          <div class="product">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}" />
            <p>Price: $${product.price}</p>
          </div>
        `
      )
      .join("");
  });
