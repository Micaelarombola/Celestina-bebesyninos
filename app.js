const WHATSAPP_PHONE = "5491162283678"; // ✅ CAMBIAR
const STORAGE_KEY = "celestina_cart_sections_v1";

// DOM
const enterBtn = document.getElementById("enterBtn");
const cover = document.getElementById("cover");
const store = document.getElementById("store");
const bubbles = document.getElementById("bubbles");

const retailBtn = document.getElementById("retailBtn");
const wholesaleBtn = document.getElementById("wholesaleBtn");
const modeHint = document.getElementById("modeHint");

const catalogRoot = document.getElementById("catalogRoot");
const featuredRow = document.getElementById("featuredRow");

const searchInput = document.getElementById("searchInput");
const chips = Array.from(document.querySelectorAll(".chip"));

const goCatalogBtn = document.getElementById("goCatalogBtn");
const catalogSection = document.getElementById("catalogSection");

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartBtn = document.getElementById("closeCartBtn");
const backdrop = document.getElementById("backdrop");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");

const checkoutForm = document.getElementById("checkoutForm");
const cName = document.getElementById("cName");
const cPhone = document.getElementById("cPhone");
const cZone = document.getElementById("cZone");
const cNotes = document.getElementById("cNotes");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const faq = document.getElementById("faq");
const openCartCta = document.getElementById("openCartCta");
const footerWhatsapp = document.getElementById("footerWhatsapp");
document.getElementById("year").textContent = new Date().getFullYear();

