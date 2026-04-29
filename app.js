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
     download: chemin du fichier à télécharger (string, optionnel)
              Exemple : download: "files/caf-001.pdf"
   =========================================== */

/* ====================
   MOT DE PASSE POUR TÉLÉCHARGEMENT
   ====================
   Changez ce mot de passe comme vous le souhaitez
   ==================== */
const DOWNLOAD_PASSWORD = "salem2024";

const products = [
  { id: 1,  name: "Caftan Andalou",        num: "CAF-001", type: "Caftan",     year: 2024, price: 70,  img: "images/p1.jpg", emoji: "👘", download: "images/test.pdf" },
  { id: 2,  name: "Jellaba Royale",         num: "JEL-002", type: "Jellaba",    year: 2023, price: 150,  img: "images/p2.jpg", emoji: "🌙", download: "images/p2.jpg" },
  { id: 3,  name: "Tackchita Impériale",    num: "TAC-003", type: "Tackchita",  year: 2025, price: 150,  img: "images/p3.jpg", emoji: "👑", download: "images/p3.jpg" },
  { id: 4,  name: "Caftan Fassi",           num: "CAF-004", type: "Caftan",     year: 2022, price: 160,  img: "images/p4.jpg", emoji: "🌸", download: "images/p4.jpg" },
  { id: 5,  name: "Jellaba Berbère",        num: "JEL-005", type: "Jellaba",    year: 2024, price: 70,  img: "images/p5.jpg", emoji: "🧥", download: "images/p5.jpg" },
  { id: 6,  name: "Tackchita Brodée",       num: "TAC-006", type: "Tackchita",  year: 2023, price: 70,  img: "images/p6.jpg", emoji: "💫", download: "images/p6.jpg" },
  { id: 7,  name: "Caftan Mosaïque",        num: "CAF-007", type: "Caftan",     year: 2021, price: 70,  img: "images/p7.jpg", emoji: "✨", download: "images/p7.jpg" },
  { id: 8,  name: "Jellaba Sahara",         num: "JEL-008", type: "Jellaba",    year: 2025, price: 130,  img: "images/p8.jpg", emoji: "⭐", download: "" },
  { id: 9,  name: "Tackchita Marrakech",    num: "TAC-009", type: "Tackchita",  year: 2022, price: 120,  img: "images/p9.jpg", emoji: "🌺", download: "" },
  { id: 10, name: "Caftan Zellige",         num: "CAF-010", type: "Caftan",     year: 2025, price: 300,  img: "images/p10.jpg", emoji: "💎", download: "" },
  { id: 11, name: "Jellaba Médina",         num: "JEL-011", type: "Jellaba",    year: 2020, price: 130,  img: "images/p11.jpg", emoji: "🌿", download: "" },
  { id: 12, name: "Tackchita Perles",       num: "TAC-012", type: "Tackchita",  year: 2024, price: 780,  img: "images/p12.jpg", emoji: "🎀", download: "" },
];

/* ====================
   ÉTAT DES FILTRES
   ==================== */
let activeType = "all";

/* ====================
   AUTHENTIFICATION
   ==================== */
const SESSION_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

function isAuthenticated() {
  const authTime = sessionStorage.getItem('downloadAuthTime');
  if (!authTime) return false;
  return Date.now() - parseInt(authTime) < SESSION_DURATION;
}

function setAuthenticated() {
  sessionStorage.setItem('downloadAuthTime', Date.now().toString());
}

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
let currentProductId = null;

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentProductId = p.id;
  updateNavButtons();

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

  // Download button in modal
  const downloadBtn = document.getElementById("m-download");
  if (p.download && p.download.trim() !== "") {
    downloadBtn.style.display = "flex";
    downloadBtn.onclick = () => requestDownload(p.id);
  } else {
    downloadBtn.style.display = "none";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
  currentProductId = null;
}

function getAdjacentProductId(direction) {
  const filtered = getFiltered();
  if (filtered.length === 0) return null;
  
  const currentIndex = filtered.findIndex(p => p.id === currentProductId);
  if (currentIndex === -1) return filtered[0].id;
  
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = filtered.length - 1;
  if (newIndex >= filtered.length) newIndex = 0;
  
  return filtered[newIndex].id;
}

function navigateProduct(direction) {
  const newId = getAdjacentProductId(direction);
  if (newId) openModal(newId);
}

function updateNavButtons() {
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");
  const filtered = getFiltered();
  
  // Show/hide nav buttons based on filtered count
  if (filtered.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

/* ====================
   TÉLÉCHARGEMENT AVEC MOT DE PASSE
   ==================== */
let pendingDownloadId = null;

function requestDownload(id) {
  const p = products.find(x => x.id === id);
  if (!p || !p.download) return;
  
  // Check if already authenticated
  if (isAuthenticated()) {
    doDownload(p.download);
    return;
  }
  
  pendingDownloadId = id;
  document.getElementById("download-pwd").value = "";
  document.getElementById("pwd-error").textContent = "";
  document.getElementById("download-modal").classList.add("open");
}

function closeDownloadModal() {
  document.getElementById("download-modal").classList.remove("open");
  pendingDownloadId = null;
}

function doDownload(downloadPath) {
  fetch(downloadPath, { mode: 'no-cors' })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadPath.split('/').pop().split('?')[0];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(() => {
      window.open(downloadPath, '_blank');
    });
}

function confirmDownload() {
  const pwd = document.getElementById("download-pwd").value;
  const errorEl = document.getElementById("pwd-error");
  
  if (pwd === DOWNLOAD_PASSWORD) {
    const p = products.find(x => x.id === pendingDownloadId);
    if (p && p.download) {
      setAuthenticated(); // Save authentication for 10 minutes
      doDownload(p.download);
    }
    closeDownloadModal();
  } else {
    errorEl.textContent = "Mot de passe incorrect";
  }
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

  /* Fermeture modal avec Échap + Navigation clavier */
  document.addEventListener("keydown", e => {
    const modal = document.getElementById("modal");
    if (!modal.classList.contains("open")) return;
    
    if (e.key === "Escape") {
      closeModal();
      closeDownloadModal();
    } else if (e.key === "ArrowLeft") {
      navigateProduct(-1);
    } else if (e.key === "ArrowRight") {
      navigateProduct(1);
    }
  });

  /* Navigation avec boutons */
  document.getElementById("modal-prev").addEventListener("click", () => navigateProduct(-1));
  document.getElementById("modal-next").addEventListener("click", () => navigateProduct(1));

  /* Fermeture modal téléchargement */
  document.getElementById("download-modal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeDownloadModal();
  });

  /* Premier rendu */
  render();
});
