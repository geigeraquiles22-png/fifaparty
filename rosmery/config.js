const STORE_CONFIG = {
  brandName: "FIFAPARTY",
  ownerName: "Rosmery Ynfant",
  tagline: "Floristería & Eventos de Lujo",
  description: "Especialistas en arreglos florales exclusivos, decoración de eventos y detalles únicos. Cada creación es una obra de arte diseñada para los momentos más importantes de tu vida.",
  whatsappNumber: "18294571121",
  instagram1: "fifaparty",
  instagram2: "rosemaryfloristeriard",
  address: "Alma Rosa1, Pedro A. Pérez 13, República Dominicana",
  adminPassword: "fifaparty2026",
  colors: {
    primary: "#0A0A0A",
    surface: "#111111",
    accent: "#C9A84C",
    accentLight: "#E4D2A8",
    red: "#8B0000",
    redLight: "#C41E3A",
    cream: "#FDF8F3",
    textMain: "#FDF8F3",
    textMuted: "#8A8A8A"
  },
  categories: [
    { id: "eventos", name: "Eventos Exclusivos", description: "Decoración floral para bodas, cumpleaños y celebraciones de lujo" },
    { id: "rosas", name: "Rosas Importadas", description: "Las rosas más frescas y elegantes del mercado" },
    { id: "cajas", name: "Cajas & Arreglos", description: "Presentaciones únicas que impresionan desde el primer vistazo" },
    { id: "globos", name: "Globos & Detalles", description: "Detalles que elevan cada momento especial" }
  ],
  testimonials: [
    { text: "Rosmery transformó mi evento en algo absolutamente mágico. Cada detalle fue perfecto, mis invitados quedaron impresionados.", author: "Cliente FIFAPARTY" },
    { text: "Las rosas importadas son de una calidad increíble. El arreglo duró semanas y llenó mi hogar de elegancia.", author: "Cliente FIFAPARTY" },
    { text: "Contraté FIFAPARTY para la fiesta de mi esposo y superó todas mis expectativas. Definitivamente el mejor en RD.", author: "Cliente FIFAPARTY" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORE_CONFIG;
} else {
  window.STORE_CONFIG = STORE_CONFIG;
}
