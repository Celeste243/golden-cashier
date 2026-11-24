import type { Product } from '../types/product';

export const mockProducts: Product[] = [
  // Lácteos (4 productos)
  {
    id: 1,
    name: 'Leche Entera 1L',
    price: 1450,
    category: 'Lácteos',
    stock: 20,
    image: '🥛',
  },
  {
    id: 2,
    name: 'Yogur Bebible Frutilla 1L',
    price: 1890,
    category: 'Lácteos',
    stock: 15,
    image: '🍓',
  },
  {
    id: 3,
    name: 'Queso Cremoso x 500g',
    price: 4200,
    category: 'Lácteos',
    stock: 10,
    image: '🧀',
  },
  {
    id: 4,
    name: 'Manteca Clásica 200g',
    price: 2100,
    category: 'Lácteos',
    stock: 12,
    image: '🧈',
  },

  // Bebidas (4 productos)
  {
    id: 5,
    name: 'Agua Mineral Sin Gas 2L',
    price: 1100,
    category: 'Bebidas',
    stock: 30,
    image: '💧',
  },
  {
    id: 6,
    name: 'Gaseosa Cola 2.25L',
    price: 2800,
    category: 'Bebidas',
    stock: 18,
    image: '🥤',
  },
  {
    id: 7,
    name: 'Jugo de Naranja 1L',
    price: 1650,
    category: 'Bebidas',
    stock: 14,
    image: '🧃',
  },
  {
    id: 8,
    name: 'Soda en Sifón 1.5L',
    price: 950,
    category: 'Bebidas',
    stock: 25,
    image: '🫧',
  },

  // Almacén (4 productos)
  {
    id: 9,
    name: 'Yerba Mate Tradicional 1kg',
    price: 3900,
    category: 'Almacén',
    stock: 22,
    image: '🧉',
  },
  {
    id: 10,
    name: 'Fideos Tallarines 500g',
    price: 1250,
    category: 'Almacén',
    stock: 28,
    image: '🍝',
  },
  {
    id: 11,
    name: 'Arroz Largo Fino 1kg',
    price: 1750,
    category: 'Almacén',
    stock: 19,
    image: '🍚',
  },
  {
    id: 12,
    name: 'Aceite de Girasol 900ml',
    price: 2300,
    category: 'Almacén',
    stock: 16,
    image: '🌻',
  },
];