const products = [
    // 🪑 CHAIRS
    {
      name: "Green Soul Monster Ultimate Gaming Chair",
      category: "chair",
      price: 14999,
      image: "https://m.media-amazon.com/images/I/61qN1VApYbL._SL1500_.jpg",
      badge: "🔥 Best Seller"
    },
    {
      name: "Ergonomic Mesh Office Chair",
      category: "chair",
      price: 7999,
      image: "https://m.media-amazon.com/images/I/61Q72FQDrkL._SL1500_.jpg"
    },
    {
      name: "Reclining High Back Gaming Chair",
      category: "chair",
      price: 9999,
      image: "https://m.media-amazon.com/images/I/71xgEjyLnoL._SL1500_.jpg"
    },
    {
      name: "INNOWIN Jazz High Back Mesh Chair",
      category: "chair",
      price: 8499,
      image: "https://m.media-amazon.com/images/I/61PGVylZ-sL._SL1500_.jpg"
    },
  
    // 🎧 EARBUDS
    {
      name: "boAt Airdopes 141",
      category: "earbuds",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg",
      badge: "💥 Deal"
    },
    {
      name: "OnePlus Nord Buds 2",
      category: "earbuds",
      price: 2299,
      image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg"
    },
    {
      name: "Noise Buds VS104",
      category: "earbuds",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/61O16zR2spL._SL1500_.jpg"
    },
  
    // 🔊 SPEAKERS
    {
      name: "JBL Go 3 Portable Speaker",
      category: "speaker",
      price: 3199,
      image: "https://m.media-amazon.com/images/I/81l94bM6f-L._SL1500_.jpg",
      badge: "🎵 Trending"
    },
    {
      name: "boAt Stone 620 Bluetooth Speaker",
      category: "speaker",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/81Gh6kxQ24L._SL1500_.jpg"
    },
    {
      name: "Zebronics Zeb-County Bluetooth Speaker",
      category: "speaker",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61B04f0ALZL._SL1500_.jpg"
    },
  
    // ⌚ FITNESS & SMARTWATCHES
    {
      name: "Noise ColorFit Pulse 2",
      category: "tracker",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/61EPBDz9vvL._SL1500_.jpg",
      badge: "⭐ Top Pick"
    },
    {
      name: "boAt Storm Call 2",
      category: "tracker",
      price: 1599,
      image: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg"
    },
    {
      name: "Fire-Boltt Phoenix AMOLED",
      category: "tracker",
      price: 2999,
      image: "https://m.media-amazon.com/images/I/61bK6P06N7L._SL1500_.jpg"
    },
  
    // 🧩 ACCESSORIES
    {
      name: "Zebronics Transformer Gaming Keyboard & Mouse",
      category: "accessories",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71kr3WAj1FL._SL1500_.jpg"
    },
    {
      name: "TP-Link WiFi Range Extender",
      category: "accessories",
      price: 1899,
      image: "https://m.media-amazon.com/images/I/61k9ErDgJjL._SL1500_.jpg"
    },
    {
      name: "Ant Esports ICE 200TG Gaming Cabinet",
      category: "accessories",
      price: 3699,
      image: "https://m.media-amazon.com/images/I/71NdNDxCX1L._SL1500_.jpg"
    },
  
    // 💡 LIGHTING
    {
      name: "Syska LED Smart Bulb 12W",
      category: "lighting",
      price: 749,
      image: "https://m.media-amazon.com/images/I/61a6ViK75DL._SL1500_.jpg",
      badge: "✨ Smart Home"
    },
  
    // 👕 APPAREL
    {
      name: "Wrogn Oversized Men’s T-Shirt",
      category: "apparel",
      price: 899,
      image: "https://m.media-amazon.com/images/I/71Kc1ZgMuJL._SL1500_.jpg"
    },
    {
      name: "Puma Unisex Sneakers",
      category: "apparel",
      price: 2499,
      image: "https://m.media-amazon.com/images/I/81pyyR06lXL._SL1500_.jpg",
      badge: "🆕 Drop"
    },
  
    // 📱 MOBILES
    {
      name: "Redmi Note 13 5G",
      category: "mobiles",
      price: 17999,
      image: "https://m.media-amazon.com/images/I/81nC8LK8CML._SL1500_.jpg",
      badge: "🔥 Hot Deal"
    },
    {
      name: "Samsung Galaxy M14",
      category: "mobiles",
      price: 13999,
      image: "https://m.media-amazon.com/images/I/81r1A4rN8JL._SL1500_.jpg"
    },
  
    // 💻 LAPTOPS
    {
      name: "HP 15s Ryzen 5 Laptop",
      category: "laptops",
      price: 45999,
      image: "https://m.media-amazon.com/images/I/71W6Y9eN4zL._SL1500_.jpg",
      badge: "💼 Work Ready"
    },
    {
      name: "ASUS Vivobook OLED",
      category: "laptops",
      price: 55999,
      image: "https://m.media-amazon.com/images/I/81+vPYvXkAL._SL1500_.jpg"
    },
  
    // 🍳 KITCHEN APPLIANCES
    {
      name: "Prestige Induction Cooktop",
      category: "kitchen",
      price: 2799,
      image: "https://m.media-amazon.com/images/I/61qmuIDjzqL._SL1500_.jpg"
    },
    {
      name: "Bajaj Mixer Grinder 500W",
      category: "kitchen",
      price: 2399,
      image: "https://m.media-amazon.com/images/I/61-7IRG7VvL._SL1500_.jpg"
    },
  
    // 🏠 HOME ESSENTIALS
    {
      name: "Milton Thermosteel Water Bottle 1L",
      category: "home",
      price: 699,
      image: "https://m.media-amazon.com/images/I/51J3KYJYyaL._SL1500_.jpg"
    },
    {
      name: "Scotch-Brite Twin Bucket Spin Mop",
      category: "home",
      price: 2299,
      image: "https://m.media-amazon.com/images/I/71f7wqDlAzL._SL1500_.jpg",
      badge: "🧼 Bestseller"
    },
      // 🖥️ Monitors
  {
    name: "LG 24-inch Full HD IPS Monitor",
    category: "accessories",
    price: 9999,
    image: "https://m.media-amazon.com/images/I/61D1WcU8UHL._SL1500_.jpg",
    badge: "🆕 Arrival"
  },
  {
    name: "Samsung Curved LED Monitor 27-inch",
    category: "accessories",
    price: 15499,
    image: "https://m.media-amazon.com/images/I/71trhuzbhML._SL1500_.jpg"
  },

  // 🧴 Personal Care
  {
    name: "Philips Beard Trimmer BT3221",
    category: "home",
    price: 1899,
    image: "https://m.media-amazon.com/images/I/61Q2Zyj1zZL._SL1500_.jpg",
    badge: "✨ Grooming"
  },
  {
    name: "Nova Professional Hair Dryer",
    category: "home",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61b3tZLwThL._SL1500_.jpg"
  },

  // 🎮 Gaming Controllers
  {
    name: "Redgear Pro Series Wired Gamepad",
    category: "accessories",
    price: 1699,
    image: "https://m.media-amazon.com/images/I/61MZEvKcURL._SL1500_.jpg"
  },
  {
    name: "Cosmic Byte C3070W Wireless Gamepad",
    category: "accessories",
    price: 2099,
    image: "https://m.media-amazon.com/images/I/61kN9jUfpbL._SL1500_.jpg",
    badge: "🔥 Gamer Fav"
  },

  // 🔌 Power Banks
  {
    name: "Ambrane 20000mAh Power Bank",
    category: "accessories",
    price: 1399,
    image: "https://m.media-amazon.com/images/I/51cRUzrhYML._SL1500_.jpg"
  },
  {
    name: "Redmi 10000mAh Fast Charging Power Bank",
    category: "accessories",
    price: 1199,
    image: "https://m.media-amazon.com/images/I/61rH1P1OkXL._SL1500_.jpg",
    badge: "💥 Deal"
  },

  // 👟 More Apparel
  {
    name: "HRX Active Joggers for Men",
    category: "apparel",
    price: 1199,
    image: "https://m.media-amazon.com/images/I/51poaG2p8QL._SL1500_.jpg"
  },
  {
    name: "Campus Maxico Running Shoes",
    category: "apparel",
    price: 1349,
    image: "https://m.media-amazon.com/images/I/71PpG4RPv5L._SL1500_.jpg",
    badge: "⭐ Top Rated"
  },

  // 🧊 Cooling & Appliances
  {
    name: "Symphony Personal Air Cooler",
    category: "home",
    price: 6499,
    image: "https://m.media-amazon.com/images/I/81oc4vMabmL._SL1500_.jpg"
  },
  {
    name: "Voltas Adjustable Tower Fan",
    category: "home",
    price: 3599,
    image: "https://m.media-amazon.com/images/I/71WqWaVfWnL._SL1500_.jpg",
    badge: "🌬️ Summer Pick"
  },

  ];
  