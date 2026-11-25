import { useState } from 'react';
import { mockProducts } from './data/mockData';
import type { Category, Product, CartItem } from './types/product';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { CartPanel } from './components/CartPanel';

export function App() {
  // 1. Estado de la lista de productos cargada desde mockData
  const [products] = useState<Product[]>(mockProducts);

  // 2. Estados para los dos criterios de filtrado en tiempo real
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | Category>('Todos');

  // 3. Estado para la interacción del usuario (carrito de compras)
  const [cart, setCart] = useState<CartItem[]>([]);

  // Filtrado combinado: texto + categoría
  const filteredProducts: Product[] = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  // Agregar producto al carrito (si ya existe, suma 1 a la cantidad)
  const handleAddToCart = (product: Product): void => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Disminuir en 1 la cantidad de un producto (si llega a 0, lo quita)
  const handleDecreaseItem = (id: number): void => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Quitar un producto del carrito por su id
  const handleRemoveFromCart = (id: number): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Vaciar el carrito al cobrar
  const handleClearCart = (): void => {
    setCart([]);
  };

  // Cantidad total de unidades en el carrito para mostrar en el Header
  const totalCartItems: number = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Header
        searchText={searchText}
        onSearchChange={setSearchText}
        totalItems={totalCartItems}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px' }}>
        {/* Grilla de productos filtrados */}
        <section>
          <h2 style={{ marginTop: 0 }}>Productos ({filteredProducts.length})</h2>

          {filteredProducts.length === 0 ? (
            <p>No se encontraron productos con ese filtro.</p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </section>

        {/* Panel derecho del carrito */}
        <CartPanel
          items={cart}
          onIncreaseItem={handleAddToCart}
          onDecreaseItem={handleDecreaseItem}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />
      </main>
    </div>
  );
}

export default App;