import { useState } from 'react';
import type { Category, Product, CartItem } from './types/product';

export function App() {
  // 1. Estado para la lista de productos (luego lo conectaremos con mockData.ts)
  const [products] = useState<Product[]>([]);

  // 2. Estados para los dos criterios de filtrado en tiempo real
  const [searchText] = useState<string>('');
  const [selectedCategory] = useState<'Todos' | Category>('Todos');

  // 3. Estado para la interacción del usuario (carrito de compras)
  const [cart] = useState<CartItem[]>([]);

  // Lógica de filtrado combinado (texto + categoría)
  const filteredProducts: Product[] = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Aquí irá el componente Header */}
      <header style={{ borderBottom: '2px solid #ccc', paddingBottom: '12px', marginBottom: '16px' }}>
        <h1>Golden Cashier 🛒</h1>
        <p>Buscador activo: "{searchText}" | Productos en carrito: {cart.length}</p>
      </header>

      {/* Aquí irá el componente CategoryFilter */}
      <section style={{ marginBottom: '20px' }}>
        <strong>Categoría seleccionada:</strong> {selectedCategory}
      </section>

      {/* Estructura de 2 columnas según tu boceto: Catálogo a la izquierda + Mi Carrito a la derecha */}
      <main style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px' }}>
        {/* Aquí irá el componente ProductList */}
        <section style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
          <h2>Lista de Productos ({filteredProducts.length})</h2>
          <p>Próximo paso: cargar datos de prueba y crear las tarjetas de producto.</p>
        </section>

        {/* Aquí irá el componente CartPanel */}
        <aside style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
          <h2>Mi Carrito</h2>
          <p>Ítems agregados: {cart.length}</p>
        </aside>
      </main>
    </div>
  );
}

export default App;