// DATA (demo - reemplazás por productos reales + fotos reales)
const PRODUCTS = [
  // ===== AJUAR =====
  {
    id: "aj1",
    name: "Ajuar 1",
    category: "Ajuar",
    priceRetail: 25000,
    priceWholesale: 22000,
    wholesaleMinQty: 2,
    images: [
      "assets/ajuar1.png",
      "assets/ajuar2.png",
      "assets/ajuar3.png",
      "assets/ajuar4.png"
    ],
    note: "A pedido · Consultar talle y colores",
    featured: true
  },

  // ===== BLUSAS =====
  {
    id: "bl1",
    name: "Blusa Carmela",
    category: "Blusas",
    priceRetail: 14500,
    priceWholesale: 12200,
    wholesaleMinQty: 3,
    images: [
      "assets/blusa-carmela.csv",
      "assets/blusa-carmela.jfif",
      "assets/Blusa-Carmela1.jfif",
      "assets/Blusa-Carmela2.csv"

    ],
    note: "A pedido · Consultar talles",
    featured: true
  },
  {
    id: "bl2",
    name: "Blusa Celestina",
    category: "Blusas",
    priceRetail: 18500,
    priceWholesale: 15500,
    wholesaleMinQty: 6,
    images: [
      "assets/blusa-celestina.csv",
    ],
    note: "A pedido · Consultar talles y colores",
    featured: false
  },

  // ===== BODY =====
  {
    id: "bo1",
    name: "Body Ciro",
    category: "Body",
    priceRetail: 9800,
    priceWholesale: 8200,
    wholesaleMinQty: 4,
    images: [
      "assets/Body-ciro.png"
    ],
    note: "A pedido · Ideal para bebé",
    featured: true
  },

  // ===== CAMISA =====
  {
    id: "ca1",
    name: "Camisa Amelia",
    category: "Camisa",
    priceRetail: 16800,
    priceWholesale: 14200,
    wholesaleMinQty: 3,
    images: [
      "assets/Camisa-Amelia.jfif",
      "assets/Camisa-Amelia1.jfif",
    ],
    note: "A pedido · Modelo clásico",
    featured: true
  },
  {
    id: "ca2",
    name: "Camisa Catalina",
    category: "Camisa",
    priceRetail: 16800,
    priceWholesale: 14200,
    wholesaleMinQty: 3,
    images: [
      "assets/Camisa-catalina.jfif"
    ],
    note: "A pedido · Consultar medidas",
    featured: false
  },
{
  id:"cam2",
  name:"Camisa Angelita",
  category:"Camisa",
  priceRetail:21000,
  priceWholesale:17500,
  wholesaleMinQty:6,
  images:[
    "assets/camisa-angelita.csv",
    "assets/camisa-angelita2.csv",

  ],
  note:"A pedido · Consultar talles y colores",
  featured:false
},

{
  id:"cam4",
  name:"Camisa Dante",
  category:"Camisa",
  priceRetail:22000,
  priceWholesale:18500,
  wholesaleMinQty:6,
  images:[
    "assets/camisa-dante.csv",
    
  ],
  note:"A pedido · Consultar talles y colores",
  featured:false
},
  // ===== CHALECO =====
  {
    id: "ch1",
    name: "Chaleco Sofía",
    category: "Chaleco",
    priceRetail: 15400,
    priceWholesale: 12900,
    wholesaleMinQty: 3,
    images: [
      "assets/chaleco-sofia.csv"
    ],
    note: "A pedido · Terminación artesanal",
    featured: false
  },

  // ===== CONJUNTO =====
  {
    id: "co1",
    name: "Conjunto Victoria",
    category: "Conjunto",
    priceRetail: 22000,
    priceWholesale: 18800,
    wholesaleMinQty: 2,
    images: [
      "assets/conjunto-victoria.csv"
    ],
    note: "A pedido · Conjunto completo",
    featured: true
  },

  // ===== JUMPER =====
  {
    id: "ju1",
    name: "Jumper Grace",
    category: "Jumper",
    priceRetail: 19500,
    priceWholesale: 16800,
    wholesaleMinQty: 2,
    images: [
      "assets/jumper-grace.csv"
    ],
    note: "A pedido · Súper delicado",
    featured: false
  },
  {
    id: "ju2",
    name: "Jumper Noelia",
    category: "Jumper",
    priceRetail: 19500,
    priceWholesale: 16800,
    wholesaleMinQty: 2,
    images: [
      "assets/jumper-noelia.csv"
    ],
    note: "A pedido · Consultar colores",
    featured: false
  },

  // ===== MONO =====
  {
    id: "mo1",
    name: "Mono Kyra",
    category: "Mono",
    priceRetail: 18500,
    priceWholesale: 15800,
    wholesaleMinQty: 2,
    images: [
      "assets/Mono-kyra.csv"
    ],
    note: "A pedido · Diseño cómodo",
    featured: false
  },

  // ===== PANTALONES =====
  {
    id: "pa1",
    name: "Pantalón Abril",
    category: "Pantalones",
    priceRetail: 14900,
    priceWholesale: 12600,
    wholesaleMinQty: 3,
    images: [
      "assets/Pantalon-abril.jfif",
      "assets/Pantalon-abril1.jfif",
      "assets/Pantalon-abril2.jfif",
      "assets/Pantalon-abril3.jfif"
    ],
    note: "A pedido · Consultar talle",
    featured: true
  },
  {
    id: "pa2",
    name: "Pantalón Milo",
    category: "Pantalones",
    priceRetail: 14900,
    priceWholesale: 12600,
    wholesaleMinQty: 3,
    images: [
      "assets/pantalon-milo.csv",
      "assets/pantalon-milo2.csv"
    ],
    note: "A pedido · Varios colores",
    featured: false
  },
  {
    id: "pa3",
    name: "Pantalón Trini",
    category: "Pantalones",
    priceRetail: 14900,
    priceWholesale: 12600,
    wholesaleMinQty: 3,
    images: [
      "assets/pantalon-trini.csv"
    ],
    note: "A pedido · Corte cómodo",
    featured: false
  },
  {
    id: "pa4",
    name: "Pantalón Umma",
    category: "Pantalones",
    priceRetail: 15200,
    priceWholesale: 12900,
    wholesaleMinQty: 3,
    images: [
      "assets/Pantalon-umma.jfif",
      "assets/Pantalon-umma1.jfif",
      "assets/Pantalon-umma2.jfif",
      "assets/Pantalon-umma3.jfif"
    ],
    note: "A pedido · Modelo infantil",
    featured: true
  },

  // ===== POLLERA =====
  {
    id: "po1",
    name: "Pollera",
    category: "Pollera",
    priceRetail: 14200,
    priceWholesale: 11900,
    wholesaleMinQty: 3,
    images: [
      "assets/Pollera.jfif",
      "assets/Pollera1.jfif"
    ],
    note: "A pedido · Consultar medidas",
    featured: false
  },
  {
    id: "po2",
    name: "Pollera Daia",
    category: "Pollera",
    priceRetail: 14200,
    priceWholesale: 11900,
    wholesaleMinQty: 3,
    images: [
      "assets/pollera-daia.csv",
      "assets/pollera-daia2.csv"
    ],
    note: "A pedido · Modelo delicado",
    featured: false
  },
  {
    id: "po3",
    name: "Pollera Magali",
    category: "Pollera",
    priceRetail: 14200,
    priceWholesale: 11900,
    wholesaleMinQty: 3,
    images: [
      "assets/Pollera-magali.csv"
    ],
    note: "A pedido · Diseño artesanal",
    featured: false
  },

  // ===== VESTIDO =====
  {
    id: "ve1",
    name: "Vestido Vera",
    category: "Vestido",
    priceRetail: 21000,
    priceWholesale: 18200,
    wholesaleMinQty: 2,
    images: [
      "assets/Vestido-vera.csv"
    ],
    note: "A pedido · Ideal para ocasión especial",
    featured: true
  }
];

