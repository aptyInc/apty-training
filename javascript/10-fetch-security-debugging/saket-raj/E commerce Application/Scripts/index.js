const productContainer = document.getElementById("productContainer");
const allProductsBtn = document.getElementById("allProductsBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

async function getAllProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=20");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    renderProducts(data.products);
  } catch (error) {
    productContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

async function searchProducts(query) {
  try {
    let data;

    if (!isNaN(query)) {
      const res = await fetch(`https://dummyjson.com/products/${query}`);
      if (!res.ok) throw new Error("Product not found");
      const product = await res.json();
      data = [product];
    } else {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      if (!res.ok) throw new Error("Failed to search products");
      data = (await res.json()).products;
    }

    if (data.length === 0) {
      productContainer.innerHTML = `<p>No products found for "${query}"</p>`;
      return;
    }
    renderProducts(data);
  } catch (error) {
    productContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

async function getProductDetails(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product details");
    const product = await res.json();
    showModal(product);
  } catch (error) {
    alert(error.message);
  }
}

function renderProducts(products) {
  productContainer.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <img src="${p.thumbnail}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button onclick="getProductDetails(${p.id})">View Details</button>
    </div>
  `
    )
    .join("");
}

function showModal(product) {
  modal.classList.remove("hidden");
  modalBody.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.thumbnail}" style="width:100%;max-height:200px;object-fit:contain" />
    <p><strong>Brand:</strong> ${product.brand}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Description:</strong> ${product.description}</p>
  `;
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

allProductsBtn.addEventListener("click", getAllProducts);
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) searchProducts(query);
});

getAllProducts();
