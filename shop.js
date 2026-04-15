document.addEventListener('DOMContentLoaded', () => {
    // 1. Ищем контейнер товаров
    const container = document.getElementById("products");
    
    // Если на странице нет контейнера #products, выходим, чтобы не было ошибок
    if (!container) return; 

    // 2. Ищем элементы фильтров (если их нет на странице, они будут null)
    const sortSelect = document.getElementById("sortSelect");
    const priceFilter = document.getElementById("priceFilter");
    const countElement = document.getElementById("productCount");

    // Защита: если файл products.js не загружен, код не будет работать
    if (typeof products === 'undefined') {
        console.error("Ошибка: products.js не найден.");
        return;
    }

    // 3. Получаем параметры из URL (например: catalog.html?category=women&sub=pants)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const subParam = urlParams.get('sub');

    // 4. Фильтруем исходный массив
    let filteredProducts = [...products];

    // Применяем фильтр по категории и подкатегории
    if (categoryParam) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryParam);
    }
    if (subParam) {
        filteredProducts = filteredProducts.filter(p => p.subCategory === subParam);
    }

    // 5. Функция отрисовки товаров
    function renderProducts() {
        container.innerHTML = "";
        let filtered = [...filteredProducts];

        // Фильтр по цене
        if (priceFilter) {
            const val = priceFilter.value;
            if (val === "0-100") filtered = filtered.filter(p => p.price <= 100);
            else if (val === "100-500") filtered = filtered.filter(p => p.price > 100 && p.price <= 500);
            else if (val === "500+") filtered = filtered.filter(p => p.price > 500);
        }

        // Сортировка
        if (sortSelect) {
            const val = sortSelect.value;
            if (val === "low") filtered.sort((a, b) => a.price - b.price);
            else if (val === "high") filtered.sort((a, b) => b.price - a.price);
        }

        // Обновляем счетчик
        if (countElement) countElement.innerText = filtered.length;

        // Если товаров нет
        if (filtered.length === 0) {
            container.innerHTML = "<p style='grid-column: 1/-1; text-align: center; padding: 20px;'>Тауар табылмады</p>";
            return;
        }

        // Отрисовка
        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="card__img">
                    <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
                </div>
                <div class="card__meta">
                    <p class="card__title">${product.name}</p>
                    <span>$${product.price}</span>
                    <button onclick="addToCart(${product.id})">Add</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Привязываем события изменения только если фильтры есть на странице
    if (sortSelect) sortSelect.addEventListener("change", renderProducts);
    if (priceFilter) priceFilter.addEventListener("change", renderProducts);

    // Первичная отрисовка
    renderProducts();
});

// --- ГЛОБАЛЬНЫЕ ФУНКЦИИ (доступны во всем проекте) ---

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(product.name + " added to cart!");
    }
};