const FAQ = [
  { q: "¿Hay stock?", a: "No, trabajamos por pedido. Elegís modelos y se confecciona especialmente para vos." },
  { q: "¿Cómo se paga?", a: "Se abona 50% de seña para iniciar la confección y el saldo al entregar/retirar." },
  { q: "¿Cuánto demora?", a: "Aprox 15 días (según el pedido). Si necesitás para una fecha, avisame en notas." },
  { q: "¿Mayorista cómo funciona?", a: "Mayorista tiene precio especial por cantidad (mínimos por producto). Te confirmo todo por WhatsApp." },
];

let pricingMode = "retail";  // retail | wholesale
let cart = loadCart();
let activeCategory = "all";
let query = "";

// COVER -> STORE
enterBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  store.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// bubbles cover
function spawnBubble() {
  const b = document.createElement("div");
  b.className = "bubble";
  const size = 6 + Math.random() * 12;
  b.style.width = `${size}px`;
  b.style.height = `${size}px`;
  b.style.left = `${Math.random() * 100}%`;
  b.style.opacity = `${0.25 + Math.random() * 0.35}`;
  b.style.animationDuration = `${5 + Math.random() * 5}s`;
  bubbles.appendChild(b);
  setTimeout(() => b.remove(), 11000);
}
setInterval(spawnBubble, 420);

