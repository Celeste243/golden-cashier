import type { CartItem } from '../types/product';

interface CartPanelProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export function CartPanel({ items, onRemoveItem, onClearCart }: CartPanelProps) {
  // Calcula el total multiplicando precio por cantidad de cada ítem
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: 'fit-content',
      }}
    >
      <h2 style={{ margin: 0, fontSize: '20px' }}>Mi Carrito 🧾</h2>

      {items.length === 0 ? (
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          No hay productos agregados.
        </p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '14px',
                }}
              >
                <div>
                  <strong>{item.name}</strong>
                  <div style={{ color: '#6b7280' }}>
                    {item.quantity} x ${item.price} = ${item.quantity * item.price}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  style={{
                    backgroundColor: '#fee2e2',
                    color: '#dc2626',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              borderTop: '2px solid #e5e7eb',
              paddingTop: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>

          <button
            type="button"
            onClick={onClearCart}
            style={{
              padding: '10px',
              fontSize: '15px',
              fontWeight: 'bold',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Cobrar / Vaciar
          </button>
        </>
      )}
    </aside>
  );
}