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
  
  { id: 18, name: "Jellaba 2025 #6",        num: "JEL-018", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250108_175109_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 19, name: "Jellaba 2025 #7",        num: "JEL-019", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250303_101424_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 20, name: "Jellaba 2025 #8",        num: "JEL-020", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250306_215925_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 21, name: "Jellaba 2025 #9",        num: "JEL-021", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_083733_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 22, name: "Jellaba 2025 #10",       num: "JEL-022", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_084140_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 23, name: "Jellaba 2025 #11",       num: "JEL-023", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_084330_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 24, name: "Jellaba 2025 #12",       num: "JEL-024", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_084952_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 25, name: "Jellaba 2025 #13",       num: "JEL-025", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_085756_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 26, name: "Jellaba 2025 #14",       num: "JEL-026", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250319_085955_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 27, name: "Jellaba 2025 #15",       num: "JEL-027", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250405_174348_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 28, name: "Jellaba 2025 #16",       num: "JEL-028", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250501_121639_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 29, name: "Jellaba 2025 #17",       num: "JEL-029", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250501_160937_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 30, name: "Jellaba 2025 #18",       num: "JEL-030", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250501_170859_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 31, name: "Jellaba 2025 #19",       num: "JEL-031", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250508_064234_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 32, name: "Jellaba 2025 #20",       num: "JEL-032", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250531_073711_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 33, name: "Jellaba 2025 #21",       num: "JEL-033", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250611_114542_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 34, name: "Jellaba 2025 #22",       num: "JEL-034", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250624_231010_TikTok.jpg", emoji: "🧥", download: "" },
  { id: 35, name: "Jellaba 2025 #23",       num: "JEL-035", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250629_002053_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 36, name: "Jellaba 2025 #24",       num: "JEL-036", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250629_093047_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 37, name: "Jellaba 2025 #25",       num: "JEL-037", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250712_122817_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 38, name: "Jellaba 2025 #26",       num: "JEL-038", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250712_192827_Embroidery Viewer.jpg", emoji: "🧥", download: "" },
  { id: 39, name: "Jellaba 2025 #27",       num: "JEL-039", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250714_100359_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 40, name: "Jellaba 2025 #28",       num: "JEL-040", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250716_103648_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 41, name: "Jellaba 2025 #29",       num: "JEL-041", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250716_150417_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 42, name: "Jellaba 2025 #30",       num: "JEL-042", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250717_092107_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 43, name: "Jellaba 2025 #31",       num: "JEL-043", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250718_150939_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 44, name: "Jellaba 2025 #32",       num: "JEL-044", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250718_152013_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 45, name: "Jellaba 2025 #33",       num: "JEL-045", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250723_074234_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 46, name: "Jellaba 2025 #34",       num: "JEL-046", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250801_190011_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 47, name: "Jellaba 2025 #35",       num: "JEL-047", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250804_091625_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 48, name: "Jellaba 2025 #36",       num: "JEL-048", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250805_141435_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 49, name: "Jellaba 2025 #37",       num: "JEL-049", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250825_120819_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 50, name: "Jellaba 2025 #38",       num: "JEL-050", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250827_114644_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 51, name: "Jellaba 2025 #39",       num: "JEL-051", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250901_110203_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 52, name: "Jellaba 2025 #40",       num: "JEL-052", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250901_114618_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 53, name: "Jellaba 2025 #41",       num: "JEL-053", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250901_114648_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 54, name: "Jellaba 2025 #42",       num: "JEL-054", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250910_092133_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 55, name: "Jellaba 2025 #43",       num: "JEL-055", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250910_094040_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 56, name: "Jellaba 2025 #44",       num: "JEL-056", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250910_095342_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 57, name: "Jellaba 2025 #45",       num: "JEL-057", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250910_095910_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 58, name: "Jellaba 2025 #46",       num: "JEL-058", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250922_215147_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 59, name: "Jellaba 2025 #47",       num: "JEL-059", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251002_215731_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 60, name: "Jellaba 2025 #48",       num: "JEL-060", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251027_110644_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 61, name: "Jellaba 2025 #49",       num: "JEL-061", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251027_182425_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 62, name: "Jellaba 2025 #50",       num: "JEL-062", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251027_182703_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 63, name: "Jellaba 2025 #51",       num: "JEL-063", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251102_195112_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 64, name: "Jellaba 2025 #52",       num: "JEL-064", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251128_145352_Facebook.jpg", emoji: "🧥", download: "" },
  { id: 65, name: "Jellaba 2025 #53",       num: "JEL-065", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251129_102633_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 66, name: "Jellaba 2025 #54",       num: "JEL-066", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251129_134405_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 67, name: "Jellaba 2025 #55",       num: "JEL-067", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20251211_123114_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 68, name: "Jellaba 2025 #56",       num: "JEL-068", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260128_101450_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 69, name: "Jellaba 2025 #57",       num: "JEL-069", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260207_113126_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 70, name: "Jellaba 2025 #58",       num: "JEL-070", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260219_104249_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 71, name: "Jellaba 2025 #59",       num: "JEL-071", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260220_085047_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 72, name: "Jellaba 2025 #60",       num: "JEL-072", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260222_075441_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 73, name: "Jellaba 2025 #61",       num: "JEL-073", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260222_080052_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 74, name: "Jellaba 2025 #62",       num: "JEL-074", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260301_072941_Facebook.jpg", emoji: "🧥", download: "" },
  { id: 75, name: "Jellaba 2025 #63",       num: "JEL-075", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260301_083433_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 76, name: "Jellaba 2025 #64",       num: "JEL-076", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260331_101620_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 77, name: "Jellaba 2025 #65",       num: "JEL-077", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260331_175700_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 78, name: "Jellaba 2025 #66",       num: "JEL-078", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260404_100340_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 79, name: "Jellaba 2025 #67",       num: "JEL-079", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260409_132410_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 80, name: "Jellaba 2025 #68",       num: "JEL-080", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260417_070326_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 13, name: "Jellaba 2025 #1",        num: "JEL-013", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250303_180810.jpg", emoji: "🧥", download: "" },
  { id: 14, name: "Jellaba 2025 #2",        num: "JEL-014", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250406_180444.jpg", emoji: "🧥", download: "" },
  { id: 15, name: "Jellaba 2025 #3",        num: "JEL-015", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250506_132225.jpg", emoji: "🧥", download: "" },
  { id: 16, name: "Jellaba 2025 #4",        num: "JEL-016", type: "Jellaba",    year: 2025, price: "",   img: "2025/20251022_183928.jpg", emoji: "🧥", download: "" },
  { id: 17, name: "Jellaba 2025 #5",        num: "JEL-017", type: "Jellaba",    year: 2025, price: "",   img: "2025/20251208_123822.jpg", emoji: "🧥", download: "" },
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
