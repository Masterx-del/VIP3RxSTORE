// Navigate from home to order page with service and price params
function openOrder(service, price) {
  window.location.href = `order.html?service=${encodeURIComponent(service)}&price=${price}`;
}

// If on order page, populate values
if (window.location.pathname.includes("order.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service") || 'Service';
  const price = urlParams.get("price") || '0';

  const serviceTitle = document.getElementById("serviceTitle");
  const priceEl = document.getElementById("price");

  if (serviceTitle) serviceTitle.innerText = service;
  if (priceEl) priceEl.innerText = price;
}

// Confirm order (basic validation + demo flow)
function confirmOrder() {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service") || 'Service';
  const price = urlParams.get("price") || '0';
  const linkEl = document.getElementById("link");
  const link = linkEl ? linkEl.value.trim() : '';

  if (!link || !link.startsWith("http")) {
    alert("⚠️ Please enter a valid link (must start with http).");
    return;
  }

  // Demo: show summary and then reset form for next
  alert(`✅ Order Ready!\nService: ${service}\nPrice: ₹${price}\nLink: ${link}\n\n(This is a demo flow. To accept payments, integrate a payment gateway like Razorpay or Paytm.)`);
  // Optionally redirect to a 'thank you' page or call backend API here.
  if (linkEl) linkEl.value = '';
}
