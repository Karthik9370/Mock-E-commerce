// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = count;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartBadge();
  const message = document.getElementById("cart-message");
  if (message) {
    message.textContent = `✅ "${product.name}" added to cart!`;
    setTimeout(() => (message.textContent = ""), 2000);
  }
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (category === "" || p.category === category)
  );

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const info = document.createElement("div");
    info.className = "product-info";
    info.innerHTML = `
      <h3>${product.name}</h3>
      <div class="price">$${product.price.toFixed(2)}</div>
    `;

    const button = document.createElement("button");
    button.className = "add-btn";
    button.textContent = "Add to Cart";
    button.onclick = () => addToCart(product.id);

    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(button);

    grid.appendChild(card);
  });
}

function filterProducts() {
  renderProducts();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

function renderCartPage() {
  const itemsDiv = document.getElementById("cartItems");
  const totalDiv = document.getElementById("cartTotal");
  if (!itemsDiv || !totalDiv) return;

  itemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "cart-item";

    wrapper.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQuantity('${item.id}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)">+</button>
        <button onclick="removeItem('${item.id}')">🗑️</button>
      </div>
    `;

    total += item.price * item.quantity;
    itemsDiv.appendChild(wrapper);
  });

  totalDiv.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
}

function changeQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCartPage();
  updateCartBadge();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartPage();
  updateCartBadge();
}

// Init
window.onload = () => {
  updateCartBadge();
  if (document.getElementById("productGrid")) renderProducts();
  if (document.getElementById("cartItems")) renderCartPage();
};
