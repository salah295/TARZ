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
const WHATSAPP_NUMBER = "212600359099";

const products = [
  
  { id: 18, name: "Jellaba 2025 #6",        num: "JEL-018", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250108_175109_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 19, name: "Jellaba 2025 #7",        num: "JEL-019", type: "Jellaba",    year: 2025, price: "",   img: "2025/1778706294617.png", emoji: "🧥", download: "" },
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
 /* { id: 13, name: "Jellaba 2025 #1",        num: "JEL-013", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250303_180810.jpg", emoji: "🧥", download: "" },*/
 /* { id: 14, name: "Jellaba 2025 #2",        num: "JEL-014", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250406_180444.jpg", emoji: "🧥", download: "" },*/
 /* { id: 15, name: "Jellaba 2025 #3",        num: "JEL-015", type: "Jellaba",    year: 2025, price: "",   img: "2025/20250506_132225.jpg", emoji: "🧥", download: "" },*/
  /*{ id: 16, name: "Jellaba 2025 #4",        num: "JEL-016", type: "Jellaba",    year: 2025, price: "",   img: "2025/20251022_183928.jpg", emoji: "🧥", download: "" },*/
  { id: 17, name: "Jellaba 2025 #5",        num: "JEL-017", type: "Jellaba",    year: 2025, price: "",   img: "2025/20251208_123822.jpg", emoji: "🧥", download: "" },
  /*{ id: 49, name: "Jellaba 2025 #37",       num: "JEL-049", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20250825_120819_WhatsApp.jpg", emoji: "🧥", download: "" },
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
  { id: 80, name: "Jellaba 2025 #68",       num: "JEL-080", type: "Jellaba",    year: 2025, price: "",   img: "2025/Screenshot_20260417_070326_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },*/
  { id: 81, name: "Jellaba 2020 #1",        num: "JEL-081", type: "Jellaba",    year: 2020, price: "",   img: "2020/20240516_083549.jpg", emoji: "🧥", download: "" },
  { id: 82, name: "Jellaba 2020 #2",        num: "JEL-082", type: "Jellaba",    year: 2020, price: "",   img: "2020/412 (10_20).jpg", emoji: "🧥", download: "" },
  { id: 83, name: "Jellaba 2020 #3",        num: "JEL-083", type: "Jellaba",    year: 2020, price: "",   img: "2020/417 (10_20).jpg", emoji: "🧥", download: "" },
  { id: 84, name: "Jellaba 2020 #4",        num: "JEL-084", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0028.jpg", emoji: "🧥", download: "" },
  { id: 85, name: "Jellaba 2020 #5",        num: "JEL-085", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0029.jpg", emoji: "🧥", download: "" },
  { id: 86, name: "Jellaba 2020 #6",        num: "JEL-086", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0030.jpg", emoji: "🧥", download: "" },
  { id: 87, name: "Jellaba 2020 #7",        num: "JEL-087", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0031.jpg", emoji: "🧥", download: "" },
  { id: 88, name: "Jellaba 2020 #8",        num: "JEL-088", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0032.jpg", emoji: "🧥", download: "" },
  { id: 89, name: "Jellaba 2020 #9",        num: "JEL-089", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0033.jpg", emoji: "🧥", download: "" },
  { id: 90, name: "Jellaba 2020 #10",       num: "JEL-090", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0034.jpg", emoji: "🧥", download: "" },
  { id: 91, name: "Jellaba 2020 #11",       num: "JEL-091", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0035.jpg", emoji: "🧥", download: "" },
  { id: 92, name: "Jellaba 2020 #12",       num: "JEL-092", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0036.jpg", emoji: "🧥", download: "" },
  { id: 93, name: "Jellaba 2020 #13",       num: "JEL-093", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0038.jpg", emoji: "🧥", download: "" },
  { id: 94, name: "Jellaba 2020 #14",       num: "JEL-094", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0039.jpg", emoji: "🧥", download: "" },
  { id: 95, name: "Jellaba 2020 #15",       num: "JEL-095", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0040.jpg", emoji: "🧥", download: "" },
  { id: 96, name: "Jellaba 2020 #16",       num: "JEL-096", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0041.jpg", emoji: "🧥", download: "" },
  { id: 97, name: "Jellaba 2020 #17",       num: "JEL-097", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0042.jpg", emoji: "🧥", download: "" },
  { id: 98, name: "Jellaba 2020 #18",       num: "JEL-098", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0043.jpg", emoji: "🧥", download: "" },
  { id: 99, name: "Jellaba 2020 #19",       num: "JEL-099", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0044.jpg", emoji: "🧥", download: "" },
  { id: 100, name: "Jellaba 2020 #20",      num: "JEL-100", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0045.jpg", emoji: "🧥", download: "" },
  { id: 101, name: "Jellaba 2020 #21",      num: "JEL-101", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0046.jpg", emoji: "🧥", download: "" },
  { id: 102, name: "Jellaba 2020 #22",      num: "JEL-102", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0047.jpg", emoji: "🧥", download: "" },
  { id: 103, name: "Jellaba 2020 #23",      num: "JEL-103", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0049.jpg", emoji: "🧥", download: "" },
  { id: 104, name: "Jellaba 2020 #24",      num: "JEL-104", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221019-WA0050.jpg", emoji: "🧥", download: "" },
  { id: 105, name: "Jellaba 2020 #25",      num: "JEL-105", type: "Jellaba",    year: 2020, price: "",   img: "2020/IMG-20221108-WA0022.jpg", emoji: "🧥", download: "" },
  { id: 106, name: "Jellaba 2020 #26",      num: "JEL-106", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20230603_202739_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 107, name: "Jellaba 2020 #27",      num: "JEL-107", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20230614_170012_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 108, name: "Jellaba 2020 #28",      num: "JEL-108", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20230822_110156_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 109, name: "Jellaba 2020 #29",      num: "JEL-109", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20230911_093604_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 110, name: "Jellaba 2020 #30",      num: "JEL-110", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20240429_101007_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 111, name: "Jellaba 2020 #31",      num: "JEL-111", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20250113_150410_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 112, name: "Jellaba 2020 #32",      num: "JEL-112", type: "Jellaba",    year: 2020, price: "",   img: "2020/Screenshot_20250113_150410_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 113, name: "Jellaba 2021 #1",       num: "JEL-113", type: "Jellaba",    year: 2021, price: "",   img: "2021/20240507_194306.jpg", emoji: "🧥", download: "" },
  { id: 114, name: "Jellaba 2021 #2",       num: "JEL-114", type: "Jellaba",    year: 2021, price: "",   img: "2021/518 (03_21).jpg", emoji: "🧥", download: "" },
  { id: 115, name: "Jellaba 2021 #3",       num: "JEL-115", type: "Jellaba",    year: 2021, price: "",   img: "2021/519 (03_21).jpg", emoji: "🧥", download: "" },
  { id: 116, name: "Jellaba 2021 #4",       num: "JEL-116", type: "Jellaba",    year: 2021, price: "",   img: "2021/520 (03_21).jpg", emoji: "🧥", download: "" },
  { id: 117, name: "Jellaba 2021 #5",       num: "JEL-117", type: "Jellaba",    year: 2021, price: "",   img: "2021/648 (10_21).jpg", emoji: "🧥", download: "" },
  { id: 118, name: "Jellaba 2021 #6",       num: "JEL-118", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0022.jpg", emoji: "🧥", download: "" },
  { id: 119, name: "Jellaba 2021 #7",       num: "JEL-119", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0023.jpg", emoji: "🧥", download: "" },
  { id: 120, name: "Jellaba 2021 #8",       num: "JEL-120", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0024.jpg", emoji: "🧥", download: "" },
  { id: 121, name: "Jellaba 2021 #9",       num: "JEL-121", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0025.jpg", emoji: "🧥", download: "" },
  { id: 122, name: "Jellaba 2021 #10",      num: "JEL-122", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0026.jpg", emoji: "🧥", download: "" },
  { id: 123, name: "Jellaba 2021 #11",      num: "JEL-123", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0027.jpg", emoji: "🧥", download: "" },
  { id: 124, name: "Jellaba 2021 #12",      num: "JEL-124", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0028.jpg", emoji: "🧥", download: "" },
  { id: 125, name: "Jellaba 2021 #13",      num: "JEL-125", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0030.jpg", emoji: "🧥", download: "" },
  { id: 126, name: "Jellaba 2021 #14",      num: "JEL-126", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0033.jpg", emoji: "🧥", download: "" },
  { id: 127, name: "Jellaba 2021 #15",      num: "JEL-127", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0035.jpg", emoji: "🧥", download: "" },
  { id: 128, name: "Jellaba 2021 #16",      num: "JEL-128", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0036.jpg", emoji: "🧥", download: "" },
  { id: 129, name: "Jellaba 2021 #17",      num: "JEL-129", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0037.jpg", emoji: "🧥", download: "" },
  { id: 130, name: "Jellaba 2021 #18",      num: "JEL-130", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0038.jpg", emoji: "🧥", download: "" },
  { id: 131, name: "Jellaba 2021 #19",      num: "JEL-131", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0039.jpg", emoji: "🧥", download: "" },
  { id: 132, name: "Jellaba 2021 #20",      num: "JEL-132", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221007-WA0040.jpg", emoji: "🧥", download: "" },
  { id: 133, name: "Jellaba 2021 #21",      num: "JEL-133", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221020-WA0007.jpg", emoji: "🧥", download: "" },
  { id: 134, name: "Jellaba 2021 #22",      num: "JEL-134", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221024-WA0007.jpg", emoji: "🧥", download: "" },
  { id: 135, name: "Jellaba 2021 #23",      num: "JEL-135", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221027-WA0006.jpg", emoji: "🧥", download: "" },
  { id: 136, name: "Jellaba 2021 #24",      num: "JEL-136", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221102-WA0078.jpg", emoji: "🧥", download: "" },
  { id: 137, name: "Jellaba 2021 #25",      num: "JEL-137", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221102-WA0086.jpg", emoji: "🧥", download: "" },
  { id: 138, name: "Jellaba 2021 #26",      num: "JEL-138", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221110-WA0070.jpg", emoji: "🧥", download: "" },
  { id: 139, name: "Jellaba 2021 #27",      num: "JEL-139", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221219-WA0165.jpg", emoji: "🧥", download: "" },
  { id: 140, name: "Jellaba 2021 #28",      num: "JEL-140", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20221229-WA0140.jpg", emoji: "🧥", download: "" },
  { id: 141, name: "Jellaba 2021 #29",      num: "JEL-141", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20230105-WA0050.jpg", emoji: "🧥", download: "" },
  { id: 142, name: "Jellaba 2021 #30",      num: "JEL-142", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20230309-WA0068.jpg", emoji: "🧥", download: "" },
  { id: 143, name: "Jellaba 2021 #31",      num: "JEL-143", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20230314-WA0086.jpg", emoji: "🧥", download: "" },
  { id: 144, name: "Jellaba 2021 #32",      num: "JEL-144", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20230314-WA0090.jpg", emoji: "🧥", download: "" },
  { id: 145, name: "Jellaba 2021 #33",      num: "JEL-145", type: "Jellaba",    year: 2021, price: "",   img: "2021/IMG-20230831-WA0016.jpg", emoji: "🧥", download: "" },
  { id: 146, name: "Jellaba 2021 #34",      num: "JEL-146", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20230111_214840_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 147, name: "Jellaba 2021 #35",      num: "JEL-147", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20230111_215606_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 148, name: "Jellaba 2021 #36",      num: "JEL-148", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20240129_092103_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 149, name: "Jellaba 2021 #37",      num: "JEL-149", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20240626_125425_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 150, name: "Jellaba 2021 #38",      num: "JEL-150", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20250718_113416_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 151, name: "Jellaba 2021 #39",      num: "JEL-151", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20260209_160914_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 152, name: "Jellaba 2021 #40",      num: "JEL-152", type: "Jellaba",    year: 2021, price: "",   img: "2021/Screenshot_20260209_160914_Gallery.jpg", emoji: "🧥", download: "" },
    { id: 153, name: "Jellaba 2022 #1", num: "JEL-153", type: "Jellaba", year: 2022, price: "", img: "2022/20221102_122053.jpg", emoji: "🧥", download: "" },
  { id: 154, name: "Jellaba 2022 #2", num: "JEL-154", type: "Jellaba", year: 2022, price: "", img: "2022/20230111_125354.jpg", emoji: "🧥", download: "" },
 /* { id: 155, name: "Jellaba 2022 #3", num: "JEL-155", type: "Jellaba", year: 2022, price: "", img: "2022/20230208_141457.jpg", emoji: "🧥", download: "" },*/
  { id: 156, name: "Jellaba 2022 #4", num: "JEL-156", type: "Jellaba", year: 2022, price: "", img: "2022/20241114_125135.jpg", emoji: "🧥", download: "" },
  { id: 157, name: "Jellaba 2022 #5", num: "JEL-157", type: "Jellaba", year: 2022, price: "", img: "2022/698 (01_22).jpg", emoji: "🧥", download: "" },
  { id: 158, name: "Jellaba 2022 #6", num: "JEL-158", type: "Jellaba", year: 2022, price: "", img: "2022/757 (04_22).jpg", emoji: "🧥", download: "" },
  { id: 159, name: "Jellaba 2022 #7", num: "JEL-159", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0005.jpg", emoji: "🧥", download: "" },
  { id: 160, name: "Jellaba 2022 #8", num: "JEL-160", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0033.jpg", emoji: "🧥", download: "" },
  { id: 161, name: "Jellaba 2022 #9", num: "JEL-161", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0044.jpg", emoji: "🧥", download: "" },
  { id: 162, name: "Jellaba 2022 #10", num: "JEL-162", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0045.jpg", emoji: "🧥", download: "" },
  { id: 163, name: "Jellaba 2022 #11", num: "JEL-163", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0046.jpg", emoji: "🧥", download: "" },
  { id: 164, name: "Jellaba 2022 #12", num: "JEL-164", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221003-WA0051.jpg", emoji: "🧥", download: "" },
  { id: 165, name: "Jellaba 2022 #13", num: "JEL-165", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221004-WA0021.jpg", emoji: "🧥", download: "" },
  { id: 166, name: "Jellaba 2022 #14", num: "JEL-166", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0005.jpg", emoji: "🧥", download: "" },
  { id: 167, name: "Jellaba 2022 #15", num: "JEL-167", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0037.jpg", emoji: "🧥", download: "" },
  { id: 168, name: "Jellaba 2022 #16", num: "JEL-168", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0038.jpg", emoji: "🧥", download: "" },
  { id: 169, name: "Jellaba 2022 #17", num: "JEL-169", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0039.jpg", emoji: "🧥", download: "" },
  { id: 170, name: "Jellaba 2022 #18", num: "JEL-170", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0040.jpg", emoji: "🧥", download: "" },
  { id: 171, name: "Jellaba 2022 #19", num: "JEL-171", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0041.jpg", emoji: "🧥", download: "" },
  { id: 172, name: "Jellaba 2022 #20", num: "JEL-172", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0043.jpg", emoji: "🧥", download: "" },
  { id: 173, name: "Jellaba 2022 #21", num: "JEL-173", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0044.jpg", emoji: "🧥", download: "" },
  { id: 174, name: "Jellaba 2022 #22", num: "JEL-174", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0045.jpg", emoji: "🧥", download: "" },
  { id: 175, name: "Jellaba 2022 #23", num: "JEL-175", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0046.jpg", emoji: "🧥", download: "" },
  { id: 176, name: "Jellaba 2022 #24", num: "JEL-176", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0047.jpg", emoji: "🧥", download: "" },
  { id: 177, name: "Jellaba 2022 #25", num: "JEL-177", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0048.jpg", emoji: "🧥", download: "" },
  { id: 178, name: "Jellaba 2022 #26", num: "JEL-178", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0049.jpg", emoji: "🧥", download: "" },
  { id: 179, name: "Jellaba 2022 #27", num: "JEL-179", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0050.jpg", emoji: "🧥", download: "" },
  { id: 180, name: "Jellaba 2022 #28", num: "JEL-180", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0053.jpg", emoji: "🧥", download: "" },
  { id: 181, name: "Jellaba 2022 #29", num: "JEL-181", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0054.jpg", emoji: "🧥", download: "" },
  { id: 182, name: "Jellaba 2022 #30", num: "JEL-182", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0055.jpg", emoji: "🧥", download: "" },
  { id: 183, name: "Jellaba 2022 #31", num: "JEL-183", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0056.jpg", emoji: "🧥", download: "" },
  { id: 184, name: "Jellaba 2022 #32", num: "JEL-184", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0058.jpg", emoji: "🧥", download: "" },
  { id: 185, name: "Jellaba 2022 #33", num: "JEL-185", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0059.jpg", emoji: "🧥", download: "" },
  { id: 186, name: "Jellaba 2022 #34", num: "JEL-186", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0060.jpg", emoji: "🧥", download: "" },
  { id: 187, name: "Jellaba 2022 #35", num: "JEL-187", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0061.jpg", emoji: "🧥", download: "" },
  { id: 188, name: "Jellaba 2022 #36", num: "JEL-188", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221006-WA0002.jpg", emoji: "🧥", download: "" },
  { id: 189, name: "Jellaba 2022 #37", num: "JEL-189", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0003.jpg", emoji: "🧥", download: "" },
  { id: 190, name: "Jellaba 2022 #38", num: "JEL-190", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0004.jpg", emoji: "🧥", download: "" },
  { id: 191, name: "Jellaba 2022 #39", num: "JEL-191", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0005.jpg", emoji: "🧥", download: "" },
  { id: 192, name: "Jellaba 2022 #40", num: "JEL-192", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0013.jpg", emoji: "🧥", download: "" },
  { id: 193, name: "Jellaba 2022 #41", num: "JEL-193", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0015.jpg", emoji: "🧥", download: "" },
  { id: 194, name: "Jellaba 2022 #42", num: "JEL-194", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0017.jpg", emoji: "🧥", download: "" },
  { id: 195, name: "Jellaba 2022 #43", num: "JEL-195", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0018.jpg", emoji: "🧥", download: "" },
  { id: 196, name: "Jellaba 2022 #44", num: "JEL-196", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0019.jpg", emoji: "🧥", download: "" },
  { id: 197, name: "Jellaba 2022 #45", num: "JEL-197", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0020.jpg", emoji: "🧥", download: "" },
  { id: 198, name: "Jellaba 2022 #46", num: "JEL-198", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0041.jpg", emoji: "🧥", download: "" },
  { id: 199, name: "Jellaba 2022 #47", num: "JEL-199", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0042.jpg", emoji: "🧥", download: "" },
  { id: 200, name: "Jellaba 2022 #48", num: "JEL-200", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0043.jpg", emoji: "🧥", download: "" },
  { id: 201, name: "Jellaba 2022 #49", num: "JEL-201", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0047.jpg", emoji: "🧥", download: "" },
  { id: 202, name: "Jellaba 2022 #50", num: "JEL-202", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0048.jpg", emoji: "🧥", download: "" },
  { id: 203, name: "Jellaba 2022 #51", num: "JEL-203", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221007-WA0049.jpg", emoji: "🧥", download: "" },
  { id: 204, name: "Jellaba 2022 #52", num: "JEL-204", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221008-WA0025.jpg", emoji: "🧥", download: "" },
  { id: 205, name: "Jellaba 2022 #53", num: "JEL-205", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221015-WA0022.jpg", emoji: "🧥", download: "" },
  { id: 206, name: "Jellaba 2022 #54", num: "JEL-206", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221015-WA0023.jpg", emoji: "🧥", download: "" },
  { id: 207, name: "Jellaba 2022 #55", num: "JEL-207", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221027-WA0007.jpg", emoji: "🧥", download: "" },
  { id: 208, name: "Jellaba 2022 #56", num: "JEL-208", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221113-WA0158.jpg", emoji: "🧥", download: "" },
  { id: 209, name: "Jellaba 2022 #57", num: "JEL-209", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221116-WA0370.jpg", emoji: "🧥", download: "" },
  { id: 210, name: "Jellaba 2022 #58", num: "JEL-210", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221116-WA0381.jpg", emoji: "🧥", download: "" },
  { id: 211, name: "Jellaba 2022 #59", num: "JEL-211", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221124-WA0240.jpg", emoji: "🧥", download: "" },
  { id: 212, name: "Jellaba 2022 #60", num: "JEL-212", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221207-WA0200.jpg", emoji: "🧥", download: "" },
  { id: 213, name: "Jellaba 2022 #61", num: "JEL-213", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221208-WA0163.jpg", emoji: "🧥", download: "" },
  { id: 214, name: "Jellaba 2022 #62", num: "JEL-214", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221210-WA0009.jpg", emoji: "🧥", download: "" },
  { id: 215, name: "Jellaba 2022 #63", num: "JEL-215", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221213-WA0078.jpg", emoji: "🧥", download: "" },
  { id: 216, name: "Jellaba 2022 #64", num: "JEL-216", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20221221-WA0051.jpg", emoji: "🧥", download: "" },
  { id: 217, name: "Jellaba 2022 #65", num: "JEL-217", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230103-WA0078.jpg", emoji: "🧥", download: "" },
  { id: 218, name: "Jellaba 2022 #66", num: "JEL-218", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230104-WA0039.jpg", emoji: "🧥", download: "" },
  { id: 219, name: "Jellaba 2022 #67", num: "JEL-219", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230125-WA0052.jpg", emoji: "🧥", download: "" },
  { id: 220, name: "Jellaba 2022 #68", num: "JEL-220", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230215-WA0063.jpg", emoji: "🧥", download: "" },
  { id: 221, name: "Jellaba 2022 #69", num: "JEL-221", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230218-WA0061.jpg", emoji: "🧥", download: "" },
  { id: 222, name: "Jellaba 2022 #70", num: "JEL-222", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230218-WA0062.jpg", emoji: "🧥", download: "" },
  { id: 223, name: "Jellaba 2022 #71", num: "JEL-223", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230305-WA0056.jpg", emoji: "🧥", download: "" },
  { id: 224, name: "Jellaba 2022 #72", num: "JEL-224", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230306-WA0147.jpg", emoji: "🧥", download: "" },
  { id: 225, name: "Jellaba 2022 #73", num: "JEL-225", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230307-WA0023.jpg", emoji: "🧥", download: "" },
  { id: 226, name: "Jellaba 2022 #74", num: "JEL-226", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230314-WA0088.jpg", emoji: "🧥", download: "" },
  { id: 227, name: "Jellaba 2022 #75", num: "JEL-227", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230317-WA0206.jpg", emoji: "🧥", download: "" },
  { id: 228, name: "Jellaba 2022 #76", num: "JEL-228", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230515-WA0096.jpg", emoji: "🧥", download: "" },
  { id: 229, name: "Jellaba 2022 #77", num: "JEL-229", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230725-WA0104.jpg", emoji: "🧥", download: "" },
  { id: 230, name: "Jellaba 2022 #78", num: "JEL-230", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230817-WA0083.jpg", emoji: "🧥", download: "" },
  { id: 231, name: "Jellaba 2022 #79", num: "JEL-231", type: "Jellaba", year: 2022, price: "", img: "2022/IMG-20230831-WA0011.jpg", emoji: "🧥", download: "" },
  { id: 232, name: "Jellaba 2022 #80", num: "JEL-232", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221113-191741_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 233, name: "Jellaba 2022 #81", num: "JEL-233", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221209-074612_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 234, name: "Jellaba 2022 #82", num: "JEL-234", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221227_102021_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 235, name: "Jellaba 2022 #83", num: "JEL-235", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221227_102139_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 236, name: "Jellaba 2022 #84", num: "JEL-236", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221227_141452_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 237, name: "Jellaba 2022 #85", num: "JEL-237", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20221227_141452_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 238, name: "Jellaba 2022 #86", num: "JEL-238", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230104_222618_Instagram (1).jpg", emoji: "🧥", download: "" },
  { id: 239, name: "Jellaba 2022 #87", num: "JEL-239", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230110_193706_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 240, name: "Jellaba 2022 #88", num: "JEL-240", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230111_212533_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 241, name: "Jellaba 2022 #89", num: "JEL-241", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230115_201226_Pinterest.jpg", emoji: "🧥", download: "" },
  { id: 242, name: "Jellaba 2022 #90", num: "JEL-242", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230316_103757_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 243, name: "Jellaba 2022 #91", num: "JEL-243", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230410_120857_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 244, name: "Jellaba 2022 #92", num: "JEL-244", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230501_093117_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 245, name: "Jellaba 2022 #93", num: "JEL-245", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230519_163825_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 246, name: "Jellaba 2022 #94", num: "JEL-246", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230602_124303_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 247, name: "Jellaba 2022 #95", num: "JEL-247", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230613_101350_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 248, name: "Jellaba 2022 #96", num: "JEL-248", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20230619_150643_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 249, name: "Jellaba 2022 #97", num: "JEL-249", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20231031_160811_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 250, name: "Jellaba 2022 #98", num: "JEL-250", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20240429_170511_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 251, name: "Jellaba 2022 #99", num: "JEL-251", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20240515_180526_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 252, name: "Jellaba 2022 #100", num: "JEL-252", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20250212_104414_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 253, name: "Jellaba 2022 #101", num: "JEL-253", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20250521_134931_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 254, name: "Jellaba 2022 #102", num: "JEL-254", type: "Jellaba", year: 2022, price: "", img: "2022/Screenshot_20251210_090212_WhatsApp.jpg", emoji: "🧥", download: "" },
  /*{ id: 255, name: "Jellaba 2023 #1", num: "JEL-255", type: "Jellaba", year: 2023, price: "", img: "2023/20230208_141751.jpg", emoji: "🧥", download: "" },*/
  { id: 256, name: "Jellaba 2023 #2", num: "JEL-256", type: "Jellaba", year: 2023, price: "", img: "2023/20230210_174318.jpg", emoji: "🧥", download: "" },
  { id: 257, name: "Jellaba 2023 #3", num: "JEL-257", type: "Jellaba", year: 2023, price: "", img: "2023/20230210_174605.jpg", emoji: "🧥", download: "" },
  { id: 258, name: "Jellaba 2023 #4", num: "JEL-258", type: "Jellaba", year: 2023, price: "", img: "2023/20230221_162434.jpg", emoji: "🧥", download: "" },
 /* { id: 259, name: "Jellaba 2023 #5", num: "JEL-259", type: "Jellaba", year: 2023, price: "", img: "2023/20230223_194152.jpg", emoji: "🧥", download: "" },*/
  { id: 260, name: "Jellaba 2023 #6", num: "JEL-260", type: "Jellaba", year: 2023, price: "", img: "2023/20230301_201020.jpg", emoji: "🧥", download: "" },
  { id: 261, name: "Jellaba 2023 #7", num: "JEL-261", type: "Jellaba", year: 2023, price: "", img: "2023/20230303_090619.jpg", emoji: "🧥", download: "" },
  { id: 262, name: "Jellaba 2023 #8", num: "JEL-262", type: "Jellaba", year: 2023, price: "", img: "2023/20230304_175737.jpg", emoji: "🧥", download: "" },
  { id: 263, name: "Jellaba 2023 #9", num: "JEL-263", type: "Jellaba", year: 2023, price: "", img: "2023/20230710_235625.jpg", emoji: "🧥", download: "" },
  { id: 264, name: "Jellaba 2023 #10", num: "JEL-264", type: "Jellaba", year: 2023, price: "", img: "2023/20230715_081525.jpg", emoji: "🧥", download: "" },
 /* { id: 265, name: "Jellaba 2023 #11", num: "JEL-265", type: "Jellaba", year: 2023, price: "", img: "2023/20230717_180307.jpg", emoji: "🧥", download: "" },*/
  /*{ id: 266, name: "Jellaba 2023 #12", num: "JEL-266", type: "Jellaba", year: 2023, price: "", img: "2023/20230918_184854.jpg", emoji: "🧥", download: "" },*/
  { id: 267, name: "Jellaba 2023 #13", num: "JEL-267", type: "Jellaba", year: 2023, price: "", img: "2023/20231205_160656.jpg", emoji: "🧥", download: "" },
  { id: 268, name: "Jellaba 2023 #14", num: "JEL-268", type: "Jellaba", year: 2023, price: "", img: "2023/20240514_130947.jpg", emoji: "🧥", download: "" },
  { id: 269, name: "Jellaba 2023 #15", num: "JEL-269", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230227-WA0044.jpg", emoji: "🧥", download: "" },
  { id: 270, name: "Jellaba 2023 #16", num: "JEL-270", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230310-WA0174.jpg", emoji: "🧥", download: "" },
  { id: 271, name: "Jellaba 2023 #17", num: "JEL-271", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230310-WA0192.jpeg", emoji: "🧥", download: "" },
  { id: 272, name: "Jellaba 2023 #18", num: "JEL-272", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230310-WA0196.jpeg", emoji: "🧥", download: "" },
  { id: 273, name: "Jellaba 2023 #19", num: "JEL-273", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230312-WA0212.jpg", emoji: "🧥", download: "" },
  { id: 274, name: "Jellaba 2023 #20", num: "JEL-274", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230411-WA0173.jpg", emoji: "🧥", download: "" },
  { id: 275, name: "Jellaba 2023 #21", num: "JEL-275", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230526-WA0120.jpg", emoji: "🧥", download: "" },
  { id: 276, name: "Jellaba 2023 #22", num: "JEL-276", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230602-WA0067.jpg", emoji: "🧥", download: "" },
  { id: 277, name: "Jellaba 2023 #23", num: "JEL-277", type: "Jellaba", year: 2023, price: "", img: "2023/IMG-20230721-WA0025.jpg", emoji: "🧥", download: "" },
  { id: 278, name: "Jellaba 2023 #24", num: "JEL-278", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230303_215008_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 279, name: "Jellaba 2023 #25", num: "JEL-279", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230309_102348_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 280, name: "Jellaba 2023 #26", num: "JEL-280", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230314_095926_Telegram.jpg", emoji: "🧥", download: "" },
  { id: 281, name: "Jellaba 2023 #27", num: "JEL-281", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230314_171404_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 282, name: "Jellaba 2023 #28", num: "JEL-282", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230406_135856_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 283, name: "Jellaba 2023 #29", num: "JEL-283", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230414_150321_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 284, name: "Jellaba 2023 #30", num: "JEL-284", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230428_114113_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 285, name: "Jellaba 2023 #31", num: "JEL-285", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230501_141145_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 286, name: "Jellaba 2023 #32", num: "JEL-286", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230508_061539_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 287, name: "Jellaba 2023 #33", num: "JEL-287", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230512_122315_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 288, name: "Jellaba 2023 #34", num: "JEL-288", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230513_101242_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 289, name: "Jellaba 2023 #35", num: "JEL-289", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230513_102344_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 290, name: "Jellaba 2023 #36", num: "JEL-290", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230513_114305_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 291, name: "Jellaba 2023 #37", num: "JEL-291", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230517_092542_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 292, name: "Jellaba 2023 #38", num: "JEL-292", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230517_180738_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 293, name: "Jellaba 2023 #39", num: "JEL-293", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230522_130522_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 294, name: "Jellaba 2023 #40", num: "JEL-294", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230522_130858_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 295, name: "Jellaba 2023 #41", num: "JEL-295", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230526_094738_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 296, name: "Jellaba 2023 #42", num: "JEL-296", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230531_100935_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 297, name: "Jellaba 2023 #43", num: "JEL-297", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230531_101000_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 298, name: "Jellaba 2023 #44", num: "JEL-298", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230601_122952_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 299, name: "Jellaba 2023 #45", num: "JEL-299", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230603_095739_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 300, name: "Jellaba 2023 #46", num: "JEL-300", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230605_195426_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 301, name: "Jellaba 2023 #47", num: "JEL-301", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230607_182923_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 302, name: "Jellaba 2023 #48", num: "JEL-302", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230607_201002_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 303, name: "Jellaba 2023 #49", num: "JEL-303", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230720_172356_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 304, name: "Jellaba 2023 #50", num: "JEL-304", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230721_185949_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 305, name: "Jellaba 2023 #51", num: "JEL-305", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230803_164523_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 306, name: "Jellaba 2023 #52", num: "JEL-306", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230808_101943_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 307, name: "Jellaba 2023 #53", num: "JEL-307", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230829_194547_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 308, name: "Jellaba 2023 #54", num: "JEL-308", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20230831_145810_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 309, name: "Jellaba 2023 #55", num: "JEL-309", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231027_085024_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 310, name: "Jellaba 2023 #56", num: "JEL-310", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231110_113111_Gallery.jpg", emoji: "🧥", download: "" },
  { id: 311, name: "Jellaba 2023 #57", num: "JEL-311", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231112_205742_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 312, name: "Jellaba 2023 #58", num: "JEL-312", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231113_214130_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 313, name: "Jellaba 2023 #59", num: "JEL-313", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231204_225748_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 314, name: "Jellaba 2023 #60", num: "JEL-314", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231223_231521_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 315, name: "Jellaba 2023 #61", num: "JEL-315", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20231229_090851_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 316, name: "Jellaba 2023 #62", num: "JEL-316", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20240308_163950_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 317, name: "Jellaba 2023 #63", num: "JEL-317", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20241203_191233_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 318, name: "Jellaba 2023 #64", num: "JEL-318", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20250407_222820_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 319, name: "Jellaba 2023 #65", num: "JEL-319", type: "Jellaba", year: 2023, price: "", img: "2023/Screenshot_20250731_084240_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 320, name: "Jellaba 2024 #1", num: "JEL-320", type: "Jellaba", year: 2024, price: "", img: "2024/20240515_183501.jpg", emoji: "🧥", download: "" },
  { id: 321, name: "Jellaba 2024 #2", num: "JEL-321", type: "Jellaba", year: 2024, price: "", img: "2024/20240703_140244.jpg", emoji: "🧥", download: "" },
  { id: 322, name: "Jellaba 2024 #3", num: "JEL-322", type: "Jellaba", year: 2024, price: "", img: "2024/20241015_200101.jpg", emoji: "🧥", download: "" },
  { id: 323, name: "Jellaba 2024 #4", num: "JEL-323", type: "Jellaba", year: 2024, price: "", img: "2024/20241023_110658.jpg", emoji: "🧥", download: "" },
  { id: 324, name: "Jellaba 2024 #5", num: "JEL-324", type: "Jellaba", year: 2024, price: "", img: "2024/20241128_162652.jpg", emoji: "🧥", download: "" },
  { id: 325, name: "Jellaba 2024 #6", num: "JEL-325", type: "Jellaba", year: 2024, price: "", img: "2024/20241128_162723.jpg", emoji: "🧥", download: "" },
  { id: 326, name: "Jellaba 2024 #7", num: "JEL-326", type: "Jellaba", year: 2024, price: "", img: "2024/20241130_152947.jpg", emoji: "🧥", download: "" },
  { id: 327, name: "Jellaba 2024 #8", num: "JEL-327", type: "Jellaba", year: 2024, price: "", img: "2024/20241130_153007.jpg", emoji: "🧥", download: "" },
  { id: 328, name: "Jellaba 2024 #9", num: "JEL-328", type: "Jellaba", year: 2024, price: "", img: "2024/20241204_115424.jpg", emoji: "🧥", download: "" },
  { id: 329, name: "Jellaba 2024 #10", num: "JEL-329", type: "Jellaba", year: 2024, price: "", img: "2024/20241209_131901.jpg", emoji: "🧥", download: "" },
  { id: 330, name: "Jellaba 2024 #11", num: "JEL-330", type: "Jellaba", year: 2024, price: "", img: "2024/20241210_132233.jpg", emoji: "🧥", download: "" },
  { id: 331, name: "Jellaba 2024 #12", num: "JEL-331", type: "Jellaba", year: 2024, price: "", img: "2024/20241210_154610.jpg", emoji: "🧥", download: "" },
  { id: 332, name: "Jellaba 2024 #13", num: "JEL-332", type: "Jellaba", year: 2024, price: "", img: "2024/20241224_122843.jpg", emoji: "🧥", download: "" },
  { id: 333, name: "Jellaba 2024 #14", num: "JEL-333", type: "Jellaba", year: 2024, price: "", img: "2024/20241226_130814.jpg", emoji: "🧥", download: "" },
  { id: 334, name: "Jellaba 2024 #15", num: "JEL-334", type: "Jellaba", year: 2024, price: "", img: "2024/20250107_104242.jpg", emoji: "🧥", download: "" },
  { id: 335, name: "Jellaba 2024 #16", num: "JEL-335", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240111_132129_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 336, name: "Jellaba 2024 #17", num: "JEL-336", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240113_102516_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 337, name: "Jellaba 2024 #18", num: "JEL-337", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240115_120720_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 338, name: "Jellaba 2024 #19", num: "JEL-338", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240223_072717_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 339, name: "Jellaba 2024 #20", num: "JEL-339", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240223_085442_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 340, name: "Jellaba 2024 #21", num: "JEL-340", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240223_100424_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 341, name: "Jellaba 2024 #22", num: "JEL-341", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240223_200437_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 342, name: "Jellaba 2024 #23", num: "JEL-342", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240315_112310_Instagram.jpg", emoji: "🧥", download: "" },
  { id: 343, name: "Jellaba 2024 #24", num: "JEL-343", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240318_085209_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 344, name: "Jellaba 2024 #25", num: "JEL-344", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240507_182311_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 345, name: "Jellaba 2024 #26", num: "JEL-345", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240717_163347_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 346, name: "Jellaba 2024 #27", num: "JEL-346", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20240726_093806_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 347, name: "Jellaba 2024 #28", num: "JEL-347", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241022_130032_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 348, name: "Jellaba 2024 #29", num: "JEL-348", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241101_172027_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 349, name: "Jellaba 2024 #30", num: "JEL-349", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241101_172047_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 350, name: "Jellaba 2024 #31", num: "JEL-350", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241114_102609_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 351, name: "Jellaba 2024 #32", num: "JEL-351", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241120_174150_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 352, name: "Jellaba 2024 #33", num: "JEL-352", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20241223_203148_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 353, name: "Jellaba 2024 #34", num: "JEL-353", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250113_150050_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 354, name: "Jellaba 2024 #35", num: "JEL-354", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250418_101742_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 355, name: "Jellaba 2024 #36", num: "JEL-355", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250523_120947_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 356, name: "Jellaba 2024 #37", num: "JEL-356", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250704_201643_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 357, name: "Jellaba 2024 #38", num: "JEL-357", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250825_080639_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 358, name: "Jellaba 2024 #39", num: "JEL-358", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250922_215513_WhatsApp.jpg", emoji: "🧥", download: "" },
  { id: 359, name: "Jellaba 2024 #40", num: "JEL-359", type: "Jellaba", year: 2024, price: "", img: "2024/Screenshot_20250922_215513_WhatsApp.jpg", emoji: "🧥", download: "" },
  /*{ id: 360, name: "Jellaba 2026 #1", num: "JEL-360", type: "Jellaba", year: 2026, price: "", img: "2026/20260312_132321.jpg", emoji: "🧥", download: "" },*/
 
   { id: 378, name: "Jellaba 2026 #19", num: "JEL-378", type: "Jellaba", year: 2026, price: "", img: "2026/num1.jpg", emoji: "🧥", download: "" },
  { id: 379, name: "Jellaba 2026 #20", num: "JEL-379", type: "Caftan", year: 2026, price: "", img: "2026/num2.jpg", emoji: "🧥", download: "" },
  { id: 380, name: "Jellaba 2026 #21", num: "JEL-380", type: "Caftan", year: 2026, price: "", img: "2026/num3.jpg", emoji: "🧥", download: "" },
  { id: 381, name: "Jellaba 2026 #22", num: "JEL-381", type: "Caftan", year: 2026, price: "", img: "2026/num4.jpg", emoji: "🧥", download: "" },
  { id: 382, name: "Jellaba 2026 #23", num: "JEL-382", type: "Caftan", year: 2026, price: "", img: "2026/num5.jpg", emoji: "🧥", download: "" },
  { id: 383, name: "Jellaba 2026 #24", num: "JEL-383", type: "Jellaba", year: 2026, price: "", img: "2026/num6.jpg", emoji: "🧥", download: "" },
  
   
   
   
   { id: 361, name: "Jellaba 2026 #2", num: "JEL-361", type: "Jellaba", year: 2026, price: "", img: "2026/20260312_132605.jpg", emoji: "🧥", download: "" },
  { id: 362, name: "Jellaba 2026 #3", num: "JEL-362", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260224_102355_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 363, name: "Jellaba 2026 #4", num: "JEL-363", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260228_141744_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 364, name: "Jellaba 2026 #5", num: "JEL-364", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260302_101031_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 365, name: "Jellaba 2026 #6", num: "JEL-365", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260302_111536_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 366, name: "Jellaba 2026 #7", num: "JEL-366", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260303_113143_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 367, name: "Jellaba 2026 #8", num: "JEL-367", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260328_102949_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 368, name: "Jellaba 2026 #9", num: "JEL-368", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260330_115457_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 369, name: "Jellaba 2026 #10", num: "JEL-369", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260331_115641_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 370, name: "Jellaba 2026 #11", num: "JEL-370", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260331_133141_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 371, name: "Jellaba 2026 #12", num: "JEL-371", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260403_120045_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 372, name: "Jellaba 2026 #13", num: "JEL-372", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260407_135751_Facebook.jpg", emoji: "🧥", download: "" },
  { id: 373, name: "Jellaba 2026 #14", num: "JEL-373", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260407_181125_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 374, name: "Jellaba 2026 #15", num: "JEL-374", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260410_115511_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 375, name: "Jellaba 2026 #16", num: "JEL-375", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260415_221145_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
  { id: 376, name: "Jellaba 2026 #17", num: "JEL-376", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260416_085718_TikTok.jpg", emoji: "🧥", download: "" },
  { id: 377, name: "Jellaba 2026 #18", num: "JEL-377", type: "Jellaba", year: 2026, price: "", img: "2026/Screenshot_20260507_073920_WhatsAppBusiness.jpg", emoji: "🧥", download: "" },
];

/* ====================
   ÉTAT DES FILTRES
   ==================== */
let activeType = "all";
let activeYear = "all";

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
    return `<img class="product-img" src="${product.img}" alt="${product.name}" loading="lazy" />`;
  }
  return `<span style="font-size:64px;line-height:1">${product.emoji}</span>
          <div class="pattern-overlay" style="color:${typeAccentColor(product.type)}"></div>`;
}

function buildModalImg(product) {
  if (product.img) {
    return `<img class="product-img" src="${product.img}" alt="${product.name}" loading="lazy" />`;
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

function buildWhatsAppUrl(product) {
  const text = encodeURIComponent(
    `Bonjour, je suis intéressé par la tenue Numéro ${product.num} (Type: ${product.type}, Année: ${product.year}).`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/* ====================
   FILTRAGE
   ==================== */
function getFiltered() {
  const q = document.getElementById("search").value.toLowerCase().trim();

  return products.filter(p => {
    if (activeType !== "all" && p.type !== activeType) return false;
    if (activeYear !== "all" && String(p.year) !== activeYear) return false;
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

  const sorted = filtered.slice().sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' });
  });

  let currentYear = null;
  grid.innerHTML = sorted.map(p => {
    const yearHeader = p.year !== currentYear
      ? `<div class="year-divider"><span>${p.year}</span></div>`
      : "";

    currentYear = p.year;

    return `${yearHeader}
      <article class="card" onclick="openModal(${p.id})" role="button" tabindex="0"
               aria-label="${p.name} — ${p.type} — ${formatPrice(p.price)}"
               onkeydown="if(event.key==='Enter') openModal(${p.id})">
        <div class="card-img" style="background:${typeBgColor(p.type)}22">
          ${buildCardImg(p)}
          <span class="badge-type badge-${p.type.toLowerCase()}">${p.type}</span>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <div class="card-name">${p.name}</div>
            <a class="card-whatsapp-btn" href="${buildWhatsAppUrl(p)}" target="_blank" rel="noopener"
               aria-label="Demander des informations sur ${p.name} via WhatsApp"
               onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.2 21.5h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.7 9.7 0 0 1-1.5-5.2C2.5 6.5 6.9 2 12.2 2c2.6 0 5 1 6.8 2.8a9.6 9.6 0 0 1 2.8 6.9c0 5.3-4.3 9.8-9.6 9.8Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z"/>
              </svg>
            </a>
          </div>
          <div class="card-meta">
            <span>${p.num}</span>
            <span>${p.year}</span>
          </div>
          <div class="card-price">${formatPrice(p.price)}</div>
        </div>
      </article>`;
  }).join("");
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
  document.getElementById("m-whatsapp").href = buildWhatsAppUrl(p);
  document.getElementById("m-whatsapp").setAttribute("aria-label", `Commander via WhatsApp: ${p.name}`);
  document.getElementById("m-image-whatsapp").href = buildWhatsAppUrl(p);
  document.getElementById("m-image-whatsapp").setAttribute("aria-label", `Demander des informations sur ${p.name} via WhatsApp`);

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

function setYear(year) {
  activeYear = year;
  document.querySelectorAll("#year-chips .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.year === year);
  });
  render();
}

function resetFilters() {
  activeType = "all";
  activeYear = "all";
  document.getElementById("search").value = "";
  document.querySelectorAll("#type-chips .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.type === "all");
  });
  document.querySelectorAll("#year-chips .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.year === "all");
  });
  render();
}

/* ====================
   INITIALISATIONS
   ==================== */
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  const modalImage = document.getElementById("m-img");
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 300);
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  modalImage.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  modalImage.addEventListener("touchend", event => {
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStartX;
    const distanceY = touch.clientY - touchStartY;

    if (Math.abs(distanceX) < 50 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
    navigateProduct(distanceX < 0 ? 1 : -1);
  }, { passive: true });

  /* Filtres type */
  document.querySelectorAll("#type-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => setType(chip.dataset.type));
  });

  /* Filtre année */
  document.querySelectorAll("#year-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => setYear(chip.dataset.year));
  });

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
