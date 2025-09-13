# SMM Panel - Demo (Same-as-screenshot)

Ye project ek simple static SMM panel UI hai jo bilkul screenshot jaisa dikhne ke liye banaya gaya hai.
Isme 2 pages hain: `index.html` (service list) aur `order.html` (order form). JavaScript simple client-side navigation karta hai.

---

## Files
- `index.html` — Home / services list
- `order.html` — Order page
- `style.css` — Styling
- `script.js` — JavaScript logic

---

## Local run (beginner friendly)
1. Download and unzip the project (agar zip use kar rahe ho).
2. Folder khol ke `index.html` pe double-click karo — browser me khul jayega.
3. Better: agar VSCode use karte ho to **Live Server** extension install karo, phir `index.html` pe right-click -> "Open with Live Server". Hot-reload se aasan development hota hai.

---

## Push to GitHub
(agar Git installed hai)
```bash
cd path/to/smm-panel
git init
git add .
git commit -m "Initial commit - SMM panel demo"
# create a repo on GitHub, then:
git remote add origin https://github.com/yourusername/yourrepo.git
git branch -M main
git push -u origin main
```

---

## Deploy to Netlify (2 easy ways)

### Option A — Drag & Drop (fast)
1. Go to https://app.netlify.com/drop
2. Drag the project folder (NOT the zip) into the drop area.
3. Netlify will upload and give you a live URL.

### Option B — Connect GitHub
1. Push repo to GitHub (upar diya gaya).
2. In Netlify -> "New site from Git" -> connect GitHub -> select your repo -> Deploy.
3. Site will be auto-deployed and on each push Netlify will update.

---

## Make it exactly like screenshot (tips)
- Icons currently hotlink to icons8 (`img.icons8.com`). Agar offline chahiye to `assets/` folder banake images download karke waha rakho.
- CSS uses rounded cards, shadow, purple header — edit `style.css` to change colors and spacing.

---

## Add a payment gateway (simple idea)
Demo currently shows an `alert()` on confirm. To accept real payments:
1. Register on Razorpay (recommended for India).
2. Use Razorpay Checkout script on the order page and call checkout on `confirmOrder()` after validating the link.
3. On payment success, call your backend API to create/store order.

Razorpay quick example (conceptual, do on server + client):
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
  // after validate
  var options = {
    "key": "YOUR_KEY_ID",
    "amount": price*100,
    "name": "Your Shop",
    "description": service,
    "handler": function (response){
      // send response.razorpay_payment_id to your server to verify + create order
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
</script>
```

---

## Troubleshooting (common beginner errors)
- Blank page? Check console (F12) for errors.
- CSS not loading? Check `link` path (`style.css`) relative to HTML.
- JS not running? Ensure `<script src="script.js" defer></script>` or place script at bottom of body.
- Git push error? Make sure remote URL is correct and you have permission.

---

Agar chaho to main ye ZIP bana ke diya hua link se download karwa dunga. Agar tum chahte ho, main payment integration (Razorpay) bhi step-by-step add kar doon.
