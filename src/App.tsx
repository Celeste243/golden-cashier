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

  // Agregar producto al carrito respetando el stock disponible
  const handleAddToCart = (product: Product): void => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      if (product.stock <= 0) {
        return prevCart;
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

  // Reiniciar búsqueda y categoría
  const handleClearFilters = (): void => {
    setSearchText('');
    setSelectedCategory('Todos');
  };

  const hasActiveFilters: boolean =
    searchText.trim() !== '' || selectedCategory !== 'Todos';

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
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearFilters}
      />

      <main style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px' }}>
        {/* Grilla de productos filtrados */}
        <section>
          <h2 style={{ marginTop: 0 }}>
            Productos ({filteredProducts.length} de {products.length})
          </h2>

          {filteredProducts.length === 0 ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px dashed #d1d5db',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                color: '#6b7280',
              }}
            >
              <p style={{ marginTop: 0 }}>No se encontraron productos con ese filtro.</p>
              <button
                type="button"
                onClick={handleClearFilters}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #2563eb',
                  backgroundColor: '#eff6ff',
                  color: '#2563eb',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Mostrar todos los productos
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
              }}
            >
              {filteredProducts.map((product) => {
                const inCart = cart.find((item) => item.id === product.id);
                const availableStock = product.stock - (inCart ? inCart.quantity : 0);

                return (
                  <ProductCard
                    key={product.id}
                    product={{ ...product, stock: availableStock }}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                );
              })}
            </div>
          )}
        </section>

        {/* Panel derecho del carrito */}
        <CartPanel
          items={cart}
          onIncreaseItem={(item) => handleAddToCart(item)}
          onDecreaseItem={handleDecreaseItem}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />
      </main>
    </div>
  );
}

export default App;