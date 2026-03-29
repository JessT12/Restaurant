/* SHOPPING CART LOGIC*/
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartIcon = document.querySelector('.cart-icon');
let body = document.querySelector('body');
let closeCartBtn = document.querySelector('.closeCart');
let clearCartBtn = document.querySelector('.clearCart');

const cartCount = document.querySelector('.cart-count');

// OPEN CART
if (cartIcon) {
  cartIcon.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.add('showCart');
  });
}

// CLOSE CART
if (closeCartBtn) {
  closeCartBtn.addEventListener('click', function() {
    body.classList.remove('showCart');
  });
}

// CLEAR CART
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', function() {
    cart = [];
    updateCart();
  });
}


const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElem = document.getElementById('cart-total');

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');
    const name = card.dataset.name;
    const price = Number(card.dataset.price);
    const image = card.dataset.image;

    // Check if item already exists
    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        name,
        price,
        quantity: 1,
        image
      });
    }

    updateCart();
  });
});

function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElem = document.getElementById('cart-total');
  const cartCount = document.querySelector('.cart-count');

  if (!cartItemsContainer || !cartTotalElem || !cartCount) return;

  cartItemsContainer.innerHTML = '';

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <img src="${item.image}" class="cart-item-img">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price}</p>
        <p class="cart-item-quantity">Qty: ${item.quantity}</p>
      </div>
      <button class="cart-item-remove">Remove</button>
    `;

    cartItem.querySelector('.cart-item-remove').addEventListener('click', () => {
      cart = cart.filter(i => i.name !== item.name);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    });

    cartItemsContainer.appendChild(cartItem);
  });

  cartTotalElem.textContent = total.toFixed(2);
  cartCount.textContent = count;

  localStorage.setItem('cart', JSON.stringify(cart));
}



updateCart();
