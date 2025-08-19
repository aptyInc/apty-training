const searchBox = document.getElementById("search-input");
const searchContainer = document.getElementById("search-container");
const searchSection = document.getElementById("search-results");
const allSection = document.getElementById("all-products");
const viewSection = document.getElementById("view-product");

async function searchProducts() {
    const query = searchBox.value.trim();
    if (!query) return;

    try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
        showSearchResults(data.products);
    } catch (err) {
        searchContainer.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    }
}

function showSearchResults(products) {
    allSection.style.display = "none";
    viewSection.style.display = "none";
    searchSection.style.display = "block";

    searchContainer.innerHTML = "";
    if (products.length === 0) {
        searchContainer.innerHTML = "<p><b>No products found.</b></p>";
        return;
    }

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
        <button class="view-btn" onclick="viewProduct(${p.id})">View</button>
    `;
        searchContainer.appendChild(card);
    });
}
