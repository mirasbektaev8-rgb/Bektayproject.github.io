document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация переменных
    const container = document.getElementById("products");
    const sortSelect = document.getElementById("sortSelect") || { value: "default" };
    const priceFilter = document.getElementById("priceFilter") || { value: "all" };
    const countElement = document.getElementById("productCount");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Защита: если массива products нет, стопаем выполнение
    if (typeof products === 'undefined') {
        console.error("Ошибка: products.js не загружен!");
        return;
    }

    // 2. Логика навигации (URL параметры)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const subParam = urlParams.get('sub');

    // Фильтруем товары один раз при загрузке страницы
    let filteredProducts = [...products];

    const activeCategory = categoryParam || document.body.id;
    if (activeCategory) {
        filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
    }
    if (subParam) {
        filteredProducts = filteredProducts.filter(p => p.subCategory === subParam);
    }

    // 3. Основная функция отрисовки
    function renderProducts() {
        if (!container) return; 
        container.innerHTML = "";
        let filtered = [...filteredProducts];

        // Фильтр по цене
        const priceVal = priceFilter.value;
        if (priceVal === "0-100") filtered = filtered.filter(p => p.price <= 100);
        else if (priceVal === "100-500") filtered = filtered.filter(p => p.price > 100 && p.price <= 500);
        else if (priceVal === "500+") filtered = filtered.filter(p => p.price > 500);

        // Сортировка
        const sortVal = sortSelect.value;
        if (sortVal === "low") filtered.sort((a, b) => a.price - b.price);
        else if (sortVal === "high") filtered.sort((a, b) => b.price - a.price);

        // Счетчик
        if (countElement) countElement.innerText = filtered.length;

        // Отрисовка
        if (filtered.length === 0) {
            container.innerHTML = "<p style='grid-column: 1/-1; text-align: center; padding: 50px;'>Тауар табылмады</p>";
            return;
        }

        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";
            const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            const isFavorite = wishlist.includes(product.id);

            card.innerHTML = `
                <div class="card__img">
                    <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
                    <button class="wishlist-btn ${isFavorite ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">❤</button>
                </div>
                <div class="card__meta">
                    <p class="card__title">${product.name}</p>
                    <span>$${product.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 4. Слушатели событий
    // --- БЕЗОПАСНАЯ ПРИВЯЗКА СОБЫТИЙ ---
    const sortSelectEl = document.getElementById("sortSelect");
    const priceFilterEl = document.getElementById("priceFilter");

    if (sortSelectEl) {
        sortSelectEl.addEventListener("change", renderProducts);
    }

    if (priceFilterEl) {
        priceFilterEl.addEventListener("change", renderProducts);
    }

    // 5. Поиск
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            if (query.length < 2) { searchResults.classList.remove('show'); return; }

            const found = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query));
                        
            found.forEach(p => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<img src="${p.image}"> <div><p>${p.name}</p><p>$${p.price}</p></div>`;
                div.onclick = () => window.location.href = `product.html?id=${p.id}`;
                searchResults.appendChild(div);
            });
            searchResults.classList.add('show');
        });
    }

    renderProducts();
});

window.toggleWishlist = function(id, btn) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(itemId => itemId !== id);
        btn.classList.remove('active');
    } else {
        wishlist.push(id);
        btn.classList.add('active');
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

window.toggleSubmenu = function(id) {
    const submenu = document.getElementById(id);

    if (!submenu) {
        console.error("Меню не найдено:", id);
        return;
    }

    // Закрываем все подменю
    document.querySelectorAll('.submenu').forEach(el => {
        el.style.display = 'none';
    });

    // Открываем нужное
    submenu.style.display = "block";
};