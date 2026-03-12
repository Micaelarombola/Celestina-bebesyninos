const WHATSAPP_NUMBER = "5491162283678"; // CAMBIAR POR TU NUMERO REAL

const PRODUCTS = [
  // ======================
  // ACCESORIOS
  // ======================
  {
    id: "acc1",
    name: "Set babero babita y portachupete",
    category: "Accesorios",
    segment: "Beba",
    priceRetail: 9000,
    sizes: ["Único"],
    images: ["assets/acce1.csv", "assets/acce2.csv", "assets/acce3.csv", "assets/acce4.csv","assets/acce8.csv" ],
    note: "Confeccionado con toalla de algodon. Varios diseños",
    featured: true
  },
  {
    id: "acc2",
    name: "Set de amamantar",
    category: "Accesorios",
    segment: "Beba",
    priceRetail: 7000,
    sizes: ["Único"],
    images: ["assets/acce5.csv", "assets/acce6.csv" , "assets/acce7.csv" ],
    note: "Toallita de hombro y 2 pares de protectores mamarios.",
    featured: true
  },

  // ======================
  // AJUAR
  // ======================
  {
    id: "aju1",
    name: "Ajuar con body",
    category: "Ajuar",
    segment: "Beba",
    priceRetail: 9000,
    sizes: ["Talle unico"],
    images: ["assets/kit1.csv", "assets/kit2.csv", "assets/kit3.csv" , "assets/kit4.csv"  ],
    note: "Ajuar confeccionado a pedido",
    featured: true
  },
  {
    id: "aju2",
    name: "Ajuar con camperita",
    category: "Ajuar",
    segment: "Beba",
    priceRetail: 13000,
    sizes: ["Talle unico"],
    images: ["assets/ajuar1.png", "assets/ajuar2.png" , "assets/ajuar3.png" , "assets/ajuar4.png"],
    note: "Ajuar con camperita incluida",
    featured: true
  },

  // ======================
  // BLUSAS
  // ======================
  {
    id: "bl1",
    name: "Blusa Celestina beba",
    category: "Blusas",
    segment: "Beba",
    priceRetail: 10000,
    sizes: ["Talle 2 al 5"],
    images: ["assets/blusa-celestina.csv"],
    note: "Blusa bebé- Solo blanca",
    featured: false
  },
 
  {
    id: "bl3",
    name: "Blusa Celestina niña",
    category: "Blusas",
    segment: "Niña",
    priceRetail: 12500,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/blusa-celestina.csv"],
    note: "Confeccionada en tusor, Cuello y mangas de broderi.",
    featured: true
  },
  {
    id: "bl4",
    name: "Blusa Carmela niña",
    category: "Blusas",
    segment: "Niña",
    priceRetail: 9500,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/blusa-carmela.csv", "assets/Blusa-carmela.jfif", "assets/blusa-carmela2.csv"],
    note: "Realizado en tusor. Varios colores",
    featured: false
  },
 {
    id: "bl5",
    name: "Blusa Mini Carmela ",
    category: "Blusas",
    segment: "Bebe",
    priceRetail: 8000,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/blusa-carmela.csv", "assets/Blusa-carmela.jfif", "assets/blusa-carmela2.csv"],
    note: "Realizado en tusor. Varios colores",
    featured: false
  },
  // ======================
  // CAMISAS
  // ======================
  {
    id: "ca1",
    name: "Camisa Angelita",
    category: "Camisa",
    segment: "Niña",
    priceRetail: 11500,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/camisa-angelita.csv", "assets/camisa-angelita2.csvg"],
    note: "Camisa Angelita bebé",
    featured: false
  },
  {
    id: "ca2",
    name: "Camisa Catalina beba",
    category: "Camisa",
    segment: "Beba",
    priceRetail: 9000,
    sizes: ["2", "3", "4", "5"],
    images: ["assets/Camisa-catalina.jfif"],
    note: "Realizada en tusor- Varios colores",
    featured: false
  },
  {
    id: "ca3",
    name: "Camisa Amelia mini",
    category: "Camisa",
    segment: "Beba",
    priceRetail: 10500,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/Camisa-Amelia.jfif", "assets/Camisa-Amelia1.jfif"],
    note: "Camisa de jean para beba",
    featured: false
  },
  {
    id: "ca4",
    name: "Camisa Angelita niña",
    category: "Camisa",
    segment: "Niña",
    priceRetail: 11500,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/camisa-angelita.csv", "assets/camisa-angelita2.csv"],
    note: "Realizada en tusor con puntilla de algodon- Varios colores",
    featured: false
  },
  {
    id: "ca5",
    name: "Camisa Catalina niña",
    category: "Camisa",
    segment: "Niña",
    priceRetail: 10500,
    sizes: ["Talle del 6 al 16"],
    images: ["assets/Camisa-catalina.jfif"],
    note: "Realizada en tusor- Varios colores",
    featured: false
  },
  {
    id: "ca6",
    name: "Camisa Amelia",
    category: "Camisa",
    segment: "Niña",
    priceRetail: 13000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/Camisa-Amelia.jfif", "assets/Camisa-Amelia1.jfif"],
    note: "Camisa de jean- Talle 16 opcional",
    featured: false
  },

  // ======================
  // CHALECOS
  // ======================
  {
    id: "ch1",
    name: "Chaleco Sofía beba",
    category: "Chaleco",
    segment: "Beba",
    priceRetail: 7500,
    sizes: ["Talle del 1 al 5"],
    images: ["assets/chaleco-sofia.csv"],
    note: "Realizado en corderito, forrado",
    featured: false
  },
  {
    id: "ch2",
    name: "Chaleco Sofía nenas",
    category: "Chaleco",
    segment: "Niña",
    priceRetail: 9000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/chaleco-sofia.csv"],
    note: "Talle 16 opcional.",
    featured: false
  },

  // ======================
  // CONJUNTOS
  // ======================
 {
    id: "co1",
    name: "Conjunto Victoria de beba",
    category: "Conjunto",
    segment: "Beba",
    priceRetail: 16000,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/conjunto-victoria.csv"],
    note: "Compuesto por pollera con elastico en la cintura, chaquetita con lazo y boina.",
    featured: true
  },
  {
    id: "co2",
    name: "Conjunto Victoria de nena",
    category: "Conjunto",
    segment: "Niña",
    priceRetail: 21000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/conjunto-victoria.csv"],
    note: "Compuesto por pollera con elastico en la cintura, chaquetita con lazo y boina.",
    featured: true
  },

  // ======================
  // JUMPERS
  // ======================
  {
    id: "ju1",
    name: "Jumper Noelia de beba",
    category: "Jumper",
    segment: "Beba",
    priceRetail: 9000,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/jumper-noelia-beba-1.jpg", "assets/jumper-noelia-beba-2.jpg"],
    note: "Realizado en paño",
    featured: false
  },
  {
    id: "ju2",
    name: "Jumper Grace",
    category: "Jumper",
    segment: "Niña",
    priceRetail: 8000,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/jumper-grace.csv"],
    note: "Realizado en tusor con puntilla de algodon- Varios colores",
    featured: true
  },
  {
    id: "ju3",
    name: "Jumper Noelia de niña",
    category: "Jumper",
    segment: "Niña",
    priceRetail: 14000,
    sizes: ["6", "8", "10", "12" , "14"],
    images: ["assets/jumper-noelia.csv"],
    note: "Realizado en paño",
    featured: false
  },

  // ======================
  // MONOS
  // ======================
  {
    id: "mo1",
    name: "Mono Kyra niña",
    category: "Mono",
    segment: "Niña",
    priceRetail: 13500,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/mono-kyra.csv"],
    note: "Confeccionado en tusor con broches en el hombro. Varios colores",
    featured: true
  },
  {
    id: "mo2",
    name: "Mono Kyra niña",
    category: "Mono",
    segment: "Niña",
    priceRetail: 17000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/mono-kyra.csv"],
    note: "Confeccionado en tusor con broches en el hombro. Varios colores",
    featured: true
  },

  // ======================
  // PANTALONES
  // ======================
  {
    id: "pa1",
    name: "Pantalón Trini beba",
    category: "Pantalones",
    segment: "Beba",
    priceRetail: 9500,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/pantalon-trini.csv"],
    note: "Confeccionado en corderoy, detalle de bordado en los bolsillos, cintura elastizada- Varios colores",
    featured: false
  },
  {
    id: "pa2",
    name: "Pantalón Mini Abril",
    category: "Pantalones",
    segment: "Beba",
    priceRetail: 8500,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/pantalon-abril.jfif", "assets/pantalon-abril1.jfif" , "assets/pantalon-abri2.jfif" , "assets/pantalon-abril3.jfif"],
    note: "Realizado en tusor- Varios colores",
    featured: false
  },
  {
    id: "pa3",
    name: "Pantalón Umma mini",
    category: "Pantalones",
    segment: "Beba",
    priceRetail: 9500,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/Pantalon-umma.jfif", "assets/Pantalon-umma1.jfif" , "assets/Pantalon-umma2.jfif" , "assets/Pantalon-umma3.jfif"],
    note: "Pantalon en tela de jean con detalle de bordado en el bolsillo",
    featured: false
  },
  {
    id: "pa4",
    name: "Pantalón Milo bebe",
    category: "Pantalones",
    segment: "Beba",
    priceRetail: 9000,
    sizes: ["Talle del 2 al 5"],
    images: ["assets/pantalon-milo.csv", "assets/pantalon-milo2.csv"],
    note: "Confeccionado en corderoy con bolsillos, elastico en la cintura- Varios colores",
    featured: false
  },
  {
    id: "pa5",
    name: "Pantalón Trini",
    category: "Pantalones",
    segment: "Niña",
    priceRetail: 12000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/pantalon-trini.csv"],
    note: "Confeccionado en Corderoy, detalle de bordado en los bolsillos y cintura elastizada- Varios colores",
    featured: false
  },
  {
    id: "pa6",
    name: "Pantalón Abril niña",
    category: "Pantalones",
    segment: "Niña",
    priceRetail: 11000,
    sizes: ["Talle del 6 al 16"],
    images: ["assets/pantalon-abril.jfif", "assets/pantalon-abril1.jfif" , "assets/pantalon-abri2.jfif" , "assets/pantalon-abril3.jfif"],
    note: "PRealizado en tusor- Colores varios",
    featured: false
  },
  {
    id: "pa7",
    name: "Pantalón Umma",
    category: "Pantalones",
    segment: "Niña",
    priceRetail: 12000,
    sizes: ["Talle del 6 al 14"],
    images: ["assets/Pantalon-umma.jfif", "assets/Pantalon-umma1.jfif" , "assets/Pantalon-umma2.jfif" , "assets/Pantalon-umma3.jfif"],
    note: "Pantalon de jean con detalle de bordado en el bolsillo",
    featured: false
  },

  // ======================
  // POLLERAS
  // ======================
  {
    id: "po1",
    name: "Pollera Daya beba",
    category: "Pollera",
    segment: "Beba",
    priceRetail: 8000,
    sizes: ["Talle 2 al 5"],
    images: ["assets/pollera1.jfif"],
    note: "Confeccionada en jean con bordado en los bolsillos y elastico en la cintura.",
    featured: false
  },
 {
    id: "po4",
    name: "Pollera Magali de beba",
    category: "Pollera",
    segment: "Beba",
    priceRetail: 8000,
    sizes: ["Del talle 2 al 5"],
    images: ["assets/Pollera-magali.csv"],
    note: "Realizado en corderoy con bolsillos bordados- Varios colores",
    featured: false
  },
  {
    id: "po3",
    name: "Pollera Daia de jean niña",
    category: "Pollera",
    segment: "Niña",
    priceRetail: 9500,
    sizes: ["Talles del 6 al 14"],
    images: ["assets/Pollera-daia.csv", "assets/pollera-daia2.csv"],
    note: "Jean semi elastizado. Con bolsillos bordados.",
    featured: true
  },
  
  {
    id: "po4",
    name: "Pollera Magali de nena",
    category: "Pollera",
    segment: "Niña",
    priceRetail: 9500,
    sizes: ["Del talle 6 al 14"],
    images: ["assets/Pollera-magali.csv"],
    note: "Realizado en corderoy con bolsillos bordados- Varios colores",
    featured: false
  },

  // ======================
  // VESTIDOS
  // ======================
  {
    id: "ve1",
    name: "Vestido mini Vera",
    category: "Vestido",
    segment: "Beba",
    priceRetail: 11000,
    sizes: ["Del talle 2 al 5"],
    images: ["assets/vestido-vera.csv"],
    note: "Varios Colores",
    featured: true
  }
];

