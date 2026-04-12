/**
 * Dar Chérifienne — Catalogue
 * app.js
 */

/* ===========================================
   DONNÉES — Modifier ou compléter ici
   ===========================================
   Chaque produit a les champs suivants :
     id      : identifiant unique (number)
     name    : nom du produit (string)
     num     : numéro de référence (string)
     type    : "Caftan" | "Jellaba" | "Tackchita"
     year    : année (number)
     price   : prix en MAD (number)
     emoji   : icône décorative (string) — remplacé par une photo si besoin
     img     : chemin ou URL de la photo (string)
              Exemple : img: "images/mon-produit.jpg"
   =========================================== */
const products = [
  { id: 1,  name: "Caftan Andalou",        num: "CAF-001", type: "Caftan",     year: 2024, price: 70,  img: "images/p1.jpg", emoji: "👘" },
  { id: 2,  name: "Jellaba Royale",         num: "JEL-002", type: "Jellaba",    year: 2023, price: 150,  img: "images/p2.jpg", emoji: "🌙" },
  { id: 3,  name: "Tackchita Impériale",    num: "TAC-003", type: "Tackchita",  year: 2025, price: 150,  img: "images/p3.jpg", emoji: "👑" },
  { id: 4,  name: "Caftan Fassi",           num: "CAF-004", type: "Caftan",     year: 2022, price: 160,  img: "images/p4.jpg", emoji: "🌸" },
  { id: 5,  name: "Jellaba Berbère",        num: "JEL-005", type: "Jellaba",    year: 2024, price: 70,  img: "images/p5.jpg", emoji: "🧥" },
  { id: 6,  name: "Tackchita Brodée",       num: "TAC-006", type: "Tackchita",  year: 2023, price: 70,  img: "images/p6.jpg", emoji: "💫" },
  { id: 7,  name: "Caftan Mosaïque",        num: "CAF-007", type: "Caftan",     year: 2021, price: 70,  img: "images/p7.jpg", emoji: "✨" },
  { id: 8,  name: "Jellaba Sahara",         num: "JEL-008", type: "Jellaba",    year: 2025, price: 130,  img: "images/p8.jpg", emoji: "⭐" },
  { id: 9,  name: "Tackchita Marrakech",    num: "TAC-009", type: "Tackchita",  year: 2022, price: 120,  img: "images/p9.jpg", emoji: "🌺" },
  { id: 10, name: "Caftan Zellige",         num: "CAF-010", type: "Caftan",     year: 2025, price: 300,  img: "images/p10.jpg", emoji: "💎" },
  { id: 11, name: "Jellaba Médina",         num: "JEL-011", type: "Jellaba",    year: 2020, price: 130,  img: "images/p11.jpg", emoji: "🌿" },
  { id: 12, name: "Tackchita Perles",       num: "TAC-012", type: "Tackchita",  year: 2024, price: 780,  img: "images/p12.jpg", emoji: "🎀" },
];

/* ====================
   ÉTAT DES FILTRES
   ==================== */
let activeType = "all";

/* ====================
   UTILITAIRES
   ==================== */
function formatPrice(price) {
  return price.toLocaleString("fr-MA") + " MAD";
}

function buildCardImg(product) {
  if (product.img) {
    return `<img class="product-img" src="${product.img}" alt="${product.name}" />`;
  }
  return `<span style="font-size:64px;line-height:1">${product.emoji}</span>
          <div class="pattern-overlay" style="color:${typeAccentColor(product.type)}"></div>`;
}

function buildModalImg(product) {
  if (product.img) {
    return `<img class="product-img" src="${product.img}" alt="${product.name}" />`;
  }
  return `<span style="font-size:90px;line-height:1">${product.emoji}</span>`;
}

function typeAccentColor(type) {
  const map = { Caftan: "#534AB7", Jellaba: "#1D9E75", Tackchita: "#BA7517" };
  return map[type] || "#B5843A";
}

function typeBgColor(type) {
  const map = { Caftan: "#c8c4ee", Jellaba: "#9adbc3", Tackchita: "#e6c27a" };
  return map[type] || "#e8e0d0";
}

/* ====================
   FILTRAGE
   ==================== */
function getFiltered() {
  const q   = document.getElementById("search").value.toLowerCase().trim();
  const yr  = document.getElementById("year-sel").value;

  return products.filter(p => {
    if (activeType !== "all" && p.type !== activeType) return false;
    if (yr !== "all" && String(p.year) !== yr) return false;
    if (q && !p.name.toLowerCase().includes(q) && !p.num.toLowerCase().includes(q)) return false;
    return true;
  });
}

/* ====================
   RENDU
   ==================== */
function render() {
  const filtered = getFiltered();
  const grid = document.getElementById("grid");
  const statsText = document.getElementById("stats-text");

  const count = filtered.length;
  statsText.innerHTML = `<strong>${count}</strong> produit${count !== 1 ? "s" : ""} affiché${count !== 1 ? "s" : ""}`;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty">
        <span class="empty-icon">🔍</span>
        <p>Aucun produit ne correspond à votre recherche.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="card" onclick="openModal(${p.id})" role="button" tabindex="0"
             aria-label="${p.name} — ${p.type} — ${formatPrice(p.price)}"
             onkeydown="if(event.key==='Enter') openModal(${p.id})">
      <div class="card-img" style="background:${typeBgColor(p.type)}22">
        ${buildCardImg(p)}
        <span class="badge-type badge-${p.type.toLowerCase()}">${p.type}</span>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-meta">
          <span>${p.num}</span>
          <span>${p.year}</span>
        </div>
        <div class="card-price">${formatPrice(p.price)}</div>
      </div>
    </article>
  `).join("");
}

/* ====================
   MODAL
   ==================== */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById("modal");
  const mImg  = document.getElementById("m-img");

  mImg.style.background = typeBgColor(p.type) + "44";
  mImg.innerHTML = buildModalImg(p);

  document.getElementById("m-badge").innerHTML =
    `<span class="badge-type badge-${p.type.toLowerCase()}">${p.type}</span>`;
  document.getElementById("m-name").textContent  = p.name;
  document.getElementById("m-num").textContent   = p.num;
  document.getElementById("m-type").textContent  = p.type;
  document.getElementById("m-year").textContent  = p.year;
  document.getElementById("m-price").textContent = formatPrice(p.price);

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ====================
   GESTION DES FILTRES
   ==================== */
function setType(type) {
  activeType = type;
  document.querySelectorAll("#type-chips .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.type === type);
  });
  render();
}

function resetFilters() {
  activeType = "all";
  document.getElementById("search").value = "";
  document.getElementById("year-sel").value = "all";
  document.querySelectorAll("#type-chips .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.type === "all");
  });
  render();
}

/* ====================
   INITIALISATIONS
   ==================== */
document.addEventListener("DOMContentLoaded", () => {
  /* Filtres type */
  document.querySelectorAll("#type-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => setType(chip.dataset.type));
  });

  /* Filtre année */
  document.getElementById("year-sel").addEventListener("change", render);

  /* Recherche */
  document.getElementById("search").addEventListener("input", render);

  /* Reset */
  document.getElementById("reset-btn").addEventListener("click", resetFilters);

  /* Fermeture modal */
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });

  /* Fermeture modal avec Échap */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  /* Premier rendu */
  render();
});
