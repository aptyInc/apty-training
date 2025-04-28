const apiBaseUrl = "https://dummyjson.com/products";

// Fetch all products
async function listAllProducts() {
  // Clear previous error message
  clearError();

  try {
    const response = await fetch(apiBaseUrl);
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    displayError(error.message);
  }
}

// Search for products
async function searchProducts() {
  const query = document.getElementById("searchInput").value;
  // Clear previous error message
  clearError();

  if (!query) {
    displayError("Please enter a search term");
    return;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/search?q=${query}`);
    if (!response.ok) throw new Error("Failed to search products");

    const data = await response.json();
    if (data.products.length === 0) {
      displayError("No products found");
    } else {
      displayProducts(data.products);
    }
  } catch (error) {
    displayError(error.message);
  }
}

// Display products
function displayProducts(products) {
  const productList = document.getElementById("productList");
  const errorMessage = document.getElementById("errorMessage");

  productList.innerHTML = "";
  errorMessage.textContent = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="product-content">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Product</button>
          </div>
        `;
    productList.appendChild(productDiv);
  });
}

// View single product details
async function viewProduct(productId) {
  // Clear previous error message
  clearError();

  try {
    const response = await fetch(`${apiBaseUrl}/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product");

    const product = await response.json();
    showProductDetails(product);
  } catch (error) {
    displayError(error.message);
  }
}

// Show product details
function showProductDetails(product) {
  const productDetails = document.getElementById("productDetails");
  const productImage = document.getElementById("productImage");
  const productTitle = document.getElementById("productTitle");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");

  // Hide product list and show product details
  document.getElementById("productList").style.display = "none";
  productDetails.style.display = "block";

  productImage.src = product.thumbnail;
  productTitle.textContent = product.title;
  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
}

// Display error messages
function displayError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
}

// Clear error message
function clearError() {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";
}

// Go back to the product list from the details page
function goBack() {
  document.getElementById("productDetails").style.display = "none";
  document.getElementById("productList").style.display = "grid";
}

// Load all products on page load
window.onload = listAllProducts;
