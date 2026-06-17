const SERVICES_DATA = [
  // ===== EVENTOS EXCLUSIVOS =====
  {
    id: 1,
    name: "Decoración de Eventos Premium",
    description: "Transformamos cualquier espacio en un escenario de lujo. Diseño floral completo para bodas, cumpleaños, aniversarios y celebraciones corporativas de alto perfil.",
    category: "eventos",
    featured: true,
    image: ""
  },
  {
    id: 2,
    name: "Decoración para Bodas",
    description: "El día más especial merece la decoración más especial. Creamos ambientes únicos con flores frescas importadas que harán tu boda inolvidable.",
    category: "eventos",
    featured: false,
    image: ""
  },
  {
    id: 3,
    name: "Eventos Corporativos",
    description: "Impresiona a tus socios y clientes con decoraciones florales de alta gama para lanzamientos, galas y celebraciones empresariales.",
    category: "eventos",
    featured: false,
    image: ""
  },

  // ===== ROSAS IMPORTADAS =====
  {
    id: 4,
    name: "Bouquet de Rosas Importadas",
    description: "Las rosas más finas del mundo, seleccionadas una a una y presentadas en un bouquet que dice todo sin palabras.",
    category: "rosas",
    featured: true,
    image: ""
  },
  {
    id: 5,
    name: "Arreglo de Rosas Gigante",
    description: "Para los momentos que merecen impactar. Arreglos monumentales de rosas rojas importadas que llenan el espacio de amor y elegancia.",
    category: "rosas",
    featured: true,
    image: ""
  },

  // ===== CAJAS Y ARREGLOS =====
  {
    id: 6,
    name: "Caja de Rosas de Lujo",
    description: "La presentación más elegante para las rosas más hermosas. Cajas negras con rosas importadas — el regalo perfecto para quien lo tiene todo.",
    category: "cajas",
    featured: true,
    image: ""
  },
  {
    id: 7,
    name: "Arreglo Personalizado",
    description: "Diseñamos el arreglo de tus sueños. Cuéntanos tu visión y la hacemos realidad con flores frescas y un toque de magia FIFAPARTY.",
    category: "cajas",
    featured: false,
    image: ""
  },

  // ===== GLOBOS Y DETALLES =====
  {
    id: 8,
    name: "Decoración con Globos Premium",
    description: "Globos de corazón, arcos y estructuras elaboradas que llevan cualquier celebración al siguiente nivel.",
    category: "globos",
    featured: false,
    image: ""
  },
  {
    id: 9,
    name: "Detalles & Regalos Únicos",
    description: "Pequeños gestos con gran impacto. Detalles únicos diseñados para sorprender y emocionar en cualquier ocasión.",
    category: "globos",
    featured: false,
    image: ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SERVICES_DATA;
} else {
  window.SERVICES_DATA = SERVICES_DATA;
}