const FAQS = [
  {
    q: "¿Trabajan con stock?",
    a: "No. Todas las prendas se realizan por pedido, con atención personalizada."
  },
  {
    q: "¿Cómo se confirma el pedido?",
    a: "Una vez definido el pedido, se solicita una seña del 50% para iniciar la confección."
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "El tiempo estimado es de aproximadamente 15 días, según el volumen del pedido."
  },
  {
    q: "¿Dónde se coordinan los detalles?",
    a: "Todo se coordina por WhatsApp: modelos, talles, entrega y aclaraciones."
  }
];

const state = {
  selectedCategory: "all",
  search: "",
  cart: [],
  lightboxImages: [],
  lightboxIndex: 0
};

const CATEGORY_ORDER = [
  "Accesorios",
  "Ajuar",
  "Blusas",
  "Camisa",
  "Chaleco",
  "Conjunto",
  "Jumper",
  "Mono",
  "Pantalones",
  "Pollera",
  "Vestido"
];

const SEGMENT_ORDER = ["Beba", "Niña", "Unisex"];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const cover = $("#cover");
const store = $("#store");
const enterBtn = $("#enterBtn");
const bubbles = $("#bubbles");
const goCatalogBtn = $("#goCatalogBtn");
const catalogSection = $("#catalogSection");
const featuredRow = $("#featuredRow");
const catalogRoot = $("#catalogRoot");
const searchInput = $("#searchInput");
const faqRoot = $("#faq");
const cartBtn = $("#cartBtn");
const openCartCta = $("#openCartCta");
const cartDrawer = $("#cartDrawer");
const backdrop = $("#backdrop");
const closeCartBtn = $("#closeCartBtn");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const cartTotal = $("#cartTotal");
const clearCartBtn = $("#clearCartBtn");
const checkoutForm = $("#checkoutForm");
const footerWhatsapp = $("#footerWhatsapp");
const yearEl = $("#year");

