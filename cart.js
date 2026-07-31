document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const sampleTemplate = document.getElementById("sample-product-template");
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");
  
    // Retrieve the cart from localStorage or initialize as an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      // Show a sample product in the cart if it's empty, with a price of 0
      const sampleProduct = { id: 1, name: "Sample Product", price: 0, quantity: 1 };
      const sample = sampleTemplate.content.cloneNode(true);
      cart.push(sampleProduct);  // Add the sample product to the cart
  
      cartItemsContainer.appendChild(sample);
      updateCartTotals(cart);
    } else {
      // Show real cart items and update the total
      cart.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("cart-item");
        productEl.innerHTML = `
          <img src="https://via.placeholder.com/80" class="item-thumbnail" />
          <div class="item-details">
            <h4>${product.name}</h4>
            <p>Product in cart</p>
            <span>$${product.price.toFixed(2)}</span>
            <div class="quantity-controls">
              <button class="quantity-btn" data-action="decrease" data-id="${product.id}">-</button>
              <span class="quantity" data-id="${product.id}">${product.quantity}</span>
              <button class="quantity-btn" data-action="increase" data-id="${product.id}">+</button>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(productEl);
      });
      
      // Recalculate total
      updateCartTotals(cart);
    }
  
    // Attach event listeners for quantity change buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
      button.addEventListener('click', e => {
        const action = e.target.getAttribute('data-action');
        const productId = e.target.getAttribute('data-id');
  
        if (action === "increase") {
          updateQuantity(productId, 1);  // Increase quantity by 1
        } else if (action === "decrease") {
          updateQuantity(productId, -1);  // Decrease quantity by 1
        }
      });
    });
  });
  
  // Function to update product quantity and recalculate total
  function updateQuantity(productId, change) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === productId);
  
    if (item) {
      // Update the quantity
      item.quantity += change;
  
      // Prevent negative quantities
      if (item.quantity < 1) {
        item.quantity = 1;
      }
  
      // Update cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Recalculate the total
      updateCartTotals(cart);
    }
  }
  
  // Function to update the subtotal and total after any cart update
  function updateCartTotals(cart) {
    let total = 0;
  
    // Loop through all cart items and update the total based on the price and quantity
    cart.forEach(product => {
      total += product.price * product.quantity;  // Price for each product
    });
  
    // Update the subtotal and total elements on the page
    document.getElementById("subtotal").textContent = `$${total.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  
    // Update the quantity display for each product
    cart.forEach(product => {
      const quantitySpan = document.querySelector(`.quantity[data-id="${product.id}"]`);
      if (quantitySpan) {
        quantitySpan.textContent = product.quantity;
      }
    });
  }
  