// Scroll to catalog
goCatalogBtn.addEventListener("click", () => {
  catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// MODE
function setMode(mode) {
  pricingMode = mode;
  retailBtn.classList.toggle("active", mode === "retail");
  wholesaleBtn.classList.toggle("active", mode === "wholesale");
  modeHint.textContent = `Modo: ${mode === "retail" ? "Minorista" : "Mayorista"}`;

  renderFeatured();
  renderProducts();
  renderCart();
}
retailBtn.addEventListener("click", () => setMode("retail"));
wholesaleBtn.addEventListener("click", () => setMode("wholesale"));

// FILTERS
chips.forEach(ch => {
  ch.addEventListener("click", () => {
    activeCategory = ch.dataset.category;
    chips.forEach(x => x.classList.toggle("active", x === ch));
    renderProducts();
  });
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  renderProducts();
});

function getPrice(p) {
  return pricingMode === "retail" ? p.priceRetail : p.priceWholesale;
}

function filteredProducts() {
  return PRODUCTS.filter(p => {
    const catOk = activeCategory === "all" ? true : p.category === activeCategory;
    const qOk = query
      ? (
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.note || "").toLowerCase().includes(query)
      )
      : true; return catOk && qOk;
  });
}

function productCard(p, scope = "catalog", idx = 0) {
  const price = getPrice(p);
  const extra = pricingMode === "wholesale"
    ? `Mín. ${p.wholesaleMinQty || 1} u por mayor`
    : "Venta minorista";

  const imgs = Array.isArray(p.images) && p.images.length ? p.images : [];
  const carouselId = `${scope}-${p.id}-${idx}`;

  return `
    <article class="card">
      <div class="carousel" data-carousel="${carouselId}">
        <div class="carousel-track" data-track="${carouselId}">
          ${imgs.map(src => `<img src="${src}" alt="${escapeHtml(p.name)}" data-zoom="${src}">`).join("")}
        </div>

        ${imgs.length > 1 ? `
          <button class="carousel-btn prev" type="button" data-prev="${carouselId}">‹</button>
          <button class="carousel-btn next" type="button" data-next="${carouselId}">›</button>

          <div class="carousel-dots" data-dots="${carouselId}">
            ${imgs.map((_, i) => `
              <span class="dot ${i === 0 ? "active" : ""}" data-dot="${carouselId}" data-index="${i}"></span>
            `).join("")}
          </div>
        ` : ""}
      </div>

      <div class="card-body">
        <div class="meta">
          <span>${escapeHtml(p.category)}</span>
          <span class="price">$${formatMoney(price)}</span>
        </div>

        <h3 class="card-title">${escapeHtml(p.name)}</h3>
        <div class="small">${escapeHtml(p.note || "A pedido")}</div>
        <div class="small">${escapeHtml(extra)}</div>

        <div class="actions">
          <button class="btn btn-soft" data-action="add" data-id="${p.id}" type="button">Agregar</button>
          <button class="btn btn-add" data-action="cart" data-id="${p.id}" type="button">Pedir</button>
        </div>
      </div>
    </article>
  `;
}
function renderCatalogBySections() {
  const sections = [
    { key: "Ajuar", desc: "Prendas y sets para bebé" },
    { key: "Blusas", desc: "Blusas delicadas y a pedido" },
    { key: "Body", desc: "Bodies para bebé" },
    { key: "Camisa", desc: "Camisas infantiles" },
    { key: "Chaleco", desc: "Chalecos tejidos y confeccionados" },
    { key: "Conjunto", desc: "Conjuntos completos" },
    { key: "Jumper", desc: "Jumpers para nenas" },
    { key: "Mono", desc: "Monos cómodos y delicados" },
    { key: "Pantalones", desc: "Pantalones infantiles" },
    { key: "Pollera", desc: "Polleras confeccionadas a pedido" },
    { key: "Vestido", desc: "Vestidos para ocasiones especiales" }
  ];

  const list = filteredProducts();

  catalogRoot.innerHTML = sections.map(section => {
    const items = list.filter(p => p.category === section.key);
    if (items.length === 0) return "";

    return `
      <section class="cat-section" id="sec-${section.key}">
        <div class="cat-section-head">
          <div>
            <h4>${section.key}</h4>
            <p>${section.desc}</p>
          </div>
        </div>

        <div class="cat-grid">
          ${items.map((p, idx) => productCard(p, `catalog-${section.key}`, idx)).join("")}
        </div>
      </section>
    `;
  }).join("");

  initCarousels();
}
function renderProducts() {
  renderCatalogBySections();
}

function renderFeatured() {
  const featured = PRODUCTS.filter(p => p.featured);
  featuredRow.innerHTML = featured.map((p, idx) => productCard(p, "featured", idx)).join("");
  initCarousels();
}

/* ======================
   CLICK HANDLERS (global)
====================== */


// LIGHTBOX
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index = 0) {
  if (!images || !images.length) return;
  lightboxImages = images;
  lightboxIndex = index;
  updateLightbox();
  lightbox.classList.remove("hidden");
}

function updateLightbox() {
  if (!lightboxImages.length) return;
  lightboxImg.src = lightboxImages[lightboxIndex];

  const showNav = lightboxImages.length > 1;
  lightboxPrev.style.display = showNav ? "grid" : "none";
  lightboxNext.style.display = showNav ? "grid" : "none";
}

function prevLightbox() {
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

function nextLightbox() {
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightbox();
}

function closeLb() {
  lightbox.classList.add("hidden");
  lightboxImg.src = "";
  lightboxImages = [];
  lightboxIndex = 0;
}

closeLightbox.addEventListener("click", closeLb);
lightboxPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  prevLightbox();
});
lightboxNext.addEventListener("click", (e) => {
  e.stopPropagation();
  nextLightbox();
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLb();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("hidden")) return;

  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") prevLightbox();
  if (e.key === "ArrowRight") nextLightbox();
});

/* ======================
   CAROUSEL
====================== */
const carouselState = {};

function setCarousel(carouselId, index) {
  const track = document.querySelector(`[data-track="${carouselId}"]`);
  const dotsWrap = document.querySelector(`[data-dots="${carouselId}"]`);
  if (!track) return;

  const slides = track.querySelectorAll("img");
  const total = slides.length;
  if (!total) return;

  let nextIndex = index;

  if (index < 0) nextIndex = total - 1;
  if (index >= total) nextIndex = 0;

  carouselState[carouselId] = nextIndex;
  track.style.transform = `translateX(-${nextIndex * 100}%)`;

  if (dotsWrap) {
    dotsWrap.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === nextIndex);
    });
  }
}

