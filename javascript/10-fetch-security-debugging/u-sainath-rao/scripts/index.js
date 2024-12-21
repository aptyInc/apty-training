(async function init() {
	const products = await fetchAllProducts();

	displayProducts(products);
})();
