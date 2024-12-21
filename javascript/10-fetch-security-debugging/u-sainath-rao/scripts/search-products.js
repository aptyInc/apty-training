const searchInput = document.getElementById("search-input");
const productListDiv = document.getElementById("product-list");
const productDetailDiv = document.getElementById("product-detail");
const productInfoDiv = document.getElementById("product-info");
const backBtn = document.getElementById("back-btn");

searchInput.addEventListener("input", async (e) => {
	const query = searchInput.value.trim();

	if (query) {
		const products = await searchProducts(query);
		displayProducts(products);
	}
});

backBtn.addEventListener("click", () => {
	productDetailDiv.style.display = "none";
	productListDiv.style.display = "block";
});

async function searchProducts(query) {
	try {
		const response = await fetch(`${API_URL}/search?q=${query}`);
		const data = await response.json();

		return data.products;
	} catch (error) {
		console.error("Error searching products:", error);
		alert("There was an error with the search.");
	}
}
