const products = [
    // --- МУЖСКАЯ КОЛЛЕКЦИЯ ---
    // Shoes (9 товаров)
    { id: 1, category: "men", subCategory: "shoes", name: "Leather Sneakers", price: 120, image: "img/shoes m1.jpg" },
    { id: 2, category: "men", subCategory: "shoes", name: "Running Pro", price: 140, image: "img/shoes m2.jpg" },
    { id: 3, category: "men", subCategory: "shoes", name: "Formal Brogues", price: 160, image: "img/shoes m3.jpg" },
    { id: 4, category: "men", subCategory: "shoes", name: "Slip-ons", price: 90, image: "img/shoes m4.jpg" },
    { id: 5, category: "men", subCategory: "shoes", name: "Boots", price: 200, image: "img/shoes m5.jpg" },
    { id: 6, category: "men", subCategory: "shoes", name: "Canvas", price: 70, image: "img/shoes m6.jpg" },
    { id: 7, category: "men", subCategory: "shoes", name: "Loafers", price: 130, image: "img/shoes m7.jpg" },
    { id: 8, category: "men", subCategory: "shoes", name: "High-tops", price: 110, image: "img/shoes m8.jpg" },
    { id: 9, category: "men", subCategory: "shoes", name: "Trainers", price: 95, image: "img/shoes m9.jpg" },

    // Tshirts (9 товаров)
    { id: 10, category: "men", subCategory: "tshirts", name: "Basic White", price: 30, image: "img/shirt men 1.jpg" },
    { id: 11, category: "men", subCategory: "tshirts", name: "Graphic Black", price: 40, image: "img/shirt men 2.jpg" },
    { id: 12, category: "men", subCategory: "tshirts", name: "Polo Navy", price: 50, image: "img/shirt men 3.jpg" },
    { id: 13, category: "men", subCategory: "tshirts", name: "V-neck Grey", price: 35, image: "img/shirt men 4.jpg" },
    { id: 14, category: "men", subCategory: "tshirts", name: "Long Sleeve", price: 45, image: "img/shirt men 5.jpg" },
    { id: 15, category: "men", subCategory: "tshirts", name: "Muscle Fit", price: 38, image: "img/shirt men 6.jpg" },
    { id: 16, category: "men", subCategory: "tshirts", name: "Striped", price: 42, image: "img/shirt men 7.jpg" },
    { id: 17, category: "men", subCategory: "tshirts", name: "Cotton Slim", price: 32, image: "img/shirt men 8.jpg" },
    { id: 18, category: "men", subCategory: "tshirts", name: "Print Casual", price: 48, image: "img/shirt men 9.jpg" },

    // Jackets (9 товаров)
    { id: 19, category: "men", subCategory: "jackets", name: "Leather Briefcase", price: 250, image: "img/jacket men 1.jpg" },
    { id: 20, category: "men", subCategory: "jackets", name: "Backpack Pro", price: 180, image: "img/jacket men 2.jpg" },
    { id: 21, category: "men", subCategory: "jackets", name: "Gym Duffel", price: 90, image: "img/jacket men 3.jpg" },
    { id: 22, category: "men", subCategory: "jackets", name: "Messenger", price: 150, image: "img/jacket men 4.jpg" },
    { id: 23, category: "men", subCategory: "jackets", name: "Travel Bag", price: 300, image: "img/jacket men 5.jpg" },
    { id: 24, category: "men", subCategory: "jackets", name: "Small Sling", price: 70, image: "img/jacket men 6.jpg" },
    { id: 25, category: "men", subCategory: "jackets", name: "Laptop Case", price: 120, image: "img/jacket men 7.jpg" },
    { id: 26, category: "men", subCategory: "jackets", name: "Wallet Set", price: 100, image: "img/jacket men 8.jpg" },
    { id: 27, category: "men", subCategory: "jackets", name: "Clutch", price: 110, image: "img/jacket men 9.jpg" },

    // Sweaters (9 товаров)
    { id: 28, category: "men", subCategory: "sweaters", name: "Wool Pullover", price: 150, image: "img/sweather m1.jpg" },
    { id: 29, category: "men", subCategory: "sweaters", name: "Cashmere Zip", price: 200, image: "img/sweather m2.jpg" },
    { id: 30, category: "men", subCategory: "sweaters", name: "Hoodie Black", price: 80, image: "img/sweather m3.jpg" },
    { id: 31, category: "men", subCategory: "sweaters", name: "Cardigan", price: 130, image: "img/sweather m4.jpg" },
    { id: 32, category: "men", subCategory: "sweaters", name: "Turtle Neck", price: 110, image: "img/sweather m5.jpg" },
    { id: 33, category: "men", subCategory: "sweaters", name: "Crew Neck", price: 95, image: "img/sweather m6.jpg" },
    { id: 34, category: "men", subCategory: "sweaters", name: "Cable Knit", price: 140, image: "img/sweather m7.jpg" },
    { id: 35, category: "men", subCategory: "sweaters", name: "Tech Fleece", price: 120, image: "img/sweather m8.jpg" },
    { id: 36, category: "men", subCategory: "sweaters", name: "Light Knit", price: 85, image: "img/sweather m9.jpg" },


    { id: 37, category: "men", subCategory: "pants", name: "Wool Pullover", price: 150, image: "img/pants m1.jpg" },
    { id: 38, category: "men", subCategory: "pants", name: "Cashmere Zip", price: 200, image: "img/pants m2.jpg" },
    { id: 39, category: "men", subCategory: "pants", name: "Hoodie Black", price: 80, image: "img/pants m3.jpg" },
    { id: 40, category: "men", subCategory: "pants", name: "Cardigan", price: 130, image: "img/pants m4.jpg" },
    { id: 41, category: "men", subCategory: "pants", name: "Turtle Neck", price: 110, image: "img/pants m5.jpg" },
    { id: 42, category: "men", subCategory: "pants", name: "Crew Neck", price: 95, image: "img/pants m6.jpg" },
    { id: 43, category: "men", subCategory: "pants", name: "Cable Knit", price: 140, image: "img/pants m7.jpg" },
    { id: 44, category: "men", subCategory: "pants", name: "Tech Fleece", price: 120, image: "img/pants m8.jpg" },
    { id: 45, category: "men", subCategory: "pants", name: "Light Knit", price: 85, image: "img/pants m9.jpg" },

    // --- ЖЕНСКАЯ КОЛЛЕКЦИЯ ---
    { id: 46, category: "women", subCategory: "shoes", name: "Classic Pumps", price: 160, image: "img/shoes w1.jpg" },
    { id: 47, category: "women", subCategory: "shoes", name: "Leather Boots", price: 210, image: "img/shoes w2.jpg" },
    { id: 48, category: "women", subCategory: "shoes", name: "Sneakers W", price: 120, image: "img/shoes w3.jpg" },
    { id: 49, category: "women", subCategory: "shoes", name: "Heels", price: 180, image: "img/shoes w4.jpg" },
    { id: 50, category: "women", subCategory: "shoes", name: "Loafers W", price: 130, image: "img/shoes w5.jpg" },
    { id: 51, category: "women", subCategory: "shoes", name: "Sandals", price: 90, image: "img/shoes w6.jpg" },
    { id: 52, category: "women", subCategory: "shoes", name: "Flats", price: 100, image: "img/shoes w7.jpg" },
    { id: 53, category: "women", subCategory: "shoes", name: "Platform", price: 190, image: "img/shoes w8.jpg" },
    { id: 54, category: "women", subCategory: "shoes", name: "Mules", price: 140, image: "img/shoes w9.jpg" },

    // T-shirts (9 товаров)
    { id: 55, category: "women", subCategory: "tshirts", name: "Silk Blouse", price: 150, image: "img/shirt w1.jpg" },
    { id: 56, category: "women", subCategory: "tshirts", name: "Cotton Tee", price: 45, image: "img/shirt w2.jpg" },
    { id: 57, category: "women", subCategory: "tshirts", name: "Crop Top", price: 50, image: "img/shirt w3.jpg" },
    { id: 58, category: "women", subCategory: "tshirts", name: "Lace Top", price: 80, image: "img/shirt w4.jpg" },
    { id: 59, category: "women", subCategory: "tshirts", name: "Graphic Tee", price: 40, image: "img/shirt w5.jpg" },
    { id: 60, category: "women", subCategory: "tshirts", name: "Tank Top", price: 35, image: "img/shirt w6.jpg" },
    { id: 61, category: "women", subCategory: "tshirts", name: "Polo Women", price: 60, image: "img/shirt w7.jpg" },
    { id: 62, category: "women", subCategory: "tshirts", name: "Ribbed Top", price: 55, image: "img/shirt w8.jpg" },
    { id: 63, category: "women", subCategory: "tshirts", name: "Off-Shoulder", price: 70, image: "img/shirt w9.jpg" },

    // Bags (9 товаров)
    { id: 64, category: "women", subCategory: "bags", name: "Elegant Tote", price: 260, image: "img/bags w1.jpg" },
    { id: 65, category: "women", subCategory: "bags", name: "Clutch Classic", price: 110, image: "img/bags w2.jpg" },
    { id: 66, category: "women", subCategory: "bags", name: "Crossbody", price: 180, image: "img/bags w3.jpg" },
    { id: 67, category: "women", subCategory: "bags", name: "Backpack Lux", price: 220, image: "img/bags w4.jpg" },
    { id: 68, category: "women", subCategory: "bags", name: "Shoulder Bag", price: 200, image: "img/bags w5.jpg" },
    { id: 69, category: "women", subCategory: "bags", name: "Mini Bag", price: 150, image: "img/bags w6.jpg" },
    { id: 70, category: "women", subCategory: "bags", name: "Satchel", price: 240, image: "img/bags w7.jpg" },
    { id: 71, category: "women", subCategory: "bags", name: "Hobo Bag", price: 190, image: "img/bags w8.jpg" },
    { id: 72, category: "women", subCategory: "bags", name: "Bucket Bag", price: 170, image: "img/bags w9.jpg" },

    // Pants (9 товаров)
    { id: 73, category: "women", subCategory: "pants", name: "Skinny Jeans", price: 95, image: "img/pants w1.jpg" },
    { id: 74, category: "women", subCategory: "pants", name: "Wide Trousers", price: 120, image: "img/pants w2.jpg" },
    { id: 75, category: "women", subCategory: "pants", name: "Leggings", price: 60, image: "img/pants w3.jpg" },
    { id: 76, category: "women", subCategory: "pants", name: "Culottes", price: 110, image: "img/pants w4.jpg" },
    { id: 77, category: "women", subCategory: "pants", name: "Chinos", price: 85, image: "img/pants w5.jpg" },
    { id: 78, category: "women", subCategory: "pants", name: "High-Waist", price: 100, image: "img/pants w6.jpg" },
    { id: 79, category: "women", subCategory: "pants", name: "Cargo Pants", price: 90, image: "img/pants w7.jpg" },
    { id: 80, category: "women", subCategory: "pants", name: "Joggers", price: 70, image: "img/pants w8.jpg" },
    { id: 81, category: "women", subCategory: "pants", name: "Flare Pants", price: 130, image: "img/pants w9.jpg" },

    // --- КОЛЛЕКЦИЯ ЧАСОВ ---
    { id: 82, category: "watches", subCategory: "luxury", name: "Gold Classic", price: 520, image: "img/Gold Classic.jpg" },
    { id: 83, category: "watches", subCategory: "luxury", name: "Silver Executive", price: 420, image: "img/Silver Executive.jpg" },
    { id: 84, category: "watches", subCategory: "sport", name: "Black Sport", price: 310, image: "img/Black Sport.jpg" },
    { id: 85, category: "watches", subCategory: "casual", name: "Leather Minimalist", price: 150, image: "img/Leather Minimalist.jpg" },
    { id: 86, category: "watches", subCategory: "luxury", name: "Rose Gold Lady", price: 280, image: "img/Rose Gold Lady.jpg" },
    { id: 87, category: "watches", subCategory: "luxury", name: "Chronograph Pro", price: 600, image: "img/Chronograph Pro.jpg" },
    { id: 88, category: "watches", subCategory: "luxury", name: "Automatic Master", price: 850, image: "img/Automatic Master.jpg" },
    { id: 89, category: "watches", subCategory: "sport", name: "Titanium Diver", price: 470, image: "img/Titanium Diver.jpg" },
    { id: 90, category: "watches", subCategory: "luxury", name: "Smart Lux", price: 390, image: "img/Smart Lux.jpg" },
    { id: 91, category: "watches", subCategory: "casual", name: "Vintage Square", price: 220, image: "img/Vintage Square.jpg" },
    { id: 92, category: "watches", subCategory: "luxury", name: "Diamond Accent", price: 990, image: "img/Diamond Accent.jpg" },
    { id: 93, category: "watches", subCategory: "sport", name: "Military Rugged", price: 180, image: "img/Military Rugged.jpg" }
];