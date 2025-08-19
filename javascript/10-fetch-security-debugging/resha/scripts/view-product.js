const productDetails = document.getElementById("product-details");

async function viewProduct(id) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await res.json();

        showSingleProduct(product);
    } catch (err) {
        productDetails.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    }
}

function showSingleProduct(p) {
    document.getElementById("all-products").style.display = "none";
    document.getElementById("search-results").style.display = "none";
    document.getElementById("view-product").style.display = "block";

    productDetails.innerHTML = `
    <div class="product-details-container">
        <div class="product-image">
            <img src="${p.thumbnail}" alt="${p.title}">
        </div>
        <div class="product-info">
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <p><b>Price:</b> $${p.price}</p>
            <p><b>Category:</b> ${p.category}</p>
            <p><b>Brand:</b> ${p.brand || "N/A"}</p>
            <p><b>Stock:</b> ${p.stock || "N/A"}</p>
            <p><b>Rating:</b> ⭐ ${p.rating || "N/A"}</p>
        </div>
    </div>`;
}

function backToAll() {
    document.getElementById("view-product").style.display = "none";
    document.getElementById("search-results").style.display = "none";
    document.getElementById("all-products").style.display = "block";
}
