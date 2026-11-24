import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const isOutOfStock = product.stock === 0;

  return (
    <article
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        gap: '10px',
      }}
    >
      {/* Imagen/emoji y categoría */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '42px', marginBottom: '8px' }}>{product.image}</div>
        <span
          style={{
            fontSize: '12px',
            backgroundColor: '#f3f4f6',
            padding: '2px 8px',
            borderRadius: '12px',
            color: '#4b5563',
          }}
        >
          {product.category}
        </span>
      </div>

      {/* Nombre, precio y stock */}
      <div>
        <h3 style={{ margin: '4px 0', fontSize: '16px' }}>{product.name}</h3>
        <p style={{ margin: '4px 0', fontWeight: 'bold', fontSize: '18px', color: '#111827' }}>
          ${product.price}
        </p>
        <p style={{ margin: 0, fontSize: '13px', color: isOutOfStock ? '#dc2626' : '#6b7280' }}>
          {isOutOfStock ? 'Sin stock' : `Stock disponible: ${product.stock}`}
        </p>
      </div>

      {/* Botón para agregar al carrito */}
      <button
        type="button"
        disabled={isOutOfStock}
        onClick={() => onAddToCart(product)}
        style={{
          marginTop: '6px',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold',
          borderRadius: '6px',
          border: 'none',
          cursor: isOutOfStock ? 'not-allowed' : 'pointer',
          backgroundColor: isOutOfStock ? '#9ca3af' : '#16a34a',
          color: '#ffffff',
        }}
      >
        {isOutOfStock ? 'Agotado' : '+ Agregar'}
      </button>
    </article>
  );
}