const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
const closeLightbox = $("#closeLightbox");
const lightboxPrev = $("#lightboxPrev");
const lightboxNext = $("#lightboxNext");

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR").format(value);
}

function generateBubbles() {
  if (!bubbles) return;

  setInterval(() => {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = Math.random() * 18 + 8;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.opacity = `${Math.random() * 0.5 + 0.2}`;
    bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;
    bubbles.appendChild(bubble);

    setTimeout(() => bubble.remove(), 13000);
  }, 450);
}

function getFilteredProducts() {
  return PRODUCTS.filter((product) => {
    const byCategory =
      state.selectedCategory === "all" || product.category === state.selectedCategory;

    const query = state.search.trim().toLowerCase();
    const bySearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.segment.toLowerCase().includes(query) ||
      product.note.toLowerCase().includes(query) ||
      product.sizes.join(" ").toLowerCase().includes(query);

    return byCategory && bySearch;
  });
}

function groupProducts(products) {
  const grouped = {};

  CATEGORY_ORDER.forEach((category) => {
    const categoryProducts = products.filter((p) => p.category === category);
    if (!categoryProducts.length) return;

    grouped[category] = {};

    SEGMENT_ORDER.forEach((segment) => {
      const segmentProducts = categoryProducts.filter((p) => p.segment === segment);
      if (segmentProducts.length) {
        grouped[category][segment] = segmentProducts;
      }
    });
  });

  return grouped;
}

