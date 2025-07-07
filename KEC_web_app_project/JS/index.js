const products = [
    {
        name: "panadol Extra",
        price: "NGN1800",
        description: "Effective pain relief tablets",

    },
    {
        name: "Vitamin C",
        price: "NGN1500",
        description: "Boosts your immune system",
    },
    {
        name: "cough syrup",
        price: "NGN1200",
        description: "relieves cough and sore throat",
    },
];

function displayProducts(productlist) {
    const container = document.getElementById(productcontainer);
    container.innerHTML = "";
    productlist.foreach((p) => {
        const card = document.createElement("div");
        card.className = "products-card"
        card.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <p>${p.description}</p>
        <button class="btn btn-primary">Buy Now</button>`;
        container.appendChild(card);
    });
}
function searchProducts() {
    const query = document.getElementById("searchInput").Value.toLowerCase();
    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    displayProducts(filtered);
}
// on load
window.onload = () =>
    displayProducts(products);
