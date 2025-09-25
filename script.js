// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied: " + text);
  }).catch(err => {
    console.error("Error copying text: ", err);
  });
}

// Function to show a toast notification
function showToast(message) {
  // Create toast div
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  // Add toast to body
  document.body.appendChild(toast);

  // Show animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide and remove after 3s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
