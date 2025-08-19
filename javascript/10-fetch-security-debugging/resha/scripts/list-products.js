const productList = document.getElementById("product-list");
const categoriesSelect = document.getElementById("categories");

async function fetchProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        displayProducts(data.products);
    } catch (err) {
        productList.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    }
}

function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.thumbnail}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>$${p.price}</p>
            <button class="view-btn" onclick="viewProduct(${p.id})">View</button>
        `;
        productList.appendChild(card);
    });
}

async function fetchCategories() {
    try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const categories = await res.json();

        categoriesSelect.innerHTML = `<option value="">All Categories</option>`;
        categories.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            categoriesSelect.appendChild(option);
        });

        categoriesSelect.addEventListener("change", async (e) => {
            if (e.target.value === "") {
                fetchProducts();
            } else {
                fetchProductsByCategory(e.target.value);
            }
        });
    } catch (err) {
        console.error("Error fetching categories:", err.message);
    }
}

async function fetchProductsByCategory(category) {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        displayProducts(data.products);
    } catch (err) {
        productList.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    }
}

fetchProducts();
fetchCategories();