document.addEventListener("click", (e) => {
  const zoom = e.target.closest("img[data-zoom]");
  if (zoom) {
    const track = zoom.closest(".carousel-track");
    if (track) {
      const imgs = Array.from(track.querySelectorAll("img[data-zoom]"));
      const sources = imgs.map(img => img.dataset.zoom);
      const index = imgs.findIndex(img => img === zoom);
      openLightbox(sources, index >= 0 ? index : 0);
      return;
    }
  }

  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  if (btn.dataset.action === "add") addToCart(id, 1);
  if (btn.dataset.action === "cart") { addToCart(id, 1); openCart(); }
});

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(el => {
    const id = el.dataset.carousel;
    carouselState[id] = carouselState[id] ?? 0;
    setCarousel(id, carouselState[id]);
  });
}

/* ======================
   CART
====================== */
function addToCart(id, qty) {
  const it = cart.find(x => x.id === id);
  if (it) it.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const it = cart.find(x => x.id === id);
  if (!it) return;
  it.qty = Math.max(1, it.qty + delta);
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function totals() {
  let total = 0, count = 0;
  cart.forEach(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    if (!p) return;
    total += getPrice(p) * i.qty;
    count += i.qty;
  });
  return { total, count };
}

function renderCart() {
  const { total, count } = totals();
  cartCount.textContent = String(count);
  cartTotal.textContent = formatMoney(total);

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="muted">Tu pedido está vacío 🧸</p>`;
    return;
  }

  cartItems.innerHTML = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    const price = getPrice(p);
    return `
      <div class="cart-row">
        <img src="${p.images?.[0] || ""}" alt="${escapeHtml(p.name)}">
        <div>
          <h5>${escapeHtml(p.name)}</h5>
          <small>$${formatMoney(price)} c/u · ${pricingMode === "wholesale" ? `mín. ${p.wholesaleMinQty}u` : "minorista"}</small>
          <div class="qty">
            <button type="button" data-action="dec" data-id="${p.id}">−</button>
            <strong>${i.qty}</strong>
            <button type="button" data-action="inc" data-id="${p.id}">+</button>
          </div>
          <button class="remove" type="button" data-action="rm" data-id="${p.id}">Quitar</button>
        </div>
      </div>
    `;
  }).join("");
}

cartItems.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if (action === "inc") changeQty(id, +1);
  if (action === "dec") changeQty(id, -1);
  if (action === "rm") removeItem(id);
});

clearCartBtn.addEventListener("click", clearCart);

function openCart() {
  cartDrawer.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}
function closeCart() {
  cartDrawer.classList.add("hidden");
  backdrop.classList.add("hidden");
}
cartBtn.addEventListener("click", openCart);
openCartCta.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);

// Checkout -> WhatsApp
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Tu pedido está vacío.");
    return;
  }

  const name = cName.value.trim();
  const phone = cPhone.value.trim();
  const zone = cZone.value.trim();
  const notes = cNotes.value.trim();

  const { total } = totals();
  const lines = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    const unit = getPrice(p);
    const line = unit * i.qty;
    return `• ${p.name} x${i.qty} — $${formatMoney(line)}`;
  }).join("\n");

  const modeTxt = pricingMode === "retail" ? "Minorista" : "Mayorista";

  const msg =
    `Hola Celestina! 👋
Quiero solicitar este pedido (${modeTxt}):

${lines}

Total estimado: $${formatMoney(total)}

Aclaración: entiendo que es *por pedido* (sin stock),
se abona *50% de seña* para iniciar y el *saldo al entregar*.
Entrega aprox: *15 días* (según el pedido).

Datos:
- Nombre: ${name}
- WhatsApp: ${phone}
- Zona: ${zone || "—"}
- Notas: ${notes || "—"}

Gracias 💗`;

  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
});

// FAQ
function renderFaq() {
  faq.innerHTML = FAQ.map(item => `
    <div class="faq-item">
      <div class="faq-q">
        <strong>${escapeHtml(item.q)}</strong>
        <span>＋</span>
      </div>
      <div class="faq-a">${escapeHtml(item.a)}</div>
    </div>
  `).join("");

  faq.addEventListener("click", (e) => {
    const wrap = e.target.closest(".faq-item");
    if (!wrap) return;
    wrap.classList.toggle("open");
  });
}

// Footer WhatsApp
footerWhatsapp.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = "Hola Celestina! 👋 Quiero hacer una consulta.";
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
});

// STORAGE
function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// UTILS
function formatMoney(n) { return new Intl.NumberFormat("es-AR").format(Number(n || 0)); }
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// INIT
renderFeatured();
renderProducts();
renderFaq();
renderCart();
setMode("retail");