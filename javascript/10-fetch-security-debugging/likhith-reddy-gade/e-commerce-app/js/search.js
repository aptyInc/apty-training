document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  // Ensure required elements exist
  if (!searchForm || !searchInput || !searchResults) {
    console.error("Required elements not found in the HTML.");
    return;
  }

  // Handle search form submission
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const query = searchInput.value.trim();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    // Clear previous results
    searchResults.innerHTML = "<p>Loading...</p>";

    try {
      // Fetch search results
      const results = await searchProducts(query);

      // Render search results
      searchResults.innerHTML = ""; // Clear the loading message
      if (results.length > 0) {
        results.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className = "product";
          productDiv.innerHTML = `
            <h3>${sanitize(product.title)}</h3>
            <p>${sanitize(product.description)}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
          `;
          searchResults.appendChild(productDiv);
        });
      } else {
        searchResults.innerHTML = "<p>No products found.</p>";
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      searchResults.innerHTML =
        "<p>Error fetching search results. Please try again.</p>";
    }
  });
});

// Fetch search results using the API
async function searchProducts(query) {
  console.log(`Searching for products with query: "${query}"`);
  const data = await fetchWithErrorHandling(
    `https://dummyjson.com/products/search?q=${query}`
  );
  console.log("Search results data:", data);
  return data && data.products ? data.products : [];
}

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