function createCarousel(product) {
  const images = product.images || [];
  const hasMultiple = images.length > 1;

  const dotsHtml = hasMultiple
    ? images
        .map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}" data-dot="${i}"></span>`)
        .join("")
    : "";

  return `
    <div class="carousel ${!hasMultiple ? "single-image" : ""}" data-carousel-id="${product.id}">
      <div class="carousel-track">
        ${images
          .map(
            (img, i) =>
              `<img src="${img}" alt="${product.name}" data-lightbox-product="${product.id}" data-lightbox-index="${i}">`
          )
          .join("")}
      </div>

      ${
        hasMultiple
          ? `
            <button class="carousel-btn prev" type="button" data-dir="-1">‹</button>
            <button class="carousel-btn next" type="button" data-dir="1">›</button>
            <div class="carousel-dots">${dotsHtml}</div>
          `
          : ""
      }
    </div>
  `;
}

function createCard(product) {
  return `
    <article class="card">
      ${createCarousel(product)}
      <div class="card-body">
        <div class="meta">
          <span>${product.category}</span>
          <span>${product.segment}</span>
        </div>

        <h4 class="card-title">${product.name}</h4>
        <div class="price">$ ${formatPrice(product.priceRetail)}</div>

        <p class="small">${product.note}</p>

        <div class="sizes">
          ${product.sizes.map(size => `<span class="size-pill">${size}</span>`).join("")}
        </div>

        <div class="actions">
          <button class="btn btn-soft" type="button" data-view="${product.id}">Ver</button>
          <button class="btn btn-add" type="button" data-add="${product.id}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featuredProducts = getFilteredProducts().filter((p) => p.featured);
  featuredRow.innerHTML = featuredProducts.length
    ? featuredProducts.map(createCard).join("")
    : `<p class="small">No hay productos destacados para esta búsqueda.</p>`;

  setupAllCarousels(featuredRow);
}

function renderCatalog() {
  const filtered = getFilteredProducts();

  if (!filtered.length) {
    catalogRoot.innerHTML = `<p class="small">No encontramos productos con esa búsqueda.</p>`;
    return;
  }

  catalogRoot.innerHTML = `
    <div class="catalog-grid-simple">
      ${filtered.map(createCard).join("")}
    </div>
  `;

  setupAllCarousels(catalogRoot);
}

function renderFaq() {
  faqRoot.innerHTML = FAQS.map(item => `
    <div class="faq-item">
      <div class="faq-q">
        <strong>${item.q}</strong>
        <span>+</span>
      </div>
      <div class="faq-a">${item.a}</div>
    </div>
  `).join("");

  $$(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

function openCart() {
  cartDrawer.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.add("hidden");
  backdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const found = state.cart.find(item => item.id === productId);

  if (found) {
    found.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      priceRetail: product.priceRetail,
      image: product.images[0],
      qty: 1
    });
  }

  renderCart();
  openCart();
}

function updateQty(productId, delta) {
  const item = state.cart.find(p => p.id === productId);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    state.cart = state.cart.filter(p => p.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  renderCart();
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((acc, item) => acc + item.qty, 0);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="small">Todavía no agregaste productos.</p>`;
    cartTotal.textContent = "0";
    return;
  }

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h5>${item.name}</h5>
        <small>$ ${formatPrice(item.priceRetail)} c/u</small>

        <div class="qty">
          <button type="button" data-cart-minus="${item.id}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-plus="${item.id}">+</button>
        </div>

        <button type="button" class="remove" data-cart-remove="${item.id}">Eliminar</button>
      </div>
    </div>
  `).join("");

  const total = state.cart.reduce((acc, item) => acc + item.priceRetail * item.qty, 0);
  cartTotal.textContent = formatPrice(total);
}

function buildWhatsAppMessage(formData) {
  const lines = [];

  lines.push("¡Hola! Quiero hacer un pedido minorista en Celestina bebés y niños.");
  lines.push("");
  lines.push("*Datos del cliente*");
  lines.push(`Nombre: ${formData.name}`);
  lines.push(`WhatsApp: ${formData.phone}`);
  lines.push(`Zona: ${formData.zone || "-"}`);
  lines.push("");
  lines.push("*Productos*");

  state.cart.forEach((item) => {
    lines.push(`- ${item.name} x${item.qty} — $ ${formatPrice(item.priceRetail * item.qty)}`);
  });

  const total = state.cart.reduce((acc, item) => acc + item.priceRetail * item.qty, 0);

  lines.push("");
  lines.push(`*Total estimado:* $ ${formatPrice(total)}`);
  lines.push("");
  lines.push("*Notas del pedido*");
  lines.push(formData.notes || "-");
  lines.push("");
  lines.push("Entiendo que el pedido es a confección, con seña del 50% y entrega aproximada de 15 días.");

  return lines.join("\n");
}

function submitCheckout(e) {
  e.preventDefault();

  if (!state.cart.length) {
    alert("Primero agregá al menos un producto al carrito.");
    return;
  }

  const formData = {
    name: $("#cName").value.trim(),
    phone: $("#cPhone").value.trim(),
    zone: $("#cZone").value.trim(),
    notes: $("#cNotes").value.trim()
  };

  const text = buildWhatsAppMessage(formData);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function setupAllCarousels(scope = document) {
  const carousels = scope.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dots = carousel.querySelectorAll(".dot");

    if (!track || slides.length <= 1) return;

    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        update();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        update();
      });
    });
  });
}
function openLightbox(images, index) {
  state.lightboxImages = images;
  state.lightboxIndex = index;

  updateLightbox();

  if (images.length <= 1) {
    lightboxPrev.classList.add("hidden");
    lightboxNext.classList.add("hidden");
  } else {
    lightboxPrev.classList.remove("hidden");
    lightboxNext.classList.remove("hidden");
  }

  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function updateLightbox() {
  lightboxImg.src = state.lightboxImages[state.lightboxIndex];
}

function closeLb() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
}

function nextLightbox() {
  if (state.lightboxImages.length <= 1) return;
  state.lightboxIndex = (state.lightboxIndex + 1) % state.lightboxImages.length;
  updateLightbox();
}



function setupGlobalEvents() {
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      cover.classList.add("hidden");
      store.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (goCatalogBtn) {
    goCatalogBtn.addEventListener("click", () => {
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderFeatured();
      renderCatalog();
    });
  }

  const filters = $("#filters");
  if (filters) {
    filters.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;

      $$(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedCategory = chip.dataset.category;

      renderFeatured();
      renderCatalog();
    });
  }

  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    const viewBtn = e.target.closest("[data-view]");
    const lightboxImgTrigger = e.target.closest("[data-lightbox-product]");

    const minusBtn = e.target.closest("[data-cart-minus]");
    const plusBtn = e.target.closest("[data-cart-plus]");
    const removeBtn = e.target.closest("[data-cart-remove]");

    if (addBtn) {
      addToCart(addBtn.dataset.add);
    }

    if (viewBtn) {
      const product = PRODUCTS.find(p => p.id === viewBtn.dataset.view);
      if (product) openLightbox(product.images, 0);
    }

    if (lightboxImgTrigger) {
      const product = PRODUCTS.find(p => p.id === lightboxImgTrigger.dataset.lightboxProduct);
      const index = Number(lightboxImgTrigger.dataset.lightboxIndex || 0);
      if (product) openLightbox(product.images, index);
    }

    if (minusBtn) updateQty(minusBtn.dataset.cartMinus, -1);
    if (plusBtn) updateQty(plusBtn.dataset.cartPlus, 1);
    if (removeBtn) removeFromCart(removeBtn.dataset.cartRemove);
  });

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (openCartCta) openCartCta.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      state.cart = [];
      renderCart();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", submitCheckout);
  }

  if (footerWhatsapp) {
    footerWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
    });
  }

  if (closeLightbox) closeLightbox.addEventListener("click", closeLb);
  if (lightboxNext) lightboxNext.addEventListener("click", nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", prevLightboxFn);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLb();
    });
  }

 document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("hidden")) {
    if (e.key === "Escape") closeLb();

    if (state.lightboxImages.length > 1) {
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightboxFn();
    }
  }
});
}

function init() {
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  generateBubbles();
  renderFeatured();
  renderCatalog();
  renderFaq();
  renderCart();
  setupGlobalEvents();
}

init();