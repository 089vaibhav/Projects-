const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach((item) => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        if (title.includes(searchValue) || searchValue === "") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    const selectedCategory = e.target.innerText.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach((item) => {
        const category = item.dataset.category;

        if (
            selectedCategory === "all products" ||
            selectedCategory === category
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    // Clear the search input when switching categories
    searchInput.value = "";
}

searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);

categoryBtns.forEach((btn) => {
    btn.addEventListener("click", setCategory);
});

// Initialize to show all products
filterProduct();
