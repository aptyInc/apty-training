async function displayProducts(products) {
    productListDiv.innerHTML = "";
    productDetailDiv.style.display = "none";
    productListDiv.style.display = "block";

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
			<h3>${product.title}</h3>
			<p>${product.description}</p>
			<button onclick="viewProduct(${product.id})">View Details</button>`;
        productListDiv.appendChild(productItem);
    });
}

async function viewProduct(productId) {
    const product = await fetchProductById(productId);
    productListDiv.style.display = "none";
    productDetailDiv.style.display = "block";

    productInfoDiv.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}" width="200" />
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
    `;
}
