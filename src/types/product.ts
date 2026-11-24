// Categorías exactas de tu boceto
export type Category = 'Lácteos' | 'Bebidas' | 'Almacén';

// Modelo de cada producto del súper
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  stock: number;
  image: string;
}

// Modelo de un producto dentro del carrito (hereda todo de Product y suma quantity)
export interface CartItem extends Product {
  quantity: number;
}