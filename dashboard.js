// Simulate user login check
function isLoggedIn() {
    // Check localStorage for login status
    return localStorage.getItem('loggedIn') === 'false';
}

// Main function when user clicks "Cart" button
function addToCart() {
    if (isLoggedIn()) {
        alert("✅ Item added to your cart!");
        // Optionally, simulate cart data
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id: Date.now(), name: 'Classic Gold', price: 1499 });
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Cart:", cart);
    } else {
        alert("⚠️ You need to login first!");
        window.location.href = "signup.html"; // replace with your real signup URL
    }
}

// Optional: For testing login/logout
function login() {
    localStorage.setItem('loggedIn', 'true');
    alert("You are now logged in!");
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert("You are now logged out.");
}

document.addEventListener("DOMContentLoaded", function () {
    // Select the entire assistant section
    const assistantSection = document.querySelector(".assistant");

    // Add event listener to the assistant section
    assistantSection.addEventListener("click", function () {
        // Redirect to contact.html when the assistant section is clicked
        window.location.href = "contact.html";
    });
});


// your code goes here
const Mimi = document.getElementById('mimi');
const bubble = document.getElementById('bubble');

const quotes = [
  "Hi, I'm Mimi!",
  "I will help you navigate the website.",
  "You can reach me anytime."
];

let quoteIndex = 0;

// Show assistant after 3 seconds
setTimeout(() => {
  Mimi.style.opacity = 1;
  bubble.style.display = 'block';
  bubble.style.animation = 'fadeInBubble 1s ease forwards';
  showQuote();
}, 1000);

function showQuote() {
  if (quoteIndex < quotes.length) {
    bubble.innerText = quotes[quoteIndex];
    quoteIndex++;
    setTimeout(showQuote, 2000);
  } else {
    setTimeout(() => {
      bubble.style.display = 'none';
      shrinkAndMove();
    }, 200);
  }
}

function shrinkAndMove() {
  // First shrink
  

  // Then move to bottom-right corner
  setTimeout(() => {
    mimi.style.top = '85%';
    mimi.style.left = '95%';
    mimi.style.transform = 'translate(-100%, 0) scale(1)';
  }, 2000);
  
}