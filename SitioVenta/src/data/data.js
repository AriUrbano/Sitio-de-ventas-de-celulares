export const marcas = [
  { id: 1, nombre: 'Apple' },
  { id: 2, nombre: 'Samsung' },
  { id: 3, nombre: 'Xiaomi' },
  { id: 4, nombre: 'Motorola' }
];

export const celulares = [
  // Apple (4 modelos)
  {
    id: 1,
    nombre: 'iPhone 15 Pro',
    descripcion: 'Pantalla Super Retina XDR, chip A17 Pro, cámara de 48 MP',
    precio: 1399,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009280824',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009280648'
    ]
  },
  {
    id: 2,
    nombre: 'iPhone 14',
    descripcion: 'Pantalla Super Retina XDR, chip A15 Bionic, excelente rendimiento',
    precio: 999,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027204753',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205288',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205804'
    ]
  },
  {
    id: 3,
    nombre: 'iPhone SE (3ra gen)',
    descripcion: 'Diseño compacto con chip A15 Bionic',
    precio: 599,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1646415848945',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1646415848946',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1646415848946'
    ]
  },
  {
    id: 4,
    nombre: 'iPhone 13 mini',
    descripcion: 'Pantalla Super Retina XDR, chip A15 Bionic, tamaño compacto',
    precio: 799,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-finish-select-2021?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1629907844000',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-finish-select-2021-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1629907843000',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-finish-select-2021-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1629907844000'
    ]
  },

  // Samsung (4 modelos)
  {
    id: 5,
    nombre: 'Samsung Galaxy S23 Ultra',
    descripcion: 'Pantalla Dynamic AMOLED 2X, cámara de 200MP',
    precio: 1499,
    marcaId: 2,
    fotos: [
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s23-ultra-5g-sm-s918bzkgaro-thumb-534864848?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s23-ultra-5g-sm-s918bzkgaro-534864840?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s23-ultra-5g-sm-s918bzkgaro-534864841?$216_216_PNG$'
    ]
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Z Flip5',
    descripcion: 'Diseño plegable, pantalla AMOLED, resistente',
    precio: 1299,
    marcaId: 2,
    fotos: [
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-z-flip5-5g-sm-f731blbgaro-thumb-537647344?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-z-flip5-5g-sm-f731blbgaro-537647342?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-z-flip5-5g-sm-f731blbgaro-537647343?$216_216_PNG$'
    ]
  },
  {
    id: 7,
    nombre: 'Samsung Galaxy A54',
    descripcion: 'Pantalla Super AMOLED, cámara triple, excelente relación calidad-precio',
    precio: 499,
    marcaId: 2,
    fotos: [
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2303/gallery/ar-galaxy-a54-5g-sm-a546elbgaro-thumb-535354077?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2303/gallery/ar-galaxy-a54-5g-sm-a546elbgaro-535354072?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2303/gallery/ar-galaxy-a54-5g-sm-a546elbgaro-535354073?$216_216_PNG$'
    ]
  },
  {
    id: 8,
    nombre: 'Samsung Galaxy S21 FE',
    descripcion: 'Pantalla AMOLED 120Hz, cámara triple, diseño premium',
    precio: 699,
    marcaId: 2,
    fotos: [
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2201/gallery/ar-galaxy-s21-fe-5g-sm-g990elvgaro-thumb-530402313?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2201/gallery/ar-galaxy-s21-fe-5g-sm-g990elvgaro-530402310?$216_216_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ar/2201/gallery/ar-galaxy-s21-fe-5g-sm-g990elvgaro-530402311?$216_216_PNG$'
    ]
  },

  // Xiaomi (4 modelos)
  {
    id: 9,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara Leica, carga rápida 120W',
    precio: 1199,
    marcaId: 3,
    fotos: [
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.79807080.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80112191.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80332393.png'
    ]
  },
  {
    id: 10,
    nombre: 'Xiaomi Redmi Note 12 Pro+',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 200MP, carga rápida 120W',
    precio: 499,
    marcaId: 3,
    fotos: [
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.79807080.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80112191.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80332393.png'
    ]
  },
  {
    id: 11,
    nombre: 'Xiaomi 12T Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 200MP, Snapdragon 8+ Gen 1',
    precio: 899,
    marcaId: 3,
    fotos: [
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665737915.79807080.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665737915.80112191.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665737915.80332393.png'
    ]
  },
  {
    id: 12,
    nombre: 'Xiaomi Poco X5 Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 108MP, Snapdragon 778G',
    precio: 399,
    marcaId: 3,
    fotos: [
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.79807080.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80112191.png',
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677579923.80332393.png'
    ]
  },

  // Motorola (4 modelos)
  {
    id: 13,
    nombre: 'Motorola Edge 40 Pro',
    descripcion: 'Pantalla pOLED 165Hz, Snapdragon 8 Gen 2, carga rápida 125W',
    precio: 999,
    marcaId: 4,
    fotos: [
      'https://www.motorola.com.ar/sites/default/files/2023-04/motorola-edge-40-pro-1.png',
      'https://www.motorola.com.ar/sites/default/files/2023-04/motorola-edge-40-pro-2.png',
      'https://www.motorola.com.ar/sites/default/files/2023-04/motorola-edge-40-pro-3.png'
    ]
  },
  {
    id: 14,
    nombre: 'Motorola Edge 30 Ultra',
    descripcion: 'Pantalla OLED 144Hz, cámara de 200MP, Snapdragon 8+ Gen 1',
    precio: 899,
    marcaId: 4,
    fotos: [
      'https://www.motorola.com.ar/sites/default/files/2022-09/motorola-edge-30-ultra-1.png',
      'https://www.motorola.com.ar/sites/default/files/2022-09/motorola-edge-30-ultra-2.png',
      'https://www.motorola.com.ar/sites/default/files/2022-09/motorola-edge-30-ultra-3.png'
    ]
  },
  {
    id: 15,
    nombre: 'Motorola G82',
    descripcion: 'Pantalla OLED 120Hz, cámara de 50MP, diseño delgado',
    precio: 399,
    marcaId: 4,
    fotos: [
      'https://www.motorola.com.ar/sites/default/files/2022-05/motorola-g82-1.png',
      'https://www.motorola.com.ar/sites/default/files/2022-05/motorola-g82-2.png',
      'https://www.motorola.com.ar/sites/default/files/2022-05/motorola-g82-3.png'
    ]
  },
  {
    id: 16,
    nombre: 'Motorola Edge 20 Pro',
    descripcion: 'Pantalla OLED 144Hz, cámara de 108MP, diseño premium',
    precio: 599,
    marcaId: 4,
    fotos: [
      'https://www.motorola.com.ar/sites/default/files/2021-07/motorola-edge-20-pro-1.png',
      'https://www.motorola.com.ar/sites/default/files/2021-07/motorola-edge-20-pro-2.png',
      'https://www.motorola.com.ar/sites/default/files/2021-07/motorola-edge-20-pro-3.png'
    ]
  }
];