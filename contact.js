function openContactModal() {
    const modal = document.getElementById("contactModal");
    const left = document.querySelector(".ribbon-left");
    const right = document.querySelector(".ribbon-right");
    const pattern = document.querySelector(".pattern-overlay");
  
    modal.style.display = "flex";
  
    // Animate ribbons
    left.style.animation = "ribbonLeftInverted 1s forwards";
    right.style.animation = "ribbonRight 1s forwards";
  
    // Show pattern after ribbon animation
    setTimeout(() => {
      pattern.style.opacity = "1";
    }, 1000);
  }
  
  function closeContactModal() {
    const modal = document.getElementById("contactModal");
    const left = document.querySelector(".ribbon-left");
    const right = document.querySelector(".ribbon-right");
    const pattern = document.querySelector(".pattern-overlay");
  
    modal.style.display = "none";
  
    // Remove ribbons and pattern
    left.style.animation = "none";
    right.style.animation = "none";
    pattern.style.opacity = "0";
  
    // Reset ribbon positions
    left.style.right = "-50%";
    right.style.right = "-50%";
  
    // Redirect to homepage after cancel
    window.location.href = "dashboard.html";
  }
  
  function sendEmail() {
    const nameInput = document.getElementById("userName").value.trim();
    const messageInput = document.getElementById("userMessage").value.trim();
    const emailInput = document.getElementById("userEmail").value.trim();
  
    const subject = `Message from ${nameInput || "Princime User"}`;
    const body = messageInput || "Hi Buddy,\n\nI wanted to get in touch with you!";
  
    const mailtoLink = `mailto:princetiwari1306@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=${encodeURIComponent(emailInput)}`;
  
    // Open the user's mail client
    function sendEmail() {
        const nameInput = document.getElementById("userName").value.trim();
        const messageInput = document.getElementById("userMessage").value.trim();
        const emailInput = document.getElementById("userEmail").value.trim();
      
        // Define subject and body for the email
        const subject = `Message from ${nameInput || "Princime User"}`;
        const body = messageInput || "Hi Buddy,\n\nI wanted to get in touch with you!";
      
        // Create the mailto link
        const mailtoLink = `mailto:princetiwari1306@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=${encodeURIComponent(emailInput)}`;
      
        // Redirect to the mailto link, which will open the default email client
        window.location.href = "mailto:princetiwari1306@gmail.com";
      
        // Close the modal after sending the email
        closeContactModal();
      }
      
  
    // Close modal and redirect
    setTimeout(() => {
      closeContactModal();
      window.location.href = "dashboard.html";
    }, 200); // short delay to allow mail client to open
  }
