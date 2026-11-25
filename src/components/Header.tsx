interface HeaderProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  totalItems: number;
}

export function Header({ searchText, onSearchChange, totalItems }: HeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '16px',
        marginBottom: '20px',
        borderBottom: '3px solid #f59e0b',
        gap: '16px',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#111827' }}>
          Golden Cashier 🛒
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>
          Sistema de Punto de Venta
        </p>
      </div>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          width: '280px',
          borderRadius: '6px',
          border: '1px solid #d1d5db',
        }}
      />

      <div
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#fef3c7',
          color: '#92400e',
          padding: '8px 14px',
          borderRadius: '6px',
        }}
      >
        Carrito: {totalItems} {totalItems === 1 ? 'ítem' : 'ítems'}
      </div>
    </header>
  );